import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Express from './../../fetchExpress'

function Weeks({match:{params:{ year, monthAndMonthID }}}) {
    const [monthID, setMonthID] = useState(monthAndMonthID.replace(/^\D+/g, ''));
    const [weeks, setWeeks] = useState([]);
    const [date, setDate] = useState('');

    useEffect(() => {
        Express.getWeeks(year, monthID).then(savedWeeks => setWeeks(savedWeeks))
    }, []);


    const dateChange = (e) => {
        const extractedMonth = monthAndMonthID.replace(/[^a-zA-Z]+/g, '');
        console.log(extractedMonth);
        setDate(`${extractedMonth} ${e.target.value}`)
    };

    const handleSaveWeek = () => {
        const week = {date, monthID}
        Express.createWeek(year, week).then(responseOk => {
            if(responseOk){
                Express.getWeeks(year, monthID).then(savedWeeks => setWeeks(savedWeeks));
            }
        })
    };

    const handleDeleteYear = (e) => {
        const weekId = e.target.value;
        Express.deleteWeek(year, weekId).then(checkError400 => {
            if(checkError400 == 'error 400'){
                return;
            } setWeeks(currentWeek => currentWeek.filter(week => week.id != weekId))});
    };

    const renderWeeks = () => {
        return weeks.map(week => {
            return (
                <div className="deleteContainer">
                    <Link className="link" to={`/${year}/${monthAndMonthID}/${week.id}`}
                        key={week.id}>
                        <h3>{week.week}</h3>
                    </Link>
                    <button value={week.id} onClick={handleDeleteYear}>Delete</button>
                </div>
            )
        });
    };

    return (
        <div className="container">
            <h1>Weeks</h1>
            {renderWeeks()}
            <input id="addInput" type="number" min="1" max="31" onChange={dateChange} placeholder="Day" />
            <button onClick={handleSaveWeek}>Add</button>
            <p className="note">*Make sure the day is a Monday. For example, the date 10/5/2020, you would put 5, which is a Monday, for day to add*</p>
            <div className="space"></div>
            {/* <Link className="link" to={`/${year}/${monthAndMonthID}/monthReview`}><h4 id="review">Month Review</h4></Link> */}
        </div>
    )
}

export default Weeks;