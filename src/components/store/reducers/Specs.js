const initialState = {
    input: {
            kvRating: {
                value: 830,
                field: 'KV Rating',
                unit: 'kv',
                name: 'kvRating',
                input:true
            },
            cellsInSeries: {
                value: 5,
                field: 'Cells in series',
                name: 'cellsInSeries',
                input:true
            },
            nominalVoltage: {
                value: 18.5,
                field: 'Nominal Voltage',
                name: 'nominalVoltage',
                input:false,
                unit:'V'
            },
            maxRPM: {
                value: 15355,
                field: 'No. load MAX RPM',
                name: 'maxRPM',
                input:false,
                unit:'RPM'
            },
            estimatedMaxPercent: {
                value: 85,
                field: 'Estimated max percent',
                unit: '%',
                name: 'estimatedMaxPercent',
                input:true,
            },
            maxWorkingRPM: {
                value: 13051.75,
                field: 'Max working RPM',
                unit: 'RPM',
                name: 'maxWorkingRPM',
                input:false

            },
            maxPower: {
                value: 1000,
                field: 'Max power',
                unit: 'Watt',
                name: 'maxPower',
                input:true,

            },
           
        }
    }
    

   export const specsReducer=(state=initialState,action)=>{
       switch(action.type){
           case "specs":
               console.log(action,"aa")

               console.log({...state, 
                input:  {
                        ...state.input,
                        [action.data.id]:{
                            ...state.input[action.data.id],
                            value:+action.data.value
                             }
                        }
            },'action')

           return{...state, 
                        input:  {
                                ...state.input,
                                [action.data.id]:{
                                    ...state.input[action.data.id],
                                    value:+action.data.value
                                     }
                                }
                    };
           break;
           
           default:
               return initialState;
       }
   }
