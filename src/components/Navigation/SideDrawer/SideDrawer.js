import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const SideDrawer = props => {

    let assignedClasses = [classes.SideDrawer];

    if (props.show) {
        assignedClasses.push(classes.Open);
    }

    return (
        <div className={assignedClasses.join(' ')} onClick={props.sideDrawerCloseHandler}>
            <div onClick={props.sideDrawerCloseHandler}>❌</div>
            <NavigationItems isAuth={props.isAuth} />
        </div>
    )
}

export default SideDrawer