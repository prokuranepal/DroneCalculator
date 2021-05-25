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
                defaultValue: 830,
                name: 'kvRating'
            },
            cellsInSeries: {
                value: 5,
                field: 'Cells in series',
                unit: 'V',
                defaultValue: 5,
                name: 'cellsInSeries'
            },
            nominalVoltage: {
                value: 18.5,
                field: 'Nominal Voltage',
                defaultValue: 18.5,
                name: 'nominalVoltage'
            },
            maxRPM: {
                value: 15340,
                field: 'No. load MAX RPM',
                defaultValue: 15340,
                name: 'maxRPM'
            },
            estimatedMaxPercent: {
                value: 85,
                field: 'Estimated max percent',
                unit: '%',
                defaultValue: 85,
                name: 'estimatedMaxPercent'
            },
            maxWorkingRPM: {
                value: 13051.75,
                field: 'Max working RPM',
                unit: '%',
                defaultValue: null,
                name: 'maxWorkingRPM'
            },
            maxPower: {
                value: 1000,
                field: 'Max power',
                unit: 'Watt',
                defaultValue: 1000,
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
                defaultValue: 1.225,
                name: 'density'
            },
        }
    }

    export const Diameter={
        input:{
            
            cp1:{
                value:0.04,
                field:'CP',
                name:'cp1',
                
            },
            cp2:{
                value:0.09,
                field:'CP',
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

