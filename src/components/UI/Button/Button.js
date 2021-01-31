import React from 'react';
import classes from './Button.module.css';

const Button = props => {

    let btnClass = classes.Button;

    if (props.btnType === "Flat") {
        btnClass = classes.Flat
    }

    return (
        <button
            className={btnClass}
            disabled={props.disabled}
            onClick={props.clicked}>
            {props.children}
        </button>
    );
}

export default Button;