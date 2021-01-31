import React from 'react';
import classes from './TakeAssesmentCard.module.css';

import Button from '../../../components/UI/Button/Button';

const TakeAssesmentCard = props => {
    return (
        <div className={classes.TakeAssesmentCard}>
            <h1 className={classes.Title}>Let HER do the talking</h1>
            <div className={classes.Content}>
                <div className={classes.Description}>
                    <p>Start your journey with the Happiness Evaluation Report (HER) assessment.</p>
                    <p>HER is a proprietary assessment designed on the principles of applied psychology and based on Global Research.</p>
                </div>
                <div className={classes.Action}>
                    <img src="https://devsaycheese.com/assets/images/home/SmileyMeter.png" alt="SmileyMeter" />
                    <Button>Take Assesment</Button>
                </div>
            </div>
        </div>
    )
}

export default TakeAssesmentCard;