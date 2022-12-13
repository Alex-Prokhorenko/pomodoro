import React, {useEffect, useState} from 'react';
import Work from "./Work";
import Settings from "./Settings";

const data = {
    workingTime: 60,
    restingTime: 5,
    sessionsNumber: 0,
    isCounting: false,
    isSettings: false
};

const getPadTime = (time: number) => time.toString().padStart(2, '0');

const PomodoroContainer = () => {
    const [timeLeft, setTimeLeft] = useState(data.workingTime);
    const [isCounting, setIsCounting] = useState(data.isCounting);
    const [isSettings, setIsSettings] = useState(data.isSettings)


    const minutes: string = getPadTime(Math.floor(timeLeft / 60));
    const seconds: string = getPadTime(timeLeft - +minutes * 60);



    useEffect(() => {
        const interval = setInterval(() => {
            isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000);
        if (timeLeft === 0) setIsCounting(false);
        return () => {
            clearInterval(interval);
        };
    }, [timeLeft, isCounting]);

    const handleStart = () => {
        if (timeLeft === 0) setIsCounting(false);
        setIsCounting(true);
    }

    const handleStop = () => {
        setIsCounting(false);
    }

    const handleReset = () => {
        setIsCounting(false);
        setTimeLeft(data.workingTime);
    }

    const handleSettings = () => {
        if (!isSettings) {
            setIsSettings(true);
        }
        console.log('click');
    }

    return (
        <div className="w-4/5 w-900 h-96 mx-auto my-10 bg-green-900">
            {isSettings
                ? <Settings workingTime={data.workingTime}
                            restingTime={data.restingTime}
                />
                : <Work handleStart={handleStart}
                        handleStop={handleStop}
                        handleReset={handleReset}
                        handleSettings={handleSettings}
                        minutes={minutes}
                        seconds={seconds}
                />}
        </div>
    );
};

export default PomodoroContainer;