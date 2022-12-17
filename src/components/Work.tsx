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
    isWork: boolean,
    isCounting: boolean
}

const Work = ({
                  handleStart,
                  handleStop,
                  handleReset,
                  handleSettings,
                  minutes,
                  seconds,
                  isWork,
                  isCounting
              }: workProps) => {

    return <div className={isWork ? 'bg-red-900' : 'bg-green-700'}>
        <div className={styles.work}>
            <div className="flex justify-between h-30">
                <Button name="Settings" onClick={handleSettings}/>
                <div>
                    {isCounting
                        && <img src={require('./img/2GU.gif')} alt="work" width="60px"/>}
                </div>
            </div>
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