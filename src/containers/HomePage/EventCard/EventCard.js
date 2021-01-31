import React from 'react';
import classes from './EventCard.module.css';

import Logo from '../../../components/UI/Logo/Logo';
import Button from '../../../components/UI/Button/Button';

const EventCard = props => {
    return (
        <div className={classes.EventCard}>
            <h1 className={classes.Title}>Freshly Baked</h1>
            <div className={classes.Card}>
                <div className={classes.Content}>
                    <div className={classes.EventTitle}>
                        <div style={{ height: '20%', width: '60%', display: 'inline-block' }}>
                            <Logo />
                        </div> <span className={classes.Text}>| News</span>
                    </div>
                    <div className={classes.MainContent}>
                    <h2 className={classes.Text}>Say Cheese 1st Runner Up at Wharton EAP</h2>
                    <Button >Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;