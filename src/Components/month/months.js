import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Grid, Stack, Divider } from '@mui/material';
import YearBar from './yearBar';
import Express from './../../fetchExpress';
// import { SwitchRight } from '@mui/icons-material';

const { createMonth } = Express;

function Months() {
    const [months, setMonths] = useState([]);

    const { year } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Express.getMonths(year).then(savedMonths => setMonths(savedMonths))
        async function fetchData() {
            const fetchedMonths = await Express.getMonths(year);
            setMonths(fetchedMonths);
        }

        fetchData();
    }, []);

    const handleAddMonth = () => {
        switch(months.length) {
            case 0:
                createMonth(year, 'January');
                break;
            case 1:
                createMonth(year, 'February');
                break;
            case 2:
                createMonth(year, 'March');
                break;
            case 3:
                createMonth(year, 'April');
                break;
            case 4:
                createMonth(year, 'May');
                break;
            case 5:
                createMonth(year, 'June');
                break;
            case 6:
                createMonth(year, 'July');
                break;
            case 7:
                createMonth(year, 'August');
                break;
            case 8:
                createMonth(year, 'September');
                break;
            case 9:
                createMonth(year, 'October');
                console.log('Oct')
                break;
            case 10:
                createMonth(year, 'November');
                console.log('Nov')
                break;
            case 11:
                createMonth(year, 'December');
                console.log('Dec')
                break;
            case 12:
                createMonth(year, 'Done!');
                break;
            default:
                return;
        }
        //For some reason, the creatMonth request would be sent first, but then the getMonths request would be called and finsihed in the middle of the createMonth. Resulting in months not getting fetched after post.
        setTimeout(() => {
            Express.getMonths(year).then(savedMonths => setMonths(savedMonths));
        }, 250);
    };

    const renderDeleteButton = (id) => {
        const monthToRenderDelete = months.length - 1;
        if(months[monthToRenderDelete].id === id){
            return <Button style={{margin: '10px'}} variant='outlined' onClick={() => Express.deleteMonth(year,id).then(checkError400 => {
                if(checkError400 === 400){
                    return '';
                } else{
                    setMonths(currentMonths => currentMonths.filter(currentMonth => currentMonth.id !== id));
                }
            })}>delete</Button>;
        };
    };

    const renderMonths = () => {
        return months.map(month => {
            if(month.month === 'Done!'){
                return <div style={{margin: '20px', textAlign: 'center'}}>
                            <h3>{month.month}</h3>
                            {renderDeleteButton(month.id)}
                        </div>
            }
            return (
                <div style={{margin: '20px', textAlign: 'center'}}>
                    <Link className="link" to={`/${month.year}/${month.month}${month.id}`}
                        key={month.id}>
                        <h3>{month.month}</h3>
                    </Link>
                    {renderDeleteButton(month.id)}
                </div>
            );
        });
    };

    return (
        <div>
            <YearBar months={months} />
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item alignItems="center" style={{justifyItems:'center'}}>
                    <Stack spacing={2}>
                        <Card>
                            <Stack divider={<Divider />}>
                                {renderMonths()}
                            </Stack>
                        </Card>
                        <Button variant='contained' onClick={handleAddMonth}>Add Next Month!</Button>
                            <Button id="summary" variant='outlined' onClick={() => navigate(`/${year}/yearReview`)}>
                                <h2 style={{textAlign:'center', cursor: 'pointer'}}>Year Summary!</h2>
                            </Button>
                    </Stack>
                </Grid>    
            </Grid>
        </div>
    )
}

export default Months;