import * as actionTypes from './actionTypes';

// Leads directly to reducer
export const saveMailAndContact = (email, contact) => {
    return {
        type: actionTypes.SAVE_EMAIL_AND_CONTACT,
        email: email,
        contact: contact
    }
}

// Leads directly to reducer
export const saveGender = (gender) => {
    return {
        type: actionTypes.SAVE_GENDER,
        gender: gender
    }
}

// Leads directly to reducer
export const savePassword = password => {
    return {
        type: actionTypes.SAVE_PASSWORD,
        password: password
    }
}

// Leads directly to reducer
export const saveName = (firstName, lastName) => {
    return {
        type: actionTypes.SAVE_NAME,
        firstName: firstName,
        lastName: lastName
    }
}

// Leads directly to reducer
export const saveAge = age => {
    return {
        type: actionTypes.SAVE_AGE,
        age: age
    }
}

// Leads directly to reducer
export const saveLocation = location => {
    return {
        type: actionTypes.SAVE_LOCATION,
        location: location
    }
}

// Leads directly to reducer
export const saveOccupation = occupation => {
    return {
        type: actionTypes.SAVE_OCCUPATION,
        occupation: occupation
    }
}