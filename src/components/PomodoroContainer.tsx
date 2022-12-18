import React, {ChangeEvent, useEffect, useState} from "react";
import Work from "./Work";
import Settings from "./Settings";

const data = {
    workingTime: 60,
    restingTime: 5,
    sessionsNumber: 0,
    isCounting: false,
    isWork: true,
    isSettings: false
};

const ding = require("./sounds/ding.mp3");

const getPadTime = (time: number) => time.toString().padStart(2, "0");

const PomodoroContainer = () => {

    const [timeLeft, setTimeLeft] = useState(data.workingTime);
    const [workLeft, setWorkLeft] = useState(data.workingTime)
    const [restLeft, setRestLeft] = useState(data.restingTime);
    const [isCounting, setIsCounting] = useState(data.isCounting);
    const [isWork, setIsWork] = useState(data.isWork)
    const [isSettings, setIsSettings] = useState(data.isSettings);

    const minutes: string = getPadTime(Math.floor(timeLeft / 60));
    const seconds: string = getPadTime(Math.floor(timeLeft - +minutes * 60));

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 60000);
        const audio = new Audio(ding);
        if (timeLeft === 0 && isWork) {
            setTimeLeft(restLeft);
            setIsWork(false);
            audio.play();
        } else if (timeLeft === 0 && !isWork) {
            setTimeLeft(workLeft);
            setIsWork(true);
            audio.play();
        }
        return () => {
            clearInterval(interval);
        };
    }, [timeLeft, restLeft, isCounting, isWork, workLeft]);

    const handleStart = () => {
        if (timeLeft === 0) setIsCounting(false);
        setIsCounting(true);
    }
    const handleStop = () => {
        setIsCounting(false);
    }
    const handleReset = () => {
        setIsCounting(false);
        setTimeLeft(workLeft);
    }
    const handleSettings = () => {
            setIsSettings(!isSettings);
    }
    const handleSetTime = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.target.value > 0 && +event.target.value < 1000) {
            event.target.id === "workingTime"
                ? setWorkLeft(+event.target.value)
                : setRestLeft(+event.target.value);
            if (isWork && event.target.id === "workingTime") {
                setTimeLeft(+event.target.value)
            } else if (!isWork && event.target.id === "restingTime") setTimeLeft(+event.target.value);
            }
        }

    return (
        <div className="w-4/5 w-900 h-96 mx-auto my-10">
            {isSettings
                ? <Settings handleSetTime={handleSetTime}
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
                        isWork={isWork}
                        isCounting={isCounting}
                />}
        </div>
    );
};

export default PomodoroContainer;