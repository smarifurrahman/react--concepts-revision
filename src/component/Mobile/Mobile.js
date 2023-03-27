import React, { useState } from 'react';

const Mobile = () => {
    const [percentage, setPercentage] = useState(100);
    const batteryDown = () => {
        if(percentage > 0) {
            setPercentage(percentage - 10);
        }
    }
    return (
        <div>
            <h2>{percentage}</h2>
            <button onClick={batteryDown}>battery down</button>
        </div>
    );
};

export default Mobile;