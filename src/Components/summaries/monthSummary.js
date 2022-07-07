import React, { useState, useEffect } from 'react';
import Express from './../../fetchExpress';
import TableSummary from './tableSummary';
import CheckboxSummary from './checkboxSummary';
import { useParams } from 'react-router-dom';
import { 
    TextField,
    Button,
    Grid,
    Stack,
    Container,
    Divider,
    Card,
    CardContent
} from '@mui/material'

function MonthSummary() {
    const [tableSkills, setTableSkills] = useState([]);
    const [checkboxSkills, setCheckboxSkilss] = useState([]);
    const [subjective, setSubjective] = useState({});
    const [text, setText] = useState('');

    const { year, monthAndMonthID } = useParams();
    const monthID = monthAndMonthID.replace(/^\D+/g, '');

    useEffect(() => {
        Express.getTableSkills(year, monthID).then(tables => setTableSkills(tables));
        Express.getCheckboxSkills(year, monthID).then(checkboxes => setCheckboxSkilss(checkboxes));
        Express.getMonthReviewTextbox(year, monthID).then(textbox => setSubjective(textbox));
    }, []);

    const handleSave = () => {
        const newTextbox = {
            year: year,
            text: text,
            monthID: monthID
        };

        Express.createMonthReviewTextbox(year, newTextbox).then(textBox => Express.getMonthReviewTextbox(year, monthID).then(textbox => setSubjective(textbox)));
    };

    const renderSaveOrUpdateButtonTextarea = () => {
        if(!subjective){
            return <div>
                    <TextField placeholder="Add comments" variant='outlined' fullWidth multiline rows={4} onChange={(e) => setText(e.target.value)} defaultValue={text} value={text} />
                    <br></br>
                    <Button variant='contained' onClick={handleSave}>Save Changes</Button>
                </div>
        }
        const updatedTextbox = {
            id: subjective.id,
            text: text
        };
        return <div>
                <TextField placeholder="Add comments" variant='outlined' fullWidth multiline rows={4} onChange={(e) => setText(e.target.value)} defaultValue={subjective.text} />
                <br></br>
                <Button variant='contained' onClick={() => Express.updateReviewTextbox(year, updatedTextbox)}>Save Changes</Button>
            </div> 
    };

    return (
        <Container>
            <h2 style={{textAlign:"center"}} className='primary'>Month Summary</h2>
            <Grid container justifyContent="center" rowSpacing={5}>
                <Grid item sm={7}>
                    <Card>
                        <CardContent>
                            <Stack direction='column' spacing={2} divider={<Divider />}>
                                {tableSkills.map(skill => {
                                    return <TableSummary skill={skill} />
                                })}
                                {checkboxSkills.map(skill => {
                                    return <CheckboxSummary skill={skill} />
                                })}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} style={{marginBottom: '20px'}}>
                    <Card>
                        <CardContent>
                            <h3>Thoughts/Notes</h3>
                            {renderSaveOrUpdateButtonTextarea()}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MonthSummary;