import { expressionStatement } from '@babel/types';
import React, { useState, useEffect } from 'react';
import { Input, Button, Typography, Card, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Express from './../fetchExpress';

function HomePage() {
    const [years, setYears] = useState([]);
    const [yearChange, setYearChange] = useState(['']);

    useEffect(() => {
        Express.getYears().then(savedYears => setYears(savedYears.years));
    }, []);

    

    const handleYearChange = (e) => {
        setYearChange(e.target.value);
    }

    const handleSaveYear = () => {
        const repetitiveYear = years.find(year => year.year == yearChange); 
        if(!yearChange || repetitiveYear) {
            return;
        } else {
            Express.createYear(yearChange).then(newYear => setYears(currentYears => [{id: 0, year: newYear}, ...currentYears]));
        };
    };

    const handleDeleteYear = (e) => {
        const year = e.target.value;
        Express.deleteYear(year).then(checkError400 => {
            if(checkError400 == 'error 400'){
                return;
            } setYears(currentYear => currentYear.filter(currentyear => currentyear.year != year))});
    };

    const renderYears = () => {
        return years.map(year => {
            return (
                <div>
                    <Link className="link" to={`/${year.year}`}
                        key={year.id}>
                        <h3>{year.year}</h3>
                    </Link>
                    <button value={year.year} onClick={handleDeleteYear}>Delete</button>
                </div>
            );
        });
    };


    return (
        <div>
            <h1>Grit</h1>
            <Container>
                <Grid container item md={6}>
                    <Grid item md={4}>
                        <Card>
                            {renderYears()}

                            <Input type='number' onChange={handleYearChange} />
                            <Button variant='contained' onClick={handleSaveYear}>Add Next Year!</Button>
                        </Card>
                    </Grid>    
                </Grid>
            </Container>    
        </div>
    )
}

export default HomePage;