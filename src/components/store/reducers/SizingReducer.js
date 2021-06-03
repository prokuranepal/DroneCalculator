

 const initialState={
sizingPropsR:null
}


export const sizingReducer=(state=initialState,action)=>{
    switch(action.type){
        // case 'sizing':
        // console.log(action.data.parent,action.data.name,action.data.value,"sizingaction")
        // console.log({...state,[action.data.parent]:{...state[action.data.parent],[action.data.name]:{...state[action.data.parent][action.data.name]}}},"sizingredux") 
        // return {...state,input:{...state.input,[action.data.parent]:{...state.input[action.data.parent],[action.data.name]:{...state.input[action.data.parent][action.data.name],value:action.data.value}}}}
        // return {...state,[action.data.parent]:{...state[action.data.parent],[action.data.name]:{...state[action.data.parent][action.data.name],value:action.data.value}}}
            
        default:
            return initialState;
    }
}
