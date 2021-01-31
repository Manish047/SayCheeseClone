import React from 'react';
import classes from './Card.module.css';

const Card = props => {

    let assignedClasses = [classes.Card];

    if (props.active) {
        assignedClasses.push(classes.Active);
    }

    return (
        <div className={assignedClasses.join(' ')} onClick={props.clicked}>
            <h3>
                {props.title}
            </h3>
            <div className={classes.Avatar}>
                <img src={props.img} alt={props.title} />
            </div>
            <h4>{props.subTitle}</h4>
        </div>
    );
}

export default Card;