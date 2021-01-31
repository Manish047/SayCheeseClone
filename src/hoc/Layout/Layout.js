import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Toolbar sideDrawerToggleHandler={this.sideDrawerToggleHandler} isAuth={this.props.isAuth} />
                <SideDrawer show={this.state.showSideDrawer}
                    sideDrawerCloseHandler={this.sideDrawerCloseHandler}  isAuth={this.props.isAuth}/>
                <div className={classes.Content}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(Layout);