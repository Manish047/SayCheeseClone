import React from 'react';
import classes from './FooterTop.module.css';

import Button from '../../UI/Button/Button';

const FooterTop = props => {
    return (
        <div className={classes.FooterTop}>
            <h1 className={classes.Title}>
                Let's make this world a happier place, together!
        </h1>
            <a href="/#registerationForm"><Button>Register Now</Button></a>
        </div>
    );
}

export default FooterTop;