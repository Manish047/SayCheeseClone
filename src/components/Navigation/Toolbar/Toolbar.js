import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Toolbar.module.css';

import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class Toolbar extends Component {

    state = {
        color: 'rgba(0, 0, 0, 0.7)'
    }

    listenScrollEvent = event => {
        if (window.scrollY > 5) {
            this.setState({ color: 'rgba(32,10,36)' });
        } else {
            this.setState({ color: 'rgba(0, 0, 0, 0.7)' });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    render() {
        return (
            <header style={{ backgroundColor: this.state.color }} className={classes.Toolbar}>
                <div style={{ height: "130%", width: "200px" }}>
                    <Link to="/"><Logo /></Link>
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems isAuth={this.props.isAuth}/>
                </nav>
                <DrawerToggle clicked={this.props.sideDrawerToggleHandler} />
            </header>
        )
    }


}

export default Toolbar;

