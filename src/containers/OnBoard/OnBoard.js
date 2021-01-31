import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Gender from './Gender/Gender';
import ConfirmPassword from './ConfirmPassword/ConfirmPassword';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SuccessMessage from './SuccessMessage/SuccessMessage';
import Details from './Details/Details';
import * as actions from '../../store/actions/index';

class OnBoard extends Component {

    componentDidMount() {
        if (!this.props.email || !this.props.contact) {
            return this.props.history.push('/');
        }
        if (!this.props.gender) {
            return this.props.history.push(this.props.match.url + '/gender');
        }
        if (!this.props.password) {
            return this.props.history.push(this.props.match.url + '/confirm-password');
        }
    }

    render() {
        return (
            <Auxiliary>
                <Route path="/onBoard/gender" render={() => <Gender saveGender={this.props.onSaveGender} />} />
                <Route path="/onBoard/confirm-password" exact render={() => <ConfirmPassword
                    email={this.props.email}
                    contact={this.props.contact}
                    savePassword={this.props.onSavePassword} />} />
                <Route path="/onBoard/success" component={SuccessMessage} />
                <Route path="/onBoard/details" render={() => <Details email={this.props.email} contact={this.props.contact} />} />
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        gender: state.onBoard.gender,
        email: state.onBoard.email,
        contact: state.onBoard.contact,
        password: state.onBoard.password,  
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveGender: (gender) => dispatch(actions.saveGender(gender)),
        onSavePassword: (password) => dispatch(actions.savePassword(password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoard);

