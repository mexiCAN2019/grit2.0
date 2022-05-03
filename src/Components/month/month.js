import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import yearBar from './yearBar';
import Express from './../../fetchExpress';
import { SwitchRight } from '@mui/icons-material';

function Month({match:{params:{year}}}) {
    const [months, setMonths] = useState([]);

    // useEffect(() => {
    //     Express.getMonths(year).then(savedMonths => setMonths(savedMonths))
    // }, []);

    const handleAddMonth = () => {
        switch(months.length) {
            case 0:
                Express.createMonth(year, 'January');
                break;
            case 1:
                Express.createMonth(year, 'Febraury');
                break;
            case 2:
                Express.createMonth(year, 'March');
                break;
            case 3:
                Express.createMonth(year, 'April');
                break;
            case 4:
                Express.createMonth(year, 'May');
                break;
            case 5:
                Express.createMonth(year, 'June');
                break;
            case 6:
                Express.createMonth(year, 'July');
                break;
            case 7:
                Express.createMonth(year, 'August');
                break;
            case 8:
                Express.createMonth(year, 'September');
                break;
            case 9:
                Express.createMonth(year, 'October');
                break;
            case 10:
                Express.createMonth(year, 'November');
                break;
            case 11:
                Express.createMonth(year, 'December');
                break;
            case 12:
                Express.createMonth(year, 'Done!');
                break;
            default:
                return;
        }
        Express.getMonths(year).then(savedMonths => setMonths(savedMonths));
    };

    const renderDeleteButton = (id) => {
        const monthToRenderDelete = months.length - 1;
        if(months[monthToRenderDelete].id == id){
            return <button onClick={() => Express.deleteMonth(year,id).then(checkError400 => {
                if(checkError400){
                    return;
                } setMonths(currentMonths => currentMonths.filter(currentMonth => currentMonth.id != id));
            })}>delete</button>;
        };
    };

    return (
        <div>
            <h1>Yearbar</h1>
            <h2>Render Months</h2>
            <button>Add month</button>
            <h3>Year Review!</h3>
        </div>
    )
}

export default Month;