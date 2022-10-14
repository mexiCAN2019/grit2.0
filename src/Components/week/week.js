import React, { useState, useEffect } from 'react';
import FormList from './formList';
import Express from './../../fetchExpress';
import { useParams } from 'react-router-dom';
import { 
    TextField,
    Button,
    Select,
    MenuItem,
    Grid,
    Card,
    Divider,
    Stack,
    Alert
} from '@mui/material'
import Snackbar from '@mui/material/Snackbar';

function Week() {
    const [tables, setTables] = useState([]);
    const [checkboxes, setCheckBoxes] = useState([]);
    const [textboxes, setTextboxes] = useState([]);
    const [skillName, setSkillName] = useState('');
    const [form, setForm] = useState('');
    const [snackbar, setSnackbar] = useState({successSave: false, success: false, error: false, vertical: 'top', horizontal: 'center',})

    const { vertical, horizontal } = snackbar;
    const { year, monthAndMonthID, weekID } = useParams();
    const monthID = monthAndMonthID.replace(/^\D+/g, '');

    useEffect(() => {
        Express.getTables(year, weekID).then(tables => setTables(tables));
        Express.getCheckboxes(year, weekID).then(checkboxes => setCheckBoxes(checkboxes));
        Express.getTextboxes(year, weekID).then(textboxes => setTextboxes(textboxes));
    }, []);

    const handleClose = () => {
        setSnackbar({ ...snackbar, successSave: false, success: false, error: false });
    };
    const handleSnackBar = (type) => {
        setSnackbar({ ...snackbar, [type]: true });
    }

    const handleActivityChange = (e) => {
        setSkillName(e.target.value);
    };

    const handleFormChange = (e) => {
        setForm(e.target.value);
    };

    const onAdd = () => {
        if(skillName){
            switch(form){
                case 'table':
                    let newTable = {
                        skillName: skillName.toUpperCase(),
                        weekID: weekID,
                        monthID: monthID,
                        year: year,
                    };
                    Express.createTable(year, newTable).then(responseOk => {
                        if(responseOk){
                            Express.getTables(year, weekID).then(tables => setTables(tables));
                            handleSnackBar('success');
                        }
                    });
                    break;
                case 'checkbox':
                    const newCheckbox = {
                        skillName: skillName.toUpperCase(),
                        weekID: weekID,
                        monthID: monthID,
                        year: year,
                        monday: 0,
                        tuesday: 0,
                        wednesday: 0,
                        thursday: 0,
                        friday: 0,
                        saturday: 0,
                        sunday: 0
                    };
                    Express.createCheckbox(year, newCheckbox).then(responseOk => {
                        if(responseOk){
                            Express.getCheckboxes(year, weekID).then(checkboxes => setCheckBoxes(checkboxes));
                            handleSnackBar('success');
                        }
                    });
                    break;
                case 'textbox':
                    const newTextbox = {
                        text: null,
                        skillName: skillName.toUpperCase(),
                        weekID: weekID,
                        monthID: monthID,
                        year: year
                    }
                    Express.createTextbox(year, newTextbox).then(responseOk => {
                        if(responseOk) {
                            Express.getTextboxes(year, weekID).then(textboxes => setTextboxes(textboxes));
                            handleSnackBar('success');
                        }
                    });
                    break;
                default:
                    return;
            };
        }
        
    };

    const deleteForm = (form, activity) => {
        switch(form){
            case 'table':
                if(window.confirm('Are you sure you want to delete table?')){
                    Express.deleteTable(year, activity.id).then(response => {
                        if(response === 200){
                            handleSnackBar('success');
                        }
                    });
                    setTables(currentTable => {
                        return currentTable.filter(table => table.id !== activity.id)
                    });
                } 
                break;
            case 'checkbox':
                if(window.confirm('Are you sure you want to delete checkbox?')){
                    Express.deleteCheckbox(year, activity.id).then(response => {
                        if(response === 200){
                            handleSnackBar('success');
                        }
                    });
                    setCheckBoxes(currentCheckbox => {
                        return currentCheckbox.filter(checkbox => checkbox.id !== activity.id)
                    });
                }
                break;
            case 'textbox':
                if(window.confirm('Are you sure you want to delete textbox?')){
                    Express.deleteTextbox(year, activity.id).then(response => {
                        if(response === 200){
                            handleSnackBar('success');
                        }
                    });
                    setTextboxes(currentTextboxes => {
                        return currentTextboxes.filter(textbox => textbox.id !== activity.id)
                    });
                }
                break;
        };
    };


    return (
        <Grid container direction='column' justifyContent="center" spacing={3}>
            <Grid item justifyContent='center' alignItems="center">
                <h1 style={{textAlign:'center'}}>This Week</h1>
                <Divider />
                <Card style={{margin: '30px auto', padding: '15px', borderRadius: '10px', minWidth: '300px', width: '60vw'}}>
                    <Stack justifyContent="center" direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{xs: 3, sm: 5, md: 8 }}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <label style={{marginRight: "10px"}}>Name of Skill</label>
                            <TextField required id="outlined-required" onChange={handleActivityChange} size="small" />
                        </div>
                        <div>
                            <label >Choose Type</label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleFormChange}
                            >
                                <MenuItem value="table">Hours & Min</MenuItem>
                                <MenuItem value="checkbox">Checkboxes</MenuItem>
                                <MenuItem value="textbox">Textbox</MenuItem>
                            </Select>
                        </div>
                        <Button size="small" variant='contained' onClick={onAdd}>Add</Button>
                    </Stack>
                </Card>
                <Divider />
            </Grid>
            <Grid item>
                <FormList tables={tables}
                        checkboxes={checkboxes}
                        textboxes={textboxes}
                        year={year}
                        handleSnackBar={handleSnackBar}
                        onDelete={deleteForm} />
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackbar.successSave}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="success">Saved!</Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackbar.success}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="success"></Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackbar.error}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="error">Error: Total Goal Hours or Name of skill cannot be left blank</Alert>
            </Snackbar>
        </Grid>
    )
}

export default Week;