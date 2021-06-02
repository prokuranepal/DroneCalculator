const initialState={
    input:{
        altitude: {
            value: 0,
            field: 'Altitude',
            unit: 'm',
            defaultValue: 0,
            name: 'altitude',
            input:true,
        },
        density: {
            value: 1.225,
            field: 'Density',
            unit: 'kg/m^3',
            name: 'density',
            input:true
        },
    }
}

export const environmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case "environment":
            return{...state, 
                input:  {
                        ...state.input,
                        [action.data.id]:{
                            ...state.input[action.data.id],
                            value:action.data.value
                             }
                        }
            };
        default:
            return initialState;
    }
}
