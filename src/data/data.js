

export const Specs = {
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

    export const Environment={
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

    export const Diameter={
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
export const Pitch={
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



// let arr1=[]
// let arr2=[]

// for (let key in sizing){
//     if(key==="pitch")
//     arr1.push({key:key,data:sizing[key]})
//     else if(key==='diameter')
//     arr2.push({key:key,data:sizing[key]})
// }
// console.log(arr1,'arr1')
// console.log(arr2,'arr2')



export const Sizing={
    missionRequirement:{
        range:{
            value:108,
            unit:'km',
            input:true,
            field:'Range',
            name:'range',
            parent:'missionRequirement'
        },
        flightTime:{
            value:1.24,
            unit:'hr',
            input:true,
            field:'Flight Time',
            name:'flightTime',
            parent:'missionRequirement'

        },
        payload:{
            value:1.5,
            unit:'kg',
            input:true,
            field:'Payload',
            name:'payload',
            parent:'missionRequirement'

        }
    },
    operatingEnvironment:{
        altitude:{
            value:2500,
            unit:'m',
            input:true,
            field:'Altitude',
            name:'altitude',
            parent:'operatingEnvironment'
        },
        airDensity:{
            value:0.9,
            unit:'kg/m^3',
            input:true,
            field:'Air Density',
            name:'airDensity',
            parent:'operatingEnvironment'

        },
        acceleration:{
            value:9.81,
            unit:'m/s^2',
            input:false,
            field:'Acceleration',
            name:'acceleration',
            parent:'operatingEnvironment'

        },
        cruiseSpeed:{
            value:20,
            unit:'m/s',
            input:true,
            field:'Cruise Speed',
            name:'cruiseSpeed',
            parent:'operatingEnvironment'

        },
        stallSpeed:{
            value:15,
            unit:'m/s',
            input:true,
            field:'Stall Speed',
            name:'stallSpeed',
            parent:'operatingEnvironment'

        }
    },
    mass:{
        totalMass:{
            value:12,
            unit:'kg',
            input:true,
            field:'Total Mass',
            name:'totalMass',
            parent:'mass'
        },
        batteryMass:{
            value:3.85,
            unit:'kg',
            input:true,
            field:'Battery Mass',
            name:'batteryMass',
            parent:'mass'

        }
    },
    wing:{
        span:{
            value:2.6,
            unit:'m',
            input:true,
            field:'Span',
            name:'span',
            parent:'wing'
        },
        aspectRatio:{
            value:8,
            unit:'',
            input:true,
            field:'Aspect ratio',
            name:'aspectRatio',
            parent:'wing'

        },
        inducedDragFactor:{
            value:0.04,
            input:true,
            unit:"",
            field:'Induced Drag Factor',
            name:"inducedDragFactor",
            parent:'wing'

        },
        tapperRatio:{
            value:0.04,
            unit:'',
            input:true,
            field:'Tapper Ratio',
            name:'tapperRatio',
            parent:'wing'

        }
    }
}





// let arr=[]
// let nest=[]
// for (let key in Sizing){
//     arr.push({data:Sizing[key]})
// }
// console.log(arr,"arr")


// for (let key of arr.data)
// arr.map(each=>{
//     for (let key in each.data){
// nest.push({id:key,data:each.data[key]})
//     }
// })

// for (let i=0;i<arr.length;i++){
// Object.keys(arr[i]).map(each=>{
//     return nest.push({id:each,data:arr[i][each]})
// })
// }

// console.log(nest,'arrnest')

