import React, { useState } from 'react';
import Express from './../../fetchExpress'
import { 
    TextField,
    Button,
    Container,
    Card
} from '@mui/material'

function Textbox({ activity, onDelete, handleSnackBar }) {
    const [text, setText] = useState(activity.text);
    const [skillName, setSkillName] = useState(activity.skillName);


    const handleSaveChanges = () => {
        const updatedTextbox = {
            text: text,
            skillName: skillName.toUpperCase(), 
            id: activity.id
        };
        Express.updateTextbox(activity.year, updatedTextbox).then(response => {
            if(response === 200){
                handleSnackBar('successSave');
            }
        });
    };

    return (
        <Container>
            <Card style={{margin: '30px 100px', padding: '15px', borderRadius: '10px'}}>
                <TextField required id="outlined-required" label="Skill" defaultValue={skillName} onChange={(e) => setSkillName(e.target.value)} />
                <br />
                <Button variant='outlined' onClick={() => onDelete('textbox', activity)}>Delete</Button>
                <Button variant='contained' onClick={handleSaveChanges} style={{margin: '5px'}}>Save Changes</Button>
                <br></br>
                <TextField variant='outlined' fullWidth multiline rows={4} onChange={(e) => setText(e.target.value)} defaultValue={text} value={text} />
            </Card>
        </Container>
    )
}

export default Textbox;