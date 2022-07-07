import React from 'react';
import Tables from './table';
import Checkboxes from './checkbox';
import Textbox from './textbox';
import { 
    TextField,
    Button,
    Select,
    MenuItem,
    Grid
} from '@mui/material'

function FormList({ tables, checkboxes, textboxes, year, onDelete, handleSnackBar }) {


    return(
        <Grid container direction="column">
            <Grid item>
                {tables.map(activity => {
                    return <Tables activity={activity}
                                key={activity.id}
                                year={year}
                                handleSnackBar={handleSnackBar}
                                onDelete={onDelete} />
                })}
            </Grid>
            
            <Grid item justifyContent="center">
                <Grid container direction="row">
                    {checkboxes.map(activity => {
                        return (
                        <Grid item sm={12} md={4} xl={3}>
                            <Checkboxes activity={activity}
                                        key={activity.id}
                                        onDelete={onDelete}
                                        handleSnackBar={handleSnackBar}
                                        year={year} />
                        </Grid>
                    )})}
                </Grid>
            </Grid>
            
            <Grid item>
                {textboxes.map(activity => {
                    return <Textbox activity={activity}
                                    key={activity.id}
                                    onDelete={onDelete}
                                    handleSnackBar={handleSnackBar}
                                    year={year} />
                })}
            </Grid>
            
        </Grid>
    )
}

export default FormList;