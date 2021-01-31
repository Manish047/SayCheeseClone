import React from 'react';
import classes from './Gender.module.css';

import { withRouter } from 'react-router-dom';

const Gender = props => {

    const btnClicked = () => {
        props.saveGender('Female');
        props.history.push('/onBoard/confirm-password');
    }

    return (
        <div className={classes.Gender}>
            <h1 className={classes.Title}>How do you identify yourselves?</h1>
            <div className={classes.Selection}>
                <button className={classes.GenderButton} onClick={btnClicked}>
                    <div className={classes.Female}>
                        <div className={classes.Avatar}>
                            <img src="https://devsaycheese.com/assets/images/onboarding/femaleIcon.png" alt="Female" />
                        </div>
                        <h1 className={classes.Label}>Female</h1>
                    </div>
                </button>
                <div className={classes.Male}>
                    <div className={classes.Avatar}>
                        <img src="https://devsaycheese.com/assets/images/onboarding/maleIcon.png" alt="Male" />
                    </div>
                    <h1 className={classes.Label}>Male</h1>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Gender);