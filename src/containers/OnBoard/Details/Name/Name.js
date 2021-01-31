import React, { Component } from 'react';
import classes from './Name.module.css';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';

class Name extends Component {

    componentDidMount() {
        const form = { ...this.state.nameForm };
        const firstNameFiled = { ...form.firstName };
        const lastNameField = { ...form.lastName };
        firstNameFiled.value = this.props.firstName;
        lastNameField.value = this.props.lastName;
        form['firstName'] = firstNameFiled;
        form['lastName'] = lastNameField;
        this.setState({ nameForm: form });
    }

    state = {
        nameForm: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                isValid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true,
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
        return isValid;
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for (let formDataIdentifier in this.state.nameForm) {
            formData[formDataIdentifier] = this.state.nameForm[formDataIdentifier].value;
        }
        this.props.saveName(formData.firstName, formData.lastName);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedNameForm = { ...this.state.nameForm }
        const updatedFormElement = { ...updatedNameForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedNameForm[inputIdentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIdentifier in updatedNameForm) {
            if (updatedNameForm[inputIdentifier].validation) {
                isFormValid = updatedNameForm[inputIdentifier].isValid && isFormValid;
            }
        }
        this.setState({ nameForm: updatedNameForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.nameForm) {
            formElements.push({
                id: key,
                config: this.state.nameForm[key]
            });
        }

        let form = (
            <div className={classes.NameForm}>
                <h1 className={classes.Title}>Once upon a time there lived a Wonder Woman</h1>
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

export default Name;