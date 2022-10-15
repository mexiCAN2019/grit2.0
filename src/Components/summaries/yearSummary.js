import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Express from './../../fetchExpress';
import TableSummary from './tableSummary';
import CheckboxSummary from './checkboxSummary';
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

function YearSummary() {
    const [tableSkills, setTableSkills] = useState([]);
    const [checkboxSkills, setCheckboxSkilss] = useState([]);
    const [subjective, setSubjective] = useState({});
    const [text, setText] = useState('');

    const { year } = useParams();

    useEffect(() => {
        Express.getYearTableSkills(year).then(tables => setTableSkills(tables));
        Express.getYearCheckboxSkills(year).then(checkboxes => setCheckboxSkilss(checkboxes));
        Express.getYearSummaryTextbox(year).then(textbox => setSubjective(textbox));
    }, []);

    const handleSave = () => {
        const newTextbox = {
            skillName: 'Year Review',
            text: text,
            year: year
        };

        Express.createYearSummaryTextbox(year, newTextbox).then(textBox => Express.getYearSummaryTextbox(year).then(textbox => setSubjective(textbox)));
    };

    const renderSaveOrUpdateButtonTextarea = () => {
        if(!subjective){
            return <div>
                <TextField placeholder="Add comments" variant='outlined' fullWidth multiline rows={4} onChange={(e) => setText(e.target.value)} />
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
                <Button variant='contained' onClick={() => Express.updateYearSummaryTextbox(year, updatedTextbox)}>Save Changes</Button>
            </div> 
        
    };

    return (
        <Container>
            <h1 style={{textAlign:"center"}}>Year Review</h1>
            <Grid container justifyContent="center" rowSpacing={5}>
                <Grid item sm={7}>
                    <Card>
                        <CardContent>
                            <Stack direction="column" spacing={2} divider={<Divider />}>
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

export default YearSummary;