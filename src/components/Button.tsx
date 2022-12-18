import React from "react";


interface ButtonProps {
    name: string,
    onClick: React.MouseEventHandler
}

const Button = ({name, onClick}:ButtonProps) => {
    return (
        <div>
            <button className="border-solid border-2 border-#fff text-white text-5xl p-2 rounded-2xl mt-5" onClick={onClick}>{name}</button>
        </div>
    );
};

export default Button;