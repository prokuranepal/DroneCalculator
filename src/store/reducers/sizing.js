import { actionTypes } from '../actions/sizing';
import { updateObject } from '../utility';


const initialState = {
    sizingPropsR: null
}


export const sizingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SIZING_PROP_VALUES:
            return updateObject(state, { sizingPropsR: action.data })
        default:
            return initialState
    }
}

