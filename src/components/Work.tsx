import React, {useEffect, useState} from 'react'
import Button from "./Button";

const data = {
    workingHours: 60,
    restingHours: 5,
    sessionsNumber: 0,
    isCounting: false
};

const getPadTime = (time: number) => time.toString().padStart(2, '0');


/*interface WorkProps {
    workingHours: number;
    restingHours: number;
    sessionsNumber: number;
}*/

const Work = () => {

    const [timeLeft, setTimeLeft] = useState(data.workingHours);
    const [isCounting, setIsCounting] = useState(data.isCounting)

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
    }, [timeLeft, isCounting] );

    const handleStart = () => {
        if (timeLeft === 0) setIsCounting(false);
        setIsCounting(true);
        data.isCounting = true;
    }

    const handleStop = () => {
        setIsCounting(false);
        data.isCounting = false;
    }

    const  handleReset = () => {
        setIsCounting(false);
        setTimeLeft(data.workingHours);
        data.isCounting = false;
    }

    return (
        <div className="w-100% h-96 bg-red-900 p-10">
            <div className=" text-white text-8xl mx-auto my-10 text-center">{minutes}:{seconds}</div>
            <div className="flex justify-around">
                <Button onClick={handleStart} name="Start"/>
                <Button onClick={handleStop} name="Stop"/>
                <Button onClick={handleReset} name="Reset"/>
            </div>
        </div>
    );
};

export default Work;