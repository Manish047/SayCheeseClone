import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import classes from './SuccessMessage.module.css';

const Success = props => {
    return (
        <div className={classes.SuccessMessage}>
            <div className={classes.Content}>
                <h1 className={classes.Title}>Congratulations!</h1>
                <h3 className={classes.SubTitle}>Your profile has been created!</h3>
                <div className={classes.ContinueButton}>
                    <Button clicked={() => {
                        props.history.push('/onBoard/details');
                    }}>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Success);