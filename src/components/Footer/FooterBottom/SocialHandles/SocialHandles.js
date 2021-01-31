import React from 'react';
import classes from './SocialHandles.module.css';

const SocialHandles = props => {
    return (
        <div className={classes.SocialMedia}>
            <ul >
                <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="/"><i className="fab fa-youtube"></i></a></li>
                <li><a href="/"><i className="fab fa-whatsapp"></i></a></li>
            </ul>
        </div>
    );
}

export default SocialHandles;