import React from 'react';
import './yearBar.css';
import { Line } from 'rc-progress';

function YearBar({ months }) {

    const renderPercentage = () => {
        switch(months.length) {
            case 1:
                return 0
            case 2:
                return 8
            case 3:
                return 17
            case 4:
                return 25
            case 5:
                return 33
            case 6:
                return 42
            case 7:
                return 50
            case 8:
                return 58
            case 9:
                return 67
            case 10:
                return 75
            case 11:
                return 83
            case 12:
                return 92
            case 13:
                return 100
            default:
                return 0;
        };
    }; 


    return (
        <div className="yearBarContainer" style={{width: '75vw', maxWidth: '600px'}}>
            <h2>{renderPercentage()}%</h2> of the year finished!
            <Line percent={renderPercentage()} strokeWidth={4} strokeColor="#081b4d" trailColor='#D3D3D3' trailWidth={4} />
        </div>
    );
};

export default YearBar;
