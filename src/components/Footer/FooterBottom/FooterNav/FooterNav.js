import React from 'react';
import classes from './FooterNav.module.css';

const FooterNav = props => {
    return (
        <div className={classes.FooterNav}>
            <h3>QuickLinks</h3>
            <ul className={classes.NavItems}>
                <li className={classes.NavItem}>Home</li>
                <li className={classes.NavItem}>About Us</li>
                <li className={classes.NavItem}>Services</li>
                <li className={classes.NavItem}>Blogs</li>
                <li className={classes.NavItem}>Events</li>
                <li className={classes.NavItem}>Contact Us</li>
            </ul>
        </div>
    );
}

export default FooterNav;