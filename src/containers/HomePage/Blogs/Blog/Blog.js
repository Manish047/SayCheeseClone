import React from 'react';
import Button from '../../../../components/UI/Button/Button';
import classes from './Blog.module.css';

const Blog = props => {
    return (
        <div className={classes.Blog}>
            <p className={classes.Tag}>Featured</p>
            <p className={classes.Text}>Happiness, a choice worth making!</p>
            <p className={classes.Text}>Mother-Daughter Conversations</p>
            <div className={classes.Action}>
                <div>
                    <div className={classes.Avatar}>
                        <img src="https://api.saycheese.life/media/blog/blog_8/Mother_Daughter_Conversations_FbOr3Ol.jpg" alt="BlogImage" />
                    </div>
                    <p>Rajpreet Kaur</p>
                </div>
                <Button >Read More</Button>
            </div>
           
        </div>
    );
}

export default Blog;