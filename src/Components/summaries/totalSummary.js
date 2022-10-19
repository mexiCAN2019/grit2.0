import React, { useState, useEffect } from 'react';
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

function TotalSummary() {
    const [tableSkills, setTableSkills] = useState([]);
    const [checkboxSkills, setCheckboxSkilss] = useState([]);
    const [subjective, setSubjective] = useState({});
    const [text, setText] = useState('');

    useEffect(() => {
        Express.getTotalTableSkills().then(tables => setTableSkills(tables));
        Express.getTotalCheckboxSkills().then(checkboxes => setCheckboxSkilss(checkboxes));
        Express.getTotalTextbox().then(textbox => setSubjective(textbox));
    }, []);

    const handleSave = () => {
        const newTextbox = {
            text: text,
        };

        Express.createTotalTextbox(newTextbox).then(textBox => Express.getTotalTextbox().then(textbox => setSubjective(textbox)));
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
                <Button variant='contained' onClick={() => Express.udpateTotalTextbox(updatedTextbox)}>Save Changes</Button>
            </div> 
    };

    return (
        <Container>
            <h2 style={{textAlign:"center"}}>Total Summary</h2>
                <h5 style={{textAlign:"center"}}><i>it takes 10,000 hours to become a pro!</i></h5>
            <Grid container justifyContent="center" alignItems="center" rowSpacing={5}>
                <Grid item xs={7} md={5} style={{minWidth: '351px'}}>
                    <Card style={{minWidth: '351px'}}>
                        <CardContent>
                            <Stack direction="column" spacing={2} divider={<Divider />}>
                            {((tableSkills && checkboxSkills) == false) && "Nothing to show yet! Add some skills to see how far you've come!"}
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
                <Grid item xs={12} style={{marginBottom: '20px'}}>
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
};

export default TotalSummary;