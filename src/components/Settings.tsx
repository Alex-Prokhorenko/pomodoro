import React from 'react'
import Button from "./Button";



const handleApply = () => {

}

const Settings = () => {


    return (
        <div className='h-96 text-center text-white bg-emerald-600'>
            <h1 className='text-6xl p-10 underline decoration-1'>Settings</h1>

            <div className='flex justify-center items-center text-4xl'>
                <p>Working time:</p>
                <input type='number' min='0' max='1000' placeholder=' minutes' id='workingTime'
                       className='bg-stone-700 w-1/5 h-12 ml-10 outline-0'/>
            </div>

            <div className='flex pt-10 justify-center items-center text-4xl pb-5'>
                <p>Resting time:</p>
                <input type='number' min='0' max='1000' placeholder=' minutes' id='restingTime'
                       className='bg-stone-700 w-1/5 h-12 ml-10 outline-0'/>
            </div>

            <Button name='Apply' onClick={handleApply}/>
        </div>
    );
};

export default Settings;