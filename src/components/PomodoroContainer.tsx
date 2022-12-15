import React, {ChangeEvent, useEffect, useState} from 'react';
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
    const [workLeft, setWorkLeft] = useState(data.workingTime)
    const [restLeft, setRestLeft] = useState(data.restingTime);
    const [isCounting, setIsCounting] = useState(data.isCounting);
    const [isSettings, setIsSettings] = useState(data.isSettings);

    const minutes: string = getPadTime(Math.floor(timeLeft / 60));
    const seconds: string = getPadTime(Math.floor(timeLeft - +minutes * 60));

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 0.0166666666666667 : 0))
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
            setIsSettings(!isSettings);
    }

    const handleSetWork = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.target.value > 0 && +event.target.value < 1000) {
            setIsCounting(false);
            setWorkLeft(+event.target.value);
            setTimeLeft(+event.target.value);
        }
        console.log(event.target.value);
    }

    const handleSetRest = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.target.value > 0 && +event.target.value < 1000) {
            setRestLeft(+event.target.value);
        }
    }

    return (
        <div className="w-4/5 w-900 h-96 mx-auto my-10 bg-green-900">
            {isSettings
                ? <Settings handleSetWork={handleSetWork}
                            handleSetRest={handleSetRest}
                            handleSettings={handleSettings}
                            workLeft={workLeft}
                            restLeft={restLeft}
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