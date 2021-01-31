import React from 'react';
import classes from './Banner.module.css';

import Button from '../../../../components/UI/Button/Button';

const Banner = props => {
    return (
        <div className={classes.Banner}>
            <div className={classes.Content}>
                <h1 className={classes.Title}>{props.title}</h1>
                <h2 className={classes.SubTitle}>{props.subTitle}</h2>
                <a href="/#registerationForm"><Button>Register Now</Button></a>
            </div>
            <div className={classes.ImageBox} style={{ backgroundImage: 'url(' + props.img + ')' }}>
            </div>
        </div>
    )
}

export default Banner;