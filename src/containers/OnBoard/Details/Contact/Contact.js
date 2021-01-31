import React, { Component } from 'react';
import classes from './Contact.module.css';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';

class Contact extends Component {

    componentDidMount() {
        const form = { ...this.state.contactForm };
        const contactFiled = { ...form.contact };
        contactFiled.value = this.props.contact;
        form['contact'] = contactFiled;
        this.setState({ contactForm: form });
    }

    state = {
        contactForm: {
            contact: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Contact',
                    readOnly: true
                },
                value: '',
                validation: {
                    required: true,
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
        return isValid;
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for (let formDataIdentifier in this.state.contactForm) {
            formData[formDataIdentifier] = this.state.contactForm[formDataIdentifier].value;
        }
        this.props.saveContact();
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = { ...this.state.contactForm }
        const updatedFormElement = { ...updatedContactForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedContactForm[inputIdentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIdentifier in updatedContactForm) {
            if (updatedContactForm[inputIdentifier].validation) {
                isFormValid = updatedContactForm[inputIdentifier].isValid && isFormValid;
            }
        }
        this.setState({ contactForm: updatedContactForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.contactForm) {
            formElements.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }

        let form = (
            <div className={classes.ContactForm}>
                <h1 className={classes.Title}>How do we reach the Wonder Woman?</h1>
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

export default Contact;