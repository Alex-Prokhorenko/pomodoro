import React from 'react'
import { BsGearFill } from "react-icons/bs";
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

    return <div className={isWork ? "bg-red-900" : "bg-lime-900"}>
        <div className={styles.work_component}>
            <div className={styles.settings_block}>
                <BsGearFill onClick={handleSettings} className="text-6xl text-lime-600"/>
                <div >
                    {isCounting
                        && <img src={require("./img/2GU.gif")} alt="work" width="58px"/>}
                </div>
            </div>
            <div className={styles.clocks}>{minutes}:{seconds}</div>
            <div className={styles.buttons_block}>
                <Button onClick={handleStart} name="Start"/>
                <Button onClick={handleStop} name="Stop"/>
                <Button onClick={handleReset} name="Reset"/>
            </div>
        </div>
    </div>;
};

export default Work;