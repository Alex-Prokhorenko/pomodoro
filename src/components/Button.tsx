import React from "react";
import styles from "./styles/Button.module.css"

interface ButtonProps {
    name: string,
    onClick: React.MouseEventHandler
}

const Button = ({name, onClick}: ButtonProps) => {
    return (
        <div>
            <button className={styles.button} onClick={onClick}>{name}</button>
        </div>
    );
};

export default Button;