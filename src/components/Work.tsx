import React from 'react'
import Button from "./Button";


interface workProps {
    handleStart: React.MouseEventHandler,
    handleStop: React.MouseEventHandler,
    handleReset: React.MouseEventHandler,
    minutes: string,
    seconds: string
}

const Work = ({handleStart, handleStop, handleReset, minutes, seconds}: workProps) => {

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