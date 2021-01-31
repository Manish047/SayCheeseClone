import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Details.module.css';
import * as actions from '../../../store/actions/index';

import Name from './Name/Name';
import Age from './Age/Age';
import Contact from './Contact/Contact';
import Location from './Location/Loaction';
import Email from './Email/Email';
import Occupation from './Occupation/Occupation';

class Details extends Component {

    componentDidMount() {
        if (!this.props.email || !this.props.contact || !this.props.password) {
            this.props.history.push('/onBoard');
        }
    }

    state = {
        slectedIndex: 0,
        images: [
            'https://devsaycheese.com/assets/images/onboarding/WW0.png',
            'https://devsaycheese.com/assets/images/onboarding/WW1.png',
            'https://devsaycheese.com/assets/images/onboarding/WW2.png',
            'https://devsaycheese.com/assets/images/onboarding/WW3.png',
            'https://devsaycheese.com/assets/images/onboarding/WW4.png',
            'https://devsaycheese.com/assets/images/onboarding/WW5.png',
            // 'https://devsaycheese.com/assets/images/onboarding/WW6.png',
        ],
    }


    saveName = (firstName, lastName) => {
        this.props.onSaveName(firstName, lastName);
        this.setState({ slectedIndex: 1 });
    }

    saveAge = (age) => {
        this.props.onSaveAge(age);
        this.setState({ slectedIndex: 2 });
    }

    saveContact = () => {
        this.setState({ slectedIndex: 3 });
    }

    saveLocation = (location) => {
        this.props.onSaveLocation(location);
        this.setState({ slectedIndex: 4 })
    }

    saveEmail = () => {
        this.setState({ slectedIndex: 5 });
    }

    saveOccupation = (occupation) => {
        this.props.onSaveOccupation(occupation);
        this.props.onAuth(this.props.email, this.props.password, true);
        this.props.history.replace('/');
    }


    render() {

        let component = null;
        switch (this.state.slectedIndex) {
            case (0):
                component = <Name firstName={this.props.firstName} lastName={this.props.lastName} saveName={this.saveName} />;
                break;
            case (1):
                component = <Age age={this.props.age} saveAge={this.saveAge} />;
                break;
            case (2):
                component = <Contact contact={this.props.contact} saveContact={this.saveContact} />;
                break;
            case (3):
                component = <Location location={this.props.age} saveLocation={this.saveLocation} />;
                break;
            case (4):
                component = <Email email={this.props.email} saveEmail={this.saveEmail} />;
                break;
            case (5):
                component = <Occupation occupation={this.props.occupation} saveOccupation={this.saveOccupation} />;
                break;
            default:
                component = <Name firstName={this.props.firstName} lastName={this.props.lastName} saveName={this.saveName} />;
        }

        return (
            <div className={classes.ProfileCard}>
                <div className={classes.Content}>
                    <div className={classes.Avatar}>
                        <img src={this.state.images[this.state.slectedIndex]} alt={this.state.slectedIndex} />
                    </div>
                    <div className={classes.InputArea}>
                        {component}
                    </div>
                    <div className={classes.Navigate}>
                        {this.state.images.map((_, index) => {
                            let assignedClasses = [classes.NavigateButton];
                            if (index <= this.state.slectedIndex) {
                                assignedClasses.push(classes.Active)
                            }
                            return (
                                <button key={index} className={assignedClasses.join(' ')} onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({ slectedIndex: index });
                                }}>
                                    {index}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        email: state.onBoard.email,
        password: state.onBoard.password,
        contact: state.onBoard.contact,
        firstName: state.onBoard.firstName,
        lastName: state.onBoard.lastName,
        age: state.onBoard.age,
        location: state.onBoard.location,
        occupation: state.onBoard.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveName: (firstName, lastName) => dispatch(actions.saveName(firstName, lastName)),
        onSaveAge: (age) => dispatch(actions.saveAge(age)),
        onSaveLocation: (location) => dispatch(actions.saveLocation(location)),
        onSaveOccupation: (occupation) => dispatch(actions.saveOccupation(occupation)),
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));