import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = props => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink exact activeClassName={classes.Active} to={props.path}>
                <span>{props.text}</span>
            </NavLink>
        </li>
    )
}

export default NavigationItem;