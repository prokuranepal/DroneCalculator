import { actionTypes } from '../actions';
import { updateObject } from '../utility';

const initialState = {
    motorPropsR: null,
    sizingPropsR: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_MOTOR_PROP_VALUES:
            return updateObject(state, { motorPropsR: action.data });
        case actionTypes.UPDATE_SIZING_PROP_VALUES:
            console.log('reducer',action.data);
            return updateObject(state, { sizingPropsR: action.data });
        default:
            return initialState
    }
}

