import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Button, TextField, Card, Grid, Divider, Stack } from '@mui/material';
import Express from './../../fetchExpress'

function Weeks() {
    const [weeks, setWeeks] = useState([]);
    const [date, setDate] = useState('');

    const { year, monthAndMonthID } = useParams();
    const navigate = useNavigate();
    const monthID = monthAndMonthID.replace(/^\D+/g, '');
    const extractedMonth = monthAndMonthID.replace(/[^a-zA-Z]+/g, '');

    useEffect(() => {
        Express.getWeeks(year, monthID).then(savedWeeks => {
            const descendingWeeks = [];
            savedWeeks.forEach(week => {
                week.week = Number(week.week.replace(/^\D+/g, ''))
            })

            let swapCount = 0
            let swapping = true;
            
            while (swapping) {
                swapping = false;
                for (let i = 0; i < savedWeeks.length - 1; i++) {
                    if (savedWeeks[i].week > savedWeeks[i + 1].week) {
                        const temp = savedWeeks[i + 1];
                        savedWeeks[i + 1] = savedWeeks[i];
                        savedWeeks[i] = temp;

                        swapCount++;
                        swapping = true;
                    }
                }
            }

            setWeeks(savedWeeks)
        } )
    }, [weeks]);


    const dateChange = (e) => {
        setDate(`${extractedMonth} ${e.target.value}`)
    };

    const handleSaveWeek = () => {
        const week = {date, monthID}
        const repetitiveWeek = weeks.find(week => week.week === Number(date.replace(/^\D+/g, ''))); 
        if(date === `${extractedMonth} ` || repetitiveWeek) return;
        Express.createWeek(year, week);
    };

    const handleDeleteWeek = (e) => {
        const weekId = e.target.value;
        Express.deleteWeek(year, weekId).then(checkError400 => {
            if(checkError400 === 400){
                return '';
            } else{
                setWeeks(currentWeek => currentWeek.filter(week => week.id !== weekId))
            }
        });
    };

    const renderWeeks = () => {
        return weeks.map(week => {
            return (
                <div style={{textAlign: "center", paddingTop: '10px'}}>
                    <Link className="link" to={`/${year}/${monthAndMonthID}/${week.id}`}
                        key={week.id}>
                        <h3>{extractedMonth} {week.week}</h3>
                    </Link>
                    <Button style={{margin: '10px'}} variant='outlined' value={week.id} onClick={handleDeleteWeek}>Delete</Button>
                </div>
            )
        });
    };

    return (
        <div className="container">
            <h1 style={{textAlign:"center"}}>Weeks</h1>

            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item alignItems="center" style={{justifyItems:'center'}}>
                    <Stack spacing={2}>
                        <Card>
                            <Stack divider={<Divider />}>
                                {renderWeeks()}
                            </Stack>
                            <TextField
                                onChange={dateChange}
                                fullWidth
                                id="filled-number"
                                label="Day"
                                type="number"
                                max='2000'
                                inputProps={{
                                    min: "1", 
                                    max: "31"
                                }}
                            />
                        </Card>
                        <p style={{width: '100%', padding: '0'}}> *Make sure the day is a Monday. <br></br>For example, the date 10/5/2020, you would put 5*</p>
                        <Button variant='contained' onClick={handleSaveWeek}>Add Next Week!</Button>
                        <Button id="summary" variant='outlined' onClick={() => navigate(`/${year}/${monthAndMonthID}/monthSummary`)}>
                            <h2 style={{textAlign:'center', cursor: 'pointer'}}>Month Summary!</h2>
                        </Button>
                    </Stack>
                </Grid>    
            </Grid>
        </div>
        
    )
}

export default Weeks;