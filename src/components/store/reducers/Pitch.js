 const initialState={
    input:{
        airspeed1:{
            value:15,            
            field:'airspeed1',
            name:'airspeed1',
            input:true,
            unit:'m/s'
        },
        airspeed2:{
            value:24,
            field:'airspeed2',
            name:'airspeed2',
            input:true,
            unit:'m/s'

        },
        pitch1:{
            value:4.88666482,
            field:'pitch1',
            name:'pitch1',
            input:false,
            unit:'inch'

        },
        pitch2:{
            value:7.818663711,
            field:'pitch2',
            name:'pitch2',
            input:false,
            unit:'inch'

        }
    }
}

export const pitchReducer=(state=initialState,action)=>{
    switch(action){
        default:
            return initialState;
    }
}
