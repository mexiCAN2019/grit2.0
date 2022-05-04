import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import yearBar from './yearBar';
import Express from './../../fetchExpress';
// import { SwitchRight } from '@mui/icons-material';

const { createMonth } = Express;

function Months({match:{params:{year}}}) {
    const [months, setMonths] = useState([]);

    useEffect(async () => {
        // Express.getMonths(year).then(savedMonths => setMonths(savedMonths))
        const fetchedMonths = await Express.getMonths(year);
        setMonths(fetchedMonths);
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
                break;
            case 10:
                createMonth(year, 'November');
                break;
            case 11:
                createMonth(year, 'December');
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
        if(months[monthToRenderDelete].id == id){
            return <button onClick={() => Express.deleteMonth(year,id).then(checkError400 => {
                if(checkError400){
                    return;
                } setMonths(currentMonths => currentMonths.filter(currentMonth => currentMonth.id != id));
            })}>delete</button>;
        };
    };

    const renderMonths = () => {
        return months.map(month => {
            if(month.month == 'Done!'){
                return <div className="deleteContainer">
                            <h3>{month.month}</h3>
                            {renderDeleteButton(month.id)}
                        </div>
            }
            return (
                <div className="deleteContainer">
                    <Link className="link" to={`/${month.yearFK}/${month.month}${month.id}`}
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
            <h1>Yearbar</h1>
            <h2>{renderMonths()}</h2>
            <button onClick={handleAddMonth}>Add month</button>
            <h3>Year Review!</h3>
        </div>
    )
}

export default Months;