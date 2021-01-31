import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem path="/" text="Home" />
            <NavigationItem path="/about-us" text="About Us" />
            <NavigationItem path="/services" text="Services" />
            <div className={classes.Login}>
                <NavigationItem path={props.isAuth ? "/logout" : "/login"} text={props.isAuth ? "Logout" : "Login"} />
            </div>
        </ul>
    )
}

export default NavigationItems;