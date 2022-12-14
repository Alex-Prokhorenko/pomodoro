import React from "react"
import Button from "./Button";
import styles from "./styles/Settings.module.css"

interface settingsProps{
    workLeft: number,
    restLeft: number,
    handleSetTime: React.ChangeEventHandler,
    handleSettings: React.MouseEventHandler
}



const Settings = ({workLeft, restLeft, handleSetTime, handleSettings}: settingsProps) => {
debugger
    return (
        <div className={styles.settings_component}>
            <h1 className={styles.header}>Settings</h1>

            <div className={styles.inputs_block}>
                <p>Working time:</p>
                <input type="number" placeholder=" minutes" id="workingTime"
                       value={workLeft}

                       onChange={(event) => handleSetTime(event)} onFocus={(event) => event.target.select()}
                       className={styles.input}
                />
            </div>

            <div className={styles.inputs_block}>
                <p>Resting time:</p>
                <input type="number" min="0" max="1000" placeholder=" minutes" id="restingTime"
                       value={restLeft}
                       onChange={(event) => handleSetTime(event)}
                       onFocus={(event) => event.target.select()}
                       className={styles.input}
                />
            </div>

            <Button name="OK" onClick={handleSettings}/>
        </div>
    );
};

export default Settings;