import React, { Component } from 'react';
import classes from './Email.module.css';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';

class Email extends Component {

    componentDidMount() {
        const form = { ...this.state.emailForm };
        const emailFiled = { ...form.email };
        emailFiled.value = this.props.email;
        form['email'] = emailFiled;
        this.setState({ emailForm: form });
    }

    state = {
        emailForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email',
                    readOnly: true
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                isValid: true,
                touched: false
            },
        },
        isFormValid: true
    }

    checkValidity = (value, rules) => {
        if (!rules) return;
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
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
        for (let formDataIdentifier in this.state.emailForm) {
            formData[formDataIdentifier] = this.state.emailForm[formDataIdentifier].value;
        }
        this.props.saveEmail();
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedEmailForm = { ...this.state.emailForm }
        const updatedFormElement = { ...updatedEmailForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedEmailForm[inputIdentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIdentifier in updatedEmailForm) {
            if (updatedEmailForm[inputIdentifier].validation) {
                isFormValid = updatedEmailForm[inputIdentifier].isValid && isFormValid;
            }
        }
        this.setState({ nameForm: updatedEmailForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.emailForm) {
            formElements.push({
                id: key,
                config: this.state.emailForm[key]
            });
        }

        let form = (
            <div className={classes.EmailForm}>
                <h1 className={classes.Title}>While we know your physical address, let us know your e-Address</h1>
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
                    <div className={classes.ContinueButton}>
                        <Button disabled={!this.state.isFormValid}>Continue</Button>
                    </div>
                </form>
            </div>
        );
        return form;
    }
}

export default Email;