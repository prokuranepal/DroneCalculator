export const actionTypes = {
    UPDATE_SIZING_PROP_VALUES : 'UPDATE_SIZING_PROP_VALUES'
}

export const updateSizingPropValues = (data) => {
    return {
        type: actionTypes.UPDATE_SIZING_PROP_VALUES,
        data: data
    }
}