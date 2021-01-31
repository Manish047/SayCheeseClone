import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    gender: '',
    firstName: '',
    lastName: '',
    age: '',
    contact: '',
    location: '',
    email: '',
    occupation: '',
    password: '',
}


const saveMailAndContact = (state, action) => {
    return updateObject(state, { email: action.email, contact: action.contact });
}

const saveGender = (state, action) => {
    return updateObject(state, { gender: action.gender });
}

const savePassword = (state, action) => {
    return updateObject(state, { password: action.password });
}

const saveName = (state, action) => {
    return updateObject(state, { firstName: action.firstName, lastName: action.lastName });
}

const saveAge = (state, action) => {
    return updateObject(state, { age: action.age });
}

const saveLocation = (state, action) => {
    return updateObject(state, { location: action.location });
}

const saveOccupation = (state, action) => {
    return updateObject(state, { occupation: action.occupation })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SAVE_EMAIL_AND_CONTACT):
            return saveMailAndContact(state, action);
        case (actionTypes.SAVE_GENDER):
            return saveGender(state, action);
        case (actionTypes.SAVE_PASSWORD):
            return savePassword(state, action);
        case (actionTypes.SAVE_AGE):
            return saveAge(state, action);
        case (actionTypes.SAVE_NAME):
            return saveName(state, action);
        case (actionTypes.SAVE_LOCATION):
            return saveLocation(state, action);
        case (actionTypes.SAVE_OCCUPATION):
            return saveOccupation(state, action);
        default:
            return state;
    }
}

export default reducer;