const updateObject = (state, updatedProperties) => {
    return {
        ...state,
        ...updatedProperties
    }
}

export default updateObject;