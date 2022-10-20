import React from 'react';
import { 
    Stack
} from '@mui/material'

function TableSummary({ skill }) {
    const { skillName, totalActualHours, totalActualMinutes, learningActualHours, learningActualMinutes, practicingActualHours, practicingActualMinutes, performingActualHours, performingActualMinutes } = skill;

    const renderTime = (hours, minutes) => {
        if(minutes >= 60) {
            const hoursToAdd = Math.floor(minutes / 60);
            const minutesRemainder = Math.round(minutes % 60);
            return <div>{Number(hours) + hoursToAdd}Hrs {minutesRemainder}Mins</div>;
        } 
        return <div>{hours}Hrs {minutes}Mins</div>;
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <h3 style={{display:'flex', justifyContent:'center'}}><u>{skillName}</u></h3>
                <h4 style={{display:'flex', justifyContent:'center'}}><div>Total Time:<br></br> {renderTime(totalActualHours, totalActualMinutes)}</div></h4>
                
                <Stack direction="row" style={{margin: '15px'}}>
                    <div>Practicing:
                    {renderTime(practicingActualHours, practicingActualMinutes)}</div>

                    <div style={{margin: 'auto 40px'}}>Learning: 
                    {renderTime(learningActualHours, learningActualMinutes)}</div>

                    <div>Performing: 
                    {renderTime(performingActualHours, performingActualMinutes)}</div>
                    
                </Stack>
            </div>
        </div>
    )
};

export default TableSummary;