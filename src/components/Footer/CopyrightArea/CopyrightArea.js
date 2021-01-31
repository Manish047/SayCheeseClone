import React from 'react';
import classes from './CopyrightArea.module.css';

const CopyrightArea = props => {
    return (
        <div className={classes.CopyrightArea}>
            <p className={classes.CopyrightText}>© 2020 Frenztastic Private Limited. All rights reserved.</p>
            <ul className={classes.CopyrightAreaNav}>
                <li className={classes.NavItem}><a href="/"><span>Terms of Service</span></a></li>
                <li className={classes.NavItem}><a href="/"><span>Privacy Policy</span></a></li>
                <li className={classes.NavItem}><a href="/"><span>Sitemap</span></a></li>
            </ul>
        </div>
    );
}

export default CopyrightArea;