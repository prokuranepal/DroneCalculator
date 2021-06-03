

export const motorProp = {
    specs: {
        style: null,
        input:{
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
    },
        diameter:{
            style:null,
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

        }},
        environment:{
            style:null,
            input: {
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
        }},
        
        pitch:{
            style: null,
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
    }

    export const Environment={
        
    }

    export const Diameter={
        
    }
export const Pitch={
    
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

export const title ={
    missionRequirement:"Mission Requirement",
    operatingEnvironment: "Operating Requirement",
    mass: "Mass",
    wing: "Wing",
    calculatedWing:"Calculated Wing",
    horizontalTail: "Horizontal Tail",
    calculatedHorizontalTail: "Calculated Horizontal Tail",
    verticalTail: "Vertical Tail",
    calculatedVerticalTail: "Calculated Vertical Tail",
    drag: "Drag",
    general: "General",
    motorAndBattery:'Motor and Battery'
}

export const SizingProp={
    missionRequirement:{
        range:{
            value:89.28,
            unit:'km',
            input:true,
            field:'Range',
            name:'range',
            parent:'missionRequirement',
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
            value:0.6,
            unit:'',
            input:true,
            field:'Tapper Ratio',
            name:'tapperRatio',
            parent:'wing'

        }
    },
    calculatedWing:{
        wingArea:{
            value:0.8450000000000001,
            unit:'m^2',
            input:false,
            name:'wingArea',
            field:'Wing Area',
            parent:'calculatedWing'
        },
        rootChord:{
            value:0.40625,
            unit:'m',
            input:false,
            name:'rootChord',
            field:'Root Chord',
            parent:'calculatedWing'
        },
        tipChord:{
            value:0.24375,
            unit:'m',
            input:false,
            name:'tipChord',
            field:'Tip Chord',
            parent:'calculatedWing'
        },
        meanAerodynamicChord:{
            value:0.3317708333,
            unit:'m',
            input:false,
            name:'meanAerodynamicChord',
            field:'Mean Aerodynamic Chord',
            parent:'calculatedWing'
        }
    },
  
    horizontalTail:{
        cht:{
            value:0.9,
            unit:'',
            input:true,
            field:'CHT',
            name:'cht',
            parent:'horizontalTail'
        },
        lht:{
            value:1.451,
            unit:'m',
            input:true,
            name:'lht',
            field:'LHT',
            parent:'horizontalTail'
        },
        span:{
            value:0.9,
            unit:'m',
            input:true,
            name:'span',
            field:'Span',
            parent:'horizontalTail'
        },
        tapperRatio:{
            value:0.7,
            unit:'',
            input:true,
            name:'tapperRatio',
            field:'Taper Ratio',
            parent:'horizontalTail'
        }
    },
    calculatedHorizontalTail:{
        sht:{
            value:0.173888159,
            unit:'m^2',
            input:false,
            name:'sht',
            field:'SHT',
            
        },
        rootChord:{
            value:0.227304783,
            unit:'m',
            input:false,
            name:'rootChord',
            field:'Root Chord',
        },
        tipChord:{
            value:0.1591133481,
            unit:'m',
            input:false,
            name:'tipChord',
            field:'Tip Chord'

        }
    },
    verticalTail:{
        cvt:{
            value:0.07,
            unit:'',
            input:true,
            field:'CVT',
            name:'cvt',
            parent:'verticalTail'
        },
        lvt:{
            value:1.451,
            unit:'m',
            input:true,
            name:'lvt',
            field:'LVT',
            parent:'verticalTail'
        },
        span:{
            value:0.5,
            unit:'m',
            input:true,
            name:'span',
            field:'Span',
            parent:'verticalTail'
        },
        tapperRatio:{
            value:0.7,
            unit:'',
            input:true,
            name:'tapperRatio',
            field:'Tapper Ratio',
            parent:'verticalTail'
        }
    },
    calculatedVerticalTail:{
        svt:{
            value:0.1059889731,
            unit:'m^2',
            input:false,
            name:'svt',
            field:'SVT'
        },
        rootChord:{
            value:0.24835858191,
            unit:'m',
            input:false,
            name:'rootChord',
            field:'Root Chord'
        },
        tipChord:{
            value:0.1745700734,
            unit:'m',
            input:false,
            name:'tipChord',
            field:'Tip Chord'
        }
    },
    mass:{
        totalMass:{
            value:8,
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
    drag:{
        wingZeroLiftDragCoefficient:{
         value:0.09,
         unit:'',
         input:true,
         name:'wingZeroLiftDragCoefficient',
         field:'Wing Zero Lift Drag Coefficient',
         parent:'drag'   
        },
        fuselageDragCoefficient:{
            value:0.02,
            unit:'',
            input:true,
            name:'fuselageDragCoefficient',
            field:'Fuselage Drag Coefficient',
            parent:'drag'
        }
    },
    general:{
        massFraction:{
            value:44.58333333,
            unit:'%',
            input:false,
            name:'massFraction',
            field:"Mass Fraction",
            parent:'general'   
        },
        ostwaldEfficiency:{
            value:0.96153384615,
            unit:'',
            input:false,
            name:'ostwaldEfficiency',
            field:'Ostwald Efficiency',
            parent:'general'
        },
        k:{
            value:0.0413802852,
            unit:'',
            input:false,
            name:'k',
            field:'K',
            parent:'general'
        },
            minDragAirspeed:{
                value:13.779173019,
                unit:'m/s',
                name:'minDragAirspeed',
                field:'Min Drag Airspeed',
                parent:'general'
            },
            minPowerAirspeed:{
                value:10.47033073,
                unit:'m/s',
                name:'minPowerAirspeed',
                field:'Min Power Airspeed',
                parent:'general'
            },
            maxLiftCoefficient:{
                value:1.375936884,
                unit:'',
                input:false,
                name:'maxLiftCoefficient',
                field:'Max Lift Coefficient',
                parent:'general'
            },
            designLiftCoefficient:{
                value:0.77396497,
                unit:'',
                input:false,
                name:'designLiftCoefficient',
                field:'Design Lift Coefficient',
                parent:'general'
            },
            inducedDragCoefficient:{
                value:0.02478766159,
                unit:'',
                input:false,
                name:'inducedDragCoefficient',
                field:'Induced Drag Coefficient',
                parent:'general'
            },
            totalDragCoefficient:{
                value:0.134786616,
                unit:'',
                input:false,
                name:'totalDragCoefficient',
                field:'Total Drag Coefficient',
                parent:'general'
            },
            drag:{
                value:2.089827047,
                unit:'',
                input:false,
                name:'drag',
                field:'Drag',
                parent:'general'
            },
            liftToDragRatio:{
                value:31.2237802,
                unit:'',
                input:false,
                name:'liftToDragRatio',
                field:'Lift To Drag Ratio',
                parent:'general'
            }
    },
    motorAndBattery:{
        powerToWeightRatio:{
            value:250,
            uit:'W/kg',
            input:true,
            field:'Power To Weight Ratio',
            name:'powerToWeightRatio',
            parent:'motorAndBattery',
        },
        nominalVoltage:{
            value:37,
            unit:'V',
            input:true,
            field:'Nominal Voltage',
            name:'nominalVoltage',
            parent:'motorAndBattery'
        },
        maximumDischarge:{
            value:90,
            unit:'%',
            input:true,
            field:'Maximum Discharge',
            name:'maximumDischarge',
            parent:'motorAndBattery'
        },
        maxContinousCurrent:{
            value:100,
            unit:'A',
            input:true,
            field:'Max Continous Current',
            name:'maxContinousCurrent',
            parent:'motorAndBattery'
        },
        propullisiveEfficiency:{
            value:55,
            unit:'%',
            input:true,
            field:'Propullisive Efficiency',
            name:'propullisiveEfficiency',
            parent:'motorAndBattery',
        },
        maxPower:{
            value:3000,
            unit:'W',
            input:false,
            field:'Max Power',
            name:'maxPower',
            parent:'motorAndBattery',
        },
        powerCruise:{
            value:410.06231259186677,
            unit:'W',
            input:false,
            field:'Power Cruise',
            name:'powerCruise',
            parent:'motorAndBattery',
        },
        currentCruise:{
            value:20.15048219124652
            ,
            unit:'A',
            input:false,
            field:'Current Cruise',
            name:'currentCruise',
            parent:'motorAndBattery',
        },
        flightTimeBatteryCapacity:{
            value:27762.886574606317,
            unit:'mAh',
            input:false,
            field:'Battery Capacity',
            name:'flightTimeBatteryCapacity',
            parent:'motorAndBattery',
        },
        rangeCruiseSpeed:{
            value:89.28,
            unit:'km',
            input:false,
            name:'rangeCruiseSpeed',
            field:'Range Cruise Speed',
            parent:'motorAndBattery',
        },
        rangeBatteryCapacity:{
            value:27762.886574606317,
            unit:'mAh',
            input:false,
            name:'rangeBatteryCapacity',
            field:'Battery capacity',
            parent:'motorAndBattery',
        },
        FlightTime:{
            value:1.24,
            unit:'hr',
            input:false,
            name:'FlightTime',
            field:'Flight Time',
            parent:'motorAndBattery'
        },
        batteryCapacityParallel:{
            value:25700,
            unit:'mAh',
            input:true,
            field:'Battery Capacity in Parallel',
            name:'batteryCapacityParallel',
            parent:'motorAndBattery'
        },
        parallelCells:{
            value:7,
            uit:'',
            input:true,
            field:'Parallel Cells',
            name:'parallelCells',
            parent:'motorAndBattery'

        },
        capacityOfEachCell:{
            value:3671.428571,
            unit:'mAh',
            input:false,
            name:'capacityOfEachCell',
            field:'Capacity of each cell',
            parent:'motorAndBattery',
        },
        cRating:{
            value:27.23735409,
            unit:'',
            input:false,
            name:'cRating',
            field:'C Rating',
            parent:'motorAndBattery',
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
