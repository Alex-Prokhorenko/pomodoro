import React from 'react'
import Button from "./Button";

interface settingsProps{
    timeLeft: number,
    restLeft: number,
    handleSetWork: React.ChangeEventHandler,
    handleSetRest: React.ChangeEventHandler,
    handleSettings: React.MouseEventHandler
}



const Settings = ({timeLeft, restLeft, handleSetWork, handleSetRest, handleSettings}: settingsProps) => {


    return (
        <div className='h-96 text-center text-white bg-emerald-600'>
            <h1 className='text-6xl p-10 underline decoration-1'>Settings</h1>

            <div className='flex justify-center items-center text-4xl'>
                <p>Working time:</p>
                <input type='number' placeholder=' minutes' id='workingTime'
                       value={timeLeft}
                       onChange={(event) => handleSetWork(event)}
                       className='bg-stone-700 w-1/5 h-12 ml-10 outline-0'/>
            </div>

            <div className='flex pt-10 justify-center items-center text-4xl pb-5'>
                <p>Resting time:</p>
                <input type='number' min='0' max='1000' placeholder=' minutes' id='restingTime'
                       value={restLeft}
                       onChange={(event) => handleSetRest(event)}
                       className='bg-stone-700 w-1/5 h-12 ml-10 outline-0'/>
            </div>

            <Button name='OK' onClick={handleSettings}/>
        </div>
    );
};

export default Settings;