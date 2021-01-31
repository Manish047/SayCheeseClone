import React, { Component } from 'react';
import classes from './Location.module.css';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';

class Location extends Component {

    componentDidMount() {
        const form = { ...this.state.locationForm };
        const locationField = { ...form.location };
        locationField.value = this.props.location;
        form['location'] = locationField;
        this.setState({ locationForm: form });
    }

    state = {
        locationForm: {
            location: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Location',
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
        for (let formDataIdentifier in this.state.locationForm) {
            formData[formDataIdentifier] = this.state.locationForm[formDataIdentifier].value;
        }
        this.props.saveLocation(formData.location);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLocationForm = { ...this.state.locationForm }
        const updatedFormElement = { ...updatedLocationForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedLocationForm[inputIdentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIdentifier in updatedLocationForm) {
            if (updatedLocationForm[inputIdentifier].validation) {
                isFormValid = updatedLocationForm[inputIdentifier].isValid && isFormValid;
            }
        }
        this.setState({ locationForm: updatedLocationForm, isFormValid: isFormValid });
    }

    render() {

        const formElements = [];
        for (let key in this.state.locationForm) {
            formElements.push({
                id: key,
                config: this.state.locationForm[key]
            });
        }

        let form = (
            <div className={classes.LocationForm}>
                <h1 className={classes.Title}>Our roots define where we came from. Where can we find you now?</h1>
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

export default Location;