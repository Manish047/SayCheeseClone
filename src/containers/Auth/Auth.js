import React, { Component } from 'react';
import classes from './Auth.module.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends Component {

    state = {
        authForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                isValid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                isValid: false,
                touched: false
            },
        },
        isFormValid: false
    }

    checkValidity = (value, rules) => {
        if (!rules) return;
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for (let formDataIdentifier in this.state.authForm) {
            formData[formDataIdentifier] = this.state.authForm[formDataIdentifier].value;
        }

        this.props.onAuth(formData.email, formData.password, false);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedAuthForm = { ...this.state.authForm }
        const updatedFormElement = { ...updatedAuthForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedAuthForm[inputIdentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIdentifier in updatedAuthForm) {
            if (updatedAuthForm[inputIdentifier].validation) {
                isFormValid = updatedAuthForm[inputIdentifier].isValid && isFormValid;
            }
        }
        this.setState({ authForm: updatedAuthForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.authForm) {
            formElements.push({
                id: key,
                config: this.state.authForm[key]
            });
        }

        let errorMessage = null;
        if (this.props.error) {
            if (this.props.error.message.includes('EMAIL_NOT_FOUND')) {
                errorMessage = "Email Not Registered";
            } else if (this.props.error.message.includes('INVALID_PASSWORD')) {
                errorMessage = "Invalid Password";
            }
            errorMessage = <p className={classes.ErrorMessage}>{errorMessage}</p>
        }

        let authRedirect = null;
        if (this.props.isAuth) {
            authRedirect = <Redirect to="/" />
        }

        let form = (
            <div className={classes.Login}>
                <h1 className={classes.Title}>Login</h1>
                <form onSubmit={this.formSubmitHandler}>
                    {formElements.map(formElement => {
                        return (
                            <Input
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                                inValid={formElement.config.validation ? !formElement.config.isValid : null}
                                touched={formElement.config.touched}
                            />
                        )
                    })}
                    <div className={classes.CheckBox}>
                        <input type="checkbox" /><span>Keep me signed in</span>
                    </div>
                    <a href="/" className={classes.Link}>Forgot Password?</a>
                    {errorMessage}
                    <div className={classes.LoginButton}>
                        <Button disabled={!this.state.isFormValid}>Login</Button>
                    </div>
                </form>
                <a href="/#registerationForm"><Button btnType="Flat">Register</Button></a>
            </div>
        )

        if (this.props.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);