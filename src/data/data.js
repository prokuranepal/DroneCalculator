// export const data=[
//     {
//         header:"Specs",
//         fields:[
//             {field:'KV Rating'},
//             {field:'Cells in series'},
//             {field:'Nominal Voltage'},
//             {field:'No.load MAX RPM'},                        
//             {field:'Estimated max percent'},                        
//             {field:'Max working RPM'},                      
//             {field:'Max power'},                        
//             {field:'Altitude'},                        
//             {field:'Density'},                        

//         ]
//     },
//     // {
//     //     header:"Specs",
//     //     fields:[
//     //         {field:'KV Rating',unit:'KV'},
//     //         {field:'KV Rating',unit:'KV'},
//     //         {field:'KV Rating',unit:'KV'},
//     //         {field:'KV Rating',unit:'KV'},                        
//     //     ]
//     // },  
//     // {
//     //     header:"Specs",
//     //     fields:[
//     //         {field:'KV Rating',unit:'KV'},
//     //         {field:'KV Rating',unit:'KV'},
//     //         {field:'KV Rating',unit:'KV'},
//     //         {field:'KV Rating',unit:'KV'},                        
//     //     ]
//     // }
// ]



export const Specs = {
    input: {
            kvRating: {
                value: 830,
                field: 'KV Rating',
                unit: 'kv',
                name: 'kvRating'
            },
            cellsInSeries: {
                value: 5,
                field: 'Cells in series',
                unit: 'V',
                name: 'cellsInSeries'
            },
            nominalVoltage: {
                value: 18.5,
                field: 'Nominal Voltage',
                name: 'nominalVoltage'
            },
            maxRPM: {
                value: 15340,
                field: 'No. load MAX RPM',
                name: 'maxRPM'
            },
            estimatedMaxPercent: {
                value: 85,
                field: 'Estimated max percent',
                unit: '%',
                name: 'estimatedMaxPercent'
            },
            maxWorkingRPM: {
                value: 13051.75,
                field: 'Max working RPM',
                unit: '%',
                name: 'maxWorkingRPM'
            },
            maxPower: {
                value: 1000,
                field: 'Max power',
                unit: 'Watt',
                name: 'maxPower',

            },
           
        }
    }

    export const Environment={
        input:{
            altitude: {
                value: 0,
                field: 'Altitude',
                unit: 'm',
                defaultValue: 0,
                name: 'altitude'
            },
            density: {
                value: 1.225,
                field: 'Density',
                unit: 'kg/m^3',
                name: 'density'
            },
        }
    }

    export const Diameter={
        input:{
            
            cp1:{
                value:0.04,
                field:'CP1',
                name:'cp1',
                
            },
            cp2:{
                value:0.09,
                field:'CP2',
                name:"cp2"
            },
            diameter1:{
                value:11.340091785602759,
                field:'Diameter 1',
                name:'diameter1'
            },
            diameter2:{
                value:5.855220684752028,
                field:'Diameter 2',
                name:'diameter2'
            }

        }
    }
export const Pitch={
    input:{
        airspeed1:{
            value:15,            
            field:'airspeed1',
            name:'airspeed1'
        },
        airspeed2:{
            value:24,
            field:'airspeed2',
            name:'airspeed2'
        },
        pitch1:{
            value:4.88666482,
            field:'pitch1',
            name:'pitch1'
        },
        pitch2:{
            value:7.818663711,
            field:'pitch2',
            name:'pitch2'
        }
    }
}
