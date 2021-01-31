import React from 'react';
import classes from './VideoContainer.module.css';

const VideoContainer = props => {
    return (
        <div className={classes.VideoContainer}>
            <header>
                <h1 className={classes.Title}>The problem we are solving?</h1>
                <h3 className={classes.SubTitle}>Watch the Happiness video</h3>
            </header>
            <iframe
                title="Say Cheese Happiness Video HD"
                src="https://www.youtube.com/embed/Gg9_RQFjCcc"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
        </div>
    )
}

export default VideoContainer;