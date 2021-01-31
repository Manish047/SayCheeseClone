import React from 'react';
import classes from './Blogs.module.css';

import Blog from './Blog/Blog';
import Button from '../../../components/UI/Button/Button';

const Blogs = props => {
    return(
        <div className={classes.Blogs}>
            <h1 className={classes.Title}>
                Our Blogs
            </h1>
            <Blog/>
            <Button>View All Blogs</Button>
        </div>
    )
}

export default Blogs;