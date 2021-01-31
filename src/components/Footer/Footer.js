import React from 'react';
import classes from './Footer.module.css';

import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';
import CopyrightArea from './CopyrightArea/CopyrightArea';

const Footer = props => {
    return (
        <div className={classes.Footer}>
            <FooterTop />
            <FooterBottom />
            <CopyrightArea/>
        </div>
    );
}

export default Footer;