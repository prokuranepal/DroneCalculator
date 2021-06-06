export const actionTypes = {
    UPDATE_MOTOR_PROP_VALUES : 'UPDATE_MOTOR_PROP_VALUES'
}

export const updateMotorPropValues = (data) => {
    return {
        type: actionTypes.UPDATE_MOTOR_PROP_VALUES,
        data: data
    }
}