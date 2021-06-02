 const initialState={
    input:{
        
        cp1:{
            value:0.04,
            field:'CP1',
            name:'cp1',
            input:true
            
        },
        cp2:{
            value:0.09,
            field:'CP2',
            name:"cp2",
            input:true
        },
        diameter1:{
            value:11.340091785602759,
            field:'Diameter 1',
            name:'diameter1',
            input:false,
            unit:'inch'

        },
        diameter2:{
            value:5.855220684752028,
            field:'Diameter 2',
            name:'diameter2',
            input:false,
            unit:'inch'

        }

    }
}

export const diameterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'diameter':
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
