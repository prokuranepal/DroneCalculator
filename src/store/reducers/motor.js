import {actionTypes} from '../actions/motor';
import {updateObject} from '../utility';

const initialState = {
    motorPropsR: null
}

export const motorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_MOTOR_PROP_VALUES:
            return updateObject(state, {motorPropsR: action.data})
        default:
            return initialState
    }
}