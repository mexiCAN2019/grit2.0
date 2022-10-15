import React from 'react';
import Tables from './table';
import Checkboxes from './checkbox';
import Textbox from './textbox';
import { 
    Grid
} from '@mui/material'

function FormList({ tables, checkboxes, textboxes, year, onDelete, handleSnackBar }) {


    return(
        <Grid container direction="column">
            <Grid item>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {tables.map(activity => {
                        return <Tables activity={activity}
                                    key={activity.id}
                                    year={year}
                                    handleSnackBar={handleSnackBar}
                                    onDelete={onDelete} />
                    })}
                </div>
            </Grid>
            
            <Grid item>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {checkboxes.map(activity => {
                        return (
                            <Checkboxes activity={activity}
                                        key={activity.id}
                                        onDelete={onDelete}
                                        handleSnackBar={handleSnackBar}
                                        year={year} />
                    )})}
                </div>
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