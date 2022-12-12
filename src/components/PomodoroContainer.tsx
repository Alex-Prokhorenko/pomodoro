import React from 'react';
import Work from "./Work";
import Settings from "./Settings";

const data = {
    workingTime: 60,
    restingTime: 5,
    sessionsNumber: 0,
    isCounting: false,
    isSettings: false
};

const PomodoroContainer = () => {
    return (
        <div className="w-4/5 h-96 mx-auto my-10 bg-green-900">
            {data.isSettings ? <Settings/> : <Work data={data}/>}
        </div>
    );
};

export default PomodoroContainer;