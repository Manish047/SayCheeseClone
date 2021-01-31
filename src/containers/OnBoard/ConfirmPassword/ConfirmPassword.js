import React, { Component } from 'react';
import classes from './ConfirmPassword.module.css';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { withRouter } from 'react-router';

class ConfirmPassword extends Component {

    componentDidMount() {
        const form = { ...this.state.confirmationForm }
        const contactField = { ...form.contact }
        const emailField = { ...form.email }
        contactField.value = this.props.contact;
        emailField.value = this.props.email;
        form['contact'] = contactField;
        form['email'] = emailField;
        this.setState({ confirmationForm: form });
    }

    state = {
        confirmationForm: {
            contact: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: '9876543210',
                    readOnly: true
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    isNumeric: true
                },
                isValid: true,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'abc@gmail.com',
                    readOnly: true
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                isValid: true,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Set a password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                isValid: false,
                touched: false,
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm your password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                isValid: false,
                touched: false,
            },
            referralCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter a referral code (Optional)'
                },
                value: '',
                touched: false,
            },
        },
        isFormValid: false,
        label: 'Password must be atleast 6 characters.'
    }

    checkValidity = (value, rules) => {
        if (!rules) return;
        let isValid = true;
        // Adding multiple if would be a flaw => Last if will set the value of isValid. Therefore, setting isValid to true initially and adding && isValid with every check
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.minLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    formSubmitHandler = (event) => {
        event.preventDefault(); // To prevent the default behaviour of the form ie to submit request and relaod the form
        // Create Form Data
        const formData = {}
        for (let formDataIdentifier in this.state.confirmationForm) {
            formData[formDataIdentifier] = this.state.confirmationForm[formDataIdentifier].value;
        }

        if (formData.password === formData.confirmPassword) {
            this.props.savePassword(formData.password);
            this.props.history.push('/onBoard/Success');
        }
        else {
            this.setState({ label: 'Passwords don\'t match.' })
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {

        // Cloning authForm
        const updatedConfirmationForm = { ...this.state.confirmationForm }

        // Cloning inputElement DEEPLY from registerationForm[inputIdentifier]
        const updatedFormElement = { ...updatedConfirmationForm[inputIdentifier] };

        // Changing Values
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        // Updating the cloned element
        updatedConfirmationForm[inputIdentifier] = updatedFormElement;

        // Check if entire from is valid
        let isFormValid = true;
        for (let inputIdentifier in updatedConfirmationForm) {
            if (updatedConfirmationForm[inputIdentifier].validation) {
                isFormValid = updatedConfirmationForm[inputIdentifier].isValid && isFormValid;
            }
        }

        // Update the state
        this.setState({ confirmationForm: updatedConfirmationForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.confirmationForm) {
            formElements.push({
                id: key,
                config: this.state.confirmationForm[key]
            });
        }

        return (
            <div className={classes.ConfirmPassword}>
                <div className={classes.Content}>
                    <h1 className={classes.Title}>Set your password</h1>
                    <div className={classes.InputArea}>
                        <form className={classes.Form} onSubmit={this.formSubmitHandler}>
                            {formElements.map(formElement => {
                                return (
                                    <div key={formElement.id} className={classes.InputElement}>
                                        <Input
                                            elementType={formElement.config.elementType}
                                            elementConfig={formElement.config.elementConfig}
                                            value={formElement.config.value}
                                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                                            inValid={formElement.config.validation ? !formElement.config.isValid : null}
                                            touched={formElement.config.touched}
                                        />
                                    </div>
                                );
                            })}
                            <p className={classes.Label}>{this.state.label}</p>
                            <div className={classes.CheckBox}>
                                <input type="checkbox" /><span>I accept the Terms and Service</span>
                            </div>
                            <div className={classes.ConfirmPasswordButton}>
                                <Button disabled={!this.state.isFormValid}>Continue</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ConfirmPassword);