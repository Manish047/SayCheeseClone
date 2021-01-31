import React, { Component } from 'react';
import classes from './Age.module.css';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';

class Age extends Component {

    componentDidMount() {
        const form = { ...this.state.ageForm };
        const ageField = { ...form.age };
        ageField.value = this.props.age;
        form['age'] = ageField;
        this.setState({ ageForm: form });
    }

    state = {
        ageForm: {
            age: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Age',
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
        for (let formDataIdentifier in this.state.ageForm) {
            formData[formDataIdentifier] = this.state.ageForm[formDataIdentifier].value;
        }
        this.props.saveAge(formData.age);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedAgeForm = { ...this.state.ageForm }
        const updatedFormElement = { ...updatedAgeForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedAgeForm[inputIdentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIdentifier in updatedAgeForm) {
            if (updatedAgeForm[inputIdentifier].validation) {
                isFormValid = updatedAgeForm[inputIdentifier].isValid && isFormValid;
            }
        }
        this.setState({ ageForm: updatedAgeForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.ageForm) {
            formElements.push({
                id: key,
                config: this.state.ageForm[key]
            });
        }

        let form = (
            <div className={classes.AgeForm}>
                <h1 className={classes.Title}>Well, she thought age is just a number and how long have you been creating magic?</h1>
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

export default Age;