import React from 'react'
import Button from "./Button";
import styles from "./styles/Work.module.css"

interface workProps {
    handleStart: React.MouseEventHandler,
    handleStop: React.MouseEventHandler,
    handleReset: React.MouseEventHandler,
    handleSettings: React.MouseEventHandler,
    minutes: string,
    seconds: string,
    isWork: boolean
}

const Work = ({handleStart, handleStop, handleReset, handleSettings, minutes, seconds, isWork}: workProps) => {

    return <div className={isWork ? 'bg-red-900' : 'bg-green-500'}>
        <div className={styles.work}>
        <Button name="Settings" onClick={handleSettings}/>
        <div className={styles.clocks}>{minutes}:{seconds}</div>
        <div className="flex justify-around">
            <Button onClick={handleStart} name="Start"/>
            <Button onClick={handleStop} name="Stop"/>
            <Button onClick={handleReset} name="Reset"/>
        </div>
        </div>
    </div>;
};

export default Work;