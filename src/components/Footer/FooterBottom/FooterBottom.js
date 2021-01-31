import React from 'react';
import classes from './FooterBottom.module.css';

import Logo from '../../UI/Logo/Logo';
import SocialHandles from './SocialHandles/SocialHandles';
import FooterNav from './FooterNav/FooterNav';

const FooterBottom = props => {
    return (
        <div className={classes.FooterBottom}>
            <div className={classes.Aim}>
                <div style={{ maxHeight: '150px', maxWidth: '300px' }}>
                    <Logo />
                </div>
                <p>Our Mission is to increase the happiness of women through personalized and holistic solutions in a trusted environment.</p>
            </div>
            <SocialHandles />
            <FooterNav />
        </div>
    );
}

export default FooterBottom;