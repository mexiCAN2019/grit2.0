import React, { useState, useEffect } from 'react';
import { Button, TextField, Card, Grid, Divider, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Express from './../fetchExpress';

function HomePage() {
    const [years, setYears] = useState([]);
    const [yearChange, setYearChange] = useState(['']);

    const navigate = useNavigate();

    useEffect(() => {
        Express.getYears().then(savedYears => setYears(savedYears.years));
    }, []);

    

    const handleYearChange = (e) => {
        setYearChange(e.target.value);
    }

    const handleSaveYear = () => {
        const repetitiveYear = years.find(year => year.year === yearChange); 
        if(!yearChange || repetitiveYear) {
            return;
        } else {
            Express.createYear(yearChange).then(newYear => setYears(currentYears => newYear > years[0].year ? [{year: newYear}, ...currentYears] : [...currentYears, {year: newYear}]));
        };
    };

    const handleDeleteYear = (e) => {
        const year = Number(e.target.value);
        console.log(typeof year)
        Express.deleteYear(year).then(checkError400 => {
            if(checkError400 === 400){
                return '';
            } else{
                const filteredYears = years.filter(currentYear => {
                    console.log(currentYear.year, typeof currentYear.year);
                    return currentYear.year != year
                })
                console.log(filteredYears)
                setYears(filteredYears);
            }
        });
    };

    const renderYears = () => {
        return years.map(year => {
            return (
                <div style={{textAlign:"center"}} key={year.year}>
                    <Link color='primary' to={`/${year.year}`}>
                        <h2>{year.year}</h2>
                    </Link>
                    <Button style={{margin: '10px'}} variant='outlined' value={year.year} onClick={handleDeleteYear}>Delete</Button>
                </div>
            );
        });
    };


    return (
        <div>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item alignItems="center" style={{justifyItems:'center'}}>
                    <Stack spacing={2}>
                        <Card>
                            <Stack divider={<Divider />} spacing={2}>
                                {renderYears()}
                            </Stack>
                            <TextField
                                onChange={handleYearChange}
                                fullWidth
                                id="filled-number"
                                label="Year"
                                type="number"
                                inputProps={{
                                    min: '2020'
                                }}
                            />
                        </Card>
                        <Button variant='contained' onClick={handleSaveYear}>Add Next Year!</Button>
                            <Button id="summary" variant='outlined' onClick={() => navigate('/totalSummary')}>
                                <h2 style={{textAlign:'center', cursor: 'pointer'}}>Total Summary!</h2>
                            </Button>
                    </Stack>
                </Grid>    
            </Grid>
        </div>
    )
}

export default HomePage;