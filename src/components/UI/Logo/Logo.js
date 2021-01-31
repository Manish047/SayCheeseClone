import React from 'react';
import classes from './Logo.module.css';

const Logo = props => {
    return (
        <div className={classes.Logo}>
            <img src="https://devsaycheese.com/assets/images/logo_light.png" alt="Logo"></img>
        </div>
    )
}

export default Logo