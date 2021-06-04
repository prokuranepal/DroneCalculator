export const actionTypes = {
    UPDATE_MOTOR_PROP_VALUES : 'UPDATE_MOTOR_PROP_VALUES',
    UPDATE_SIZING_PROP_VALUES : 'UPDATE_SIZING_PROP_VALUES'
}

export const updateMotorPropValues = (data) => {
    // console.log("motor actions", data);
    return {
        type: actionTypes.UPDATE_MOTOR_PROP_VALUES,
        data: data
    }
}

export const updateSizingPropValues = (data) => {
    // console.log("sizing actions", data);
    return {
        type: actionTypes.UPDATE_SIZING_PROP_VALUES,
        data: data
    }
}