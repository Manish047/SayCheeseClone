import React from 'react';
import classes from './Input.module.css';

const Input = props => {

    let assignedClasses = [classes.Input];

    if (props.touched && props.inValid) {
        assignedClasses.push(classes.Invalid);
    }

    if (props.value.length > 0) {
        assignedClasses.push(classes.Touched);
    }

    return (
        <input
            className={assignedClasses.join(' ')}
            type={props.elementType}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
        />
    )
}

export default Input;