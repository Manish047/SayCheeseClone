import React from 'react';
import classes from './HappinessModel.module.css';

const HappinessModel = props => {
    return (
        <div className={classes.HappinessModel}>
            <h1 className={classes.Title}>Say Cheese Happiness Model</h1>
            <div className={classes.Content}>
                <div className={classes.TextContent}>
                    <h2 className={classes.Title}>The Solution</h2>
                    <h2 className={classes.Title}>Say Cheese!</h2>
                    <p className={classes.Text}>India's first women-happiness platform that provides holistic & personalized solutions to real challenges women face in a trusted environment.</p>
                </div>
                <div className={classes.Model}>
                    <h3 className={classes.ModelTitle}>Say Cheese Holistic & Personalized Happiness Model</h3>
                    <img src="https://devsaycheese.com/assets/images/happiness.png" alt="Model"></img>
                    <button><img src="https://devsaycheese.com/assets/images/about/abs1.png" alt="abs1"></img></button>
                    <button><img src="https://devsaycheese.com/assets/images/about/abs2.png" alt="abs2"></img></button>
                    <button><img src="https://devsaycheese.com/assets/images/about/abs3.png" alt="abs3"></img></button>
                    <button><img src="https://devsaycheese.com/assets/images/about/abs4.png" alt="abs4"></img></button>
                </div>
            </div>
        </div>
    )

}

export default HappinessModel;