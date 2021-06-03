 const initialState = {
   motorPropsR:null
    }

export const motorReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'updateState':
                return {...state,motorPropsR:action.data}
        default:
            return initialState
    }
}