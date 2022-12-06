import React from 'react';

interface ButtonProps {
    name: string
}

const Button = ({name}:ButtonProps) => {
    return (
        <div>
            <button className="border-solid border-2 border-#fff text-white text-5xl p-2 mx-5">{name}</button>
        </div>
    );
};

export default Button;