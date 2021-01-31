import React, { Component } from "react";
import classes from './RegisterationCard.module.css';
import { withRouter } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class RegisterationCard extends Component {

    state = {
        registerationForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'abc@gmail.com'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                isValid: false,
                touched: false,
                label: 'Email Id',
                labelImg: "https://devsaycheese.com/assets/images/home/mail.png"
            },
            contact: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: '9876543210'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    isNumeric: true
                },
                isValid: false,
                touched: false,
                label: 'Mobile Number',
                labelImg: "https://devsaycheese.com/assets/images/home/Vector.png"
            },
        },
        isFormValid: false
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
        for (let formDataIdentifier in this.state.registerationForm) {
            formData[formDataIdentifier] = this.state.registerationForm[formDataIdentifier].value;
        }
        this.props.register(formData.email, formData.contact);
        this.props.history.push('/onBoard');
    }

    inputChangedHandler = (event, inputIdentifier) => {

        // Cloning authForm
        const updatedAuthForm = { ...this.state.registerationForm }

        // Cloning inputElement DEEPLY from registerationForm[inputIdentifier]
        const updatedFormElement = { ...updatedAuthForm[inputIdentifier] };

        // Changing Values
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        // Updating the cloned element
        updatedAuthForm[inputIdentifier] = updatedFormElement;

        // Check if entire from is valid
        let isFormValid = true;
        for (let inputIdentifier in updatedAuthForm) {
            if (updatedAuthForm[inputIdentifier].validation) {
                isFormValid = updatedAuthForm[inputIdentifier].isValid && isFormValid;
            }
        }

        // Update the state
        this.setState({ registerationForm: updatedAuthForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.registerationForm) {
            formElements.push({
                id: key,
                config: this.state.registerationForm[key]
            });
        }

        return (
            <div id="registerationForm" className={classes.RegisterationCard}>
                <h1 className={classes.Title}>Begin your happiness journey now.</h1>
                <h3 className={classes.SubTitle}>Join our community</h3>
                <form className={classes.Form} onSubmit={this.formSubmitHandler}>
                    <div className={classes.InputData}>
                        {formElements.map(formElement => {
                            return (
                                <div key={formElement.id} className={classes.InputElement}>
                                    <div className={classes.Heading}>
                                        <img src={formElement.config.labelImg} alt={formElement.id} />
                                        <h3>{formElement.config.label}</h3>
                                    </div>
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

                    </div>
                    <div className={classes.RegisterButton}>
                        <Button disabled={!this.state.isFormValid}>Register</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(RegisterationCard);