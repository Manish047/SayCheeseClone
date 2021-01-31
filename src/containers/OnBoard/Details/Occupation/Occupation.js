import React, { Component } from 'react';
import classes from './Occupation.module.css';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';

class Occupation extends Component {

    componentDidMount() {
        const form = { ...this.state.occupationForm };
        const occupationField = { ...form.occupation };
        occupationField.value = this.props.occupation;
        form['occupation'] = occupationField;
        this.setState({ occupationForm: form });
    }

    state = {
        occupationForm: {
            occupation: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Occupation',
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
        for (let formDataIdentifier in this.state.occupationForm) {
            formData[formDataIdentifier] = this.state.occupationForm[formDataIdentifier].value;
        }
        this.props.saveOccupation(formData.occupation);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOccupationForm = { ...this.state.occupationForm }
        const updatedFormElement = { ...updatedOccupationForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOccupationForm[inputIdentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIdentifier in updatedOccupationForm) {
            if (updatedOccupationForm[inputIdentifier].validation) {
                isFormValid = updatedOccupationForm[inputIdentifier].isValid && isFormValid;
            }
        }
        this.setState({ occupationForm: updatedOccupationForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.occupationForm) {
            formElements.push({
                id: key,
                config: this.state.occupationForm[key]
            });
        }

        let form = (
            <div className={classes.OccupationForm}>
                <h1 className={classes.Title}>What is this Wonder Woman busy with these days?</h1>
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

export default Occupation;