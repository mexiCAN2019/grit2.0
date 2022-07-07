import React, { useState } from 'react';
import Express from './../../fetchExpress';
import { 
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    FormControl,
    FormGroup,
    FormLabel,
    Card
} from '@mui/material'

function Checkboxes({ activity, year, onDelete, handleSnackBar }) {
    const [skillName, setSkillName] = useState(activity.skillName);

    const [mondayChecked, setMondayChecked] = useState(activity.monday);
    const [tuesdayChecked, setTuesdayChecked] = useState(activity.tuesday);
    const [wednesdayChecked, setWednesdayChecked] = useState(activity.wednesday);
    const [thursdayChecked, setThursdayChecked] = useState(activity.thursday);
    const [fridayChecked, setFridayChecked] = useState(activity.friday);
    const [saturdayChecked, setSaturdayChecked] = useState(activity.saturday);
    const [sundayChecked, setSundayChecked] = useState(activity.sunday);
    

    const handleCheck = (e) => {
        const itemCheck = e.target.checked;
        switch(e.target.id){
            case 'monday':
                setMondayChecked(itemCheck);
                break;
            case 'tuesday':
                setTuesdayChecked(itemCheck);
                break;
            case 'wednesday':
                setWednesdayChecked(itemCheck);
                break;
            case 'thursday':
                setThursdayChecked(itemCheck);
                break;
            case 'friday':
                setFridayChecked(itemCheck);
                break;
            case 'saturday':
                setSaturdayChecked(itemCheck);
                break;
            case 'sunday':
                setSundayChecked(itemCheck);
                break;
        };
    };

    const updateCheckbox = (e) => {
        e.preventDefault();
        const updatedCheckbox = {
            skillName: skillName.toUpperCase(),
            monday: mondayChecked,
            tuesday: tuesdayChecked,
            wednesday: wednesdayChecked,
            thursday: thursdayChecked,
            friday: fridayChecked,
            saturday: saturdayChecked,
            sunday: sundayChecked,
            id: activity.id
        };
        Express.updateCheckbox(year, updatedCheckbox).then(response => {
            if(response === 200){
                handleSnackBar('successSave');
            }
        });
    };

    return (
        <Card style={{margin: '30px 100px', padding: '15px', borderRadius: '20px'}}>
            <TextField required id="outlined-required" label="Skill" defaultValue={activity.skillName} onChange={(e) => setSkillName(e.target.value)} />
            <br></br>
            <div style={{margin: '15px auto'}}>
                <Button style={{}} variant='outlined' onClick={() => onDelete('checkbox', activity)}>Delete</Button>
                <Button style={{}} variant='contained' onClick={updateCheckbox}>Save Changes</Button>
            </div>
            <FormControl>
                <FormLabel>Days</FormLabel>
                <FormGroup>
                    <FormControlLabel 
                        label='Monday'
                        control={<Checkbox id='monday' checked={mondayChecked} onChange={handleCheck} />} 
                    />
                    <FormControlLabel 
                        label='Tuesday'
                        control={<Checkbox id='tuesday' checked={tuesdayChecked} onChange={handleCheck} />} 
                    />
                    <FormControlLabel 
                        label='Wednesday'
                        control={<Checkbox id='wednesday' checked={wednesdayChecked} onChange={handleCheck} />} 
                    />
                    <FormControlLabel 
                        label='Thursday'
                        control={<Checkbox id='thursday' checked={thursdayChecked} onChange={handleCheck} />} 
                    />
                    <FormControlLabel 
                        label='Friday'
                        control={<Checkbox id='friday' checked={fridayChecked} onChange={handleCheck} />} 
                    />
                    <FormControlLabel 
                        label='Saturday'
                        control={<Checkbox id='saturday' checked={saturdayChecked} onChange={handleCheck} />} 
                    />
                    <FormControlLabel 
                        label='Sunday'
                        control={<Checkbox id='sunday' checked={sundayChecked} onChange={handleCheck} />} 
                    />
                </FormGroup>
            </FormControl>
            
        </Card>
    )
}

export default Checkboxes;