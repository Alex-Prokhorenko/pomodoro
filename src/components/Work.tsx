import React from 'react'
import Button from "./Button";

const Work = () => {
    return (
        <div className="w-100% h-96 bg-red-900">
            <div className=" text-white text-8xl mx-auto my-5">25:00</div>
            <Button name="Start"/>
            <Button name="Skip"/>
            <Button name="Reset"/>
        </div>
    );
};

export default Work;