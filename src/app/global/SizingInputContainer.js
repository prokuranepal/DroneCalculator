import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import InputUnit from '../components/inputUnit/InputUnit';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Button } from '../components/Button/Button'
import * as actions from '../store/actions';
import '../../app/styles/App.css'
import { SizingProp, title } from '../../data/data'
import Chart from '../components/chart/Chart';


export const objToArray=(state)=>{
    let sizingArray = []
    for (let key in state) {
        let innerArray = []
        for (let key2 in state[key]) {
            innerArray.push({ data: state[key][key2] })
        }
        sizingArray.push({ data: innerArray, title: title[key] })
    }
    return sizingArray

}

export const parasiticDragCalc=(state)=>{
    return (state.drag.wingZeroLiftDragCoefficient.value+state.drag.fuselageDragCoefficient.value);
}

export const wingAreaCalc= (newState)=>Math.pow(newState.wing.span.value,2)/newState.wing.aspectRatio.value;
export const calculatedWingRootChord=(newState)=>2*newState.calculatedWing.wingArea.value/(newState.wing.span.value*(1+newState.wing.tapperRatio.value));
export const calculatedWingTipChord=(newState)=>(newState.calculatedWing.rootChord.value*newState.wing.tapperRatio.value);
export const meanAerodynamicChord=(newState)=>(1+newState.wing.tapperRatio.value+Math.pow(newState.wing.tapperRatio.value,2))/(1+newState.wing.tapperRatio.value)*2/3*newState.calculatedWing.rootChord.value;
export const calculatedHorizontalTailSht=(newState)=>newState.horizontalTail.cht.value*newState.calculatedWing.wingArea.value*newState.calculatedWing.meanAerodynamicChord.value/newState.horizontalTail.lht.value;
export const calculatedHorizontalTailRootChord=(newState)=>(2*newState.calculatedHorizontalTail.sht.value/newState.horizontalTail.span.value)/(1+newState.horizontalTail.tapperRatio.value);
export const calculatedHorizontalTailTipChord=(newState)=>(newState.calculatedWing.rootChord.value*newState.wing.tapperRatio.value);
export const calculatedVerticalTailSvt=(newState)=>(newState.calculatedWing.wingArea.value*newState.wing.span.value*newState.verticalTail.cvt.value/newState.verticalTail.lvt.value);
export const calculatedVerticalTailRootChord=(newState)=>(newState.calculatedVerticalTail.svt.value*2/newState.verticalTail.span.value)/(1+newState.verticalTail.tapperRatio.value);
export const calculatedVerticalTailTipChord=(newState)=>newState.calculatedVerticalTail.rootChord.value*newState.verticalTail.tapperRatio.value;
export const massFraction=(newState)=>(newState.missionRequirement.payload.value+newState.mass.batteryMass.value)/newState.mass.totalMass.value*100;
export const ostwaldEfficiency=(newState)=>1/(1+newState.wing.inducedDragFactor.value);
export const k=(newState)=>1/(3.14*newState.general.ostwaldEfficiency.value*newState.wing.aspectRatio.value);
export const minDragAirspeed=(newState)=>Math.pow((2*newState.mass.totalMass.value*newState.operatingEnvironment.acceleration.value/(newState.operatingEnvironment.airDensity.value*newState.calculatedWing.wingArea.value)),0.5)*Math.pow((newState.general.k.value/(newState.drag.wingZeroLiftDragCoefficient.value+newState.drag.fuselageDragCoefficient.value)),0.25);
export const minPowerAirspeed=(newState)=>Math.pow(1/(3),0.25)*newState.general.minDragAirspeed.value;
export const maxLiftCoefficient=(newState)=>newState.mass.totalMass.value*newState.operatingEnvironment.acceleration.value/(0.5*newState.operatingEnvironment.airDensity.value*Math.pow(newState.operatingEnvironment.stallSpeed.value,2)*newState.calculatedWing.wingArea.value);
export const designLiftCoefficient=(newState)=>newState.mass.totalMass.value*newState.operatingEnvironment.acceleration.value/(0.5*newState.operatingEnvironment.airDensity.value*Math.pow(newState.operatingEnvironment.cruiseSpeed.value,2)*newState.calculatedWing.wingArea.value);
export const inducedDragCoefficient=(newState)=>newState.general.k.value*Math.pow(newState.general.designLiftCoefficient.value,2)
export const totalDragCoefficient=(newState)=>newState.drag.wingZeroLiftDragCoefficient.value+newState.drag.fuselageDragCoefficient.value+newState.general.inducedDragCoefficient.value;
export const totalDrag=(newState)=>0.5*newState.operatingEnvironment.airDensity.value*Math.pow(newState.operatingEnvironment.cruiseSpeed.value,2)*newState.calculatedWing.wingArea.value*(newState.general.totalDragCoefficient.value)/newState.operatingEnvironment.acceleration.value;
export const liftToDragRatio=(newState)=>newState.general.designLiftCoefficient.value/newState.general.inducedDragCoefficient.value;
export const maxPower=(newState)=>newState.mass.totalMass.value*newState.motorAndBattery.powerToWeightRatio.value;
export const powerCruise=(newState)=>newState.general.drag.value*newState.operatingEnvironment.acceleration.value*newState.operatingEnvironment.cruiseSpeed.value;
export const currentCruise=(newState)=>(newState.motorAndBattery.powerCruise.value/newState.motorAndBattery.nominalVoltage.value)/(newState.motorAndBattery.propullisiveEfficiency.value/100);
export const flightTime=(newState)=>(newState.missionRequirement.range.value*1000/newState.operatingEnvironment.cruiseSpeed.value)/(3600);
export const rangeBatteryCapacity=(newState)=>(newState.motorAndBattery.FlightTime.value * newState.motorAndBattery.currentCruise.value/Math.pow(10,-3))/(newState.motorAndBattery.maximumDischarge.value/100);
export const rangeCruiseSpeed=(newState)=>newState.missionRequirement.flightTime.value*60*60*newState.operatingEnvironment.cruiseSpeed.value/1000;
export const flightTimeBatteryCapacity=(newState)=>(newState.missionRequirement.flightTime.value * newState.motorAndBattery.currentCruise.value/Math.pow(10,-3))/(newState.motorAndBattery.maximumDischarge.value/100);
export const capacityOfEachCell=(newState)=>newState.motorAndBattery.batteryCapacityParallel.value/newState.motorAndBattery.parallelCells.value;
export const cRating=(newState)=>newState.motorAndBattery.maxContinousCurrent.value / (newState.motorAndBattery.batteryCapacityParallel.value / newState.motorAndBattery.parallelCells.value / 1000)

   

export const dragClCalc=(state, velocity, parasiticDrag)=>{
    let cl=[]
    let drag =[]
    for(let i=0;i<velocity.length;i++){
        cl.push((state.mass.totalMass.value*state.operatingEnvironment.acceleration.value)/(1/2*state.operatingEnvironment.airDensity.value*Math.pow(velocity[i],2)*state.calculatedWing.wingArea.value))
        drag.push(1/2 *state.operatingEnvironment.airDensity.value*Math.pow(velocity[i],2)*state.calculatedWing.wingArea.value*(parasiticDrag+state.general.k.value*Math.pow(cl[i],2)))
    }
    return {cl:cl, drag:drag}

}
const SizingInputContainer = (props) => {

    //Reducer data

    const sizingPropsR = useSelector((state) => state.reducer.sizingPropsR)
    console.log("sizingProps", sizingPropsR)
    const [state, setState] = useState(SizingProp)

    useEffect(() => {
        if (sizingPropsR) setState(sizingPropsR)
        // console.log(sizingPropsR)
    }, []);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(actions.updateSizingPropValues(state))
        props.history.push('/')
    }
    //Dispatch

    const dispatch = useDispatch()

    // const sizingGetLocalStorage=()=>{
    //    return JSON.parse(localStorage.getItem('sizing'));
    // }
    // console.log(sizingGetLocalStorage,'retrive')




    // dispatch({type:'sizing',data:{...data,value:e.target.value}})
    const updateState = (e, data, state, type) => {

        // console.log(state, type, "State")
        // console.log(e.target.value, "value")
        const newState = {
            ...state,
            [type]: {
                ...state[type],
                [data.name]: {
                    ...state[type][data.name],
                    value: +e.target.value
                }
            }
        }
        return newState
    }

  

    const onChangeHandler = (e, data, type) => {
        console.log("e data", e)
        console.log(type,'type')
        let newState = {...state};
        newState = updateState(e, data, newState, type)


        // const updatedSizing={...state,[data.parent]:{...state[data.parent],[data.name]:{...state[data.parent][data.name],value:+e.target.value}}}
        // console.log(updatedSizing,"updatedSizing")
        // sizing.calculatedWing.wingArea.value=parseFloat(Math.pow(sizing.wing.span.value,2)/sizing.wing.aspectRatio.value).toPrecision(4);
        // sizing.calculatedWing.rootChord.value=parseFloat(2*sizing.calculatedWing.wingArea.value/(sizing.wing.span.value*(1+sizing.wing.tapperRatio.value))).toPrecision(4);

// console.log(newState.wing.span,"span")
//         const wingArea = Math.pow(newState.wing.span.value, 2) / newState.wing.aspectRatio.value;
//         const wingRootChord = 2 * wingArea / (newState.wing.span.value * (1 + newState.wing.tapperRatio.value));
//         const wingTipChord = (wingRootChord * newState.wing.tapperRatio.value);
//         const meanAerodynamicChord = (1 + newState.wing.tapperRatio.value + Math.pow(newState.wing.tapperRatio.value, 2)) / (1 + newState.wing.tapperRatio.value) * 2 / 3 * wingRootChord;
//         const horizontalSHT = newState.horizontalTail.cht.value * wingArea * meanAerodynamicChord / newState.horizontalTail.lht.value;
//         const horizontalRootChord = (2 * horizontalSHT / newState.horizontalTail.span.value) / (1 + newState.horizontalTail.tapperRatio.value);
//         const horizontalTipChord = horizontalRootChord * newState.horizontalTail.tapperRatio.value;
//         const verticalSVT = wingArea * newState.wing.span.value * newState.verticalTail.cvt.value / newState.verticalTail.lvt.value;
//         const verticalRootChord = (verticalSVT * 2 / newState.verticalTail.span.value) / (1 + newState.verticalTail.tapperRatio.value);
//         const verticalTipChord = verticalRootChord * newState.verticalTail.tapperRatio.value;
//         const massFraction = (newState.missionRequirement.payload.value + newState.mass.batteryMass.value) / newState.mass.totalMass.value * 100;

//         const ostwaldEfficiency = 1 / (1 + newState.wing.inducedDragFactor.value)
//         const k = 1 / (3.14 * ostwaldEfficiency * newState.wing.aspectRatio.value).toFixed(6)
//         const minDragAirspeed = Math.pow((2 * newState.mass.totalMass.value * newState.operatingEnvironment.acceleration.value / (newState.operatingEnvironment.airDensity.value * wingArea)), 0.5) * Math.pow((k / (newState.drag.wingZeroLiftDragCoefficient.value + newState.drag.fuselageDragCoefficient.value)), 0.25);
//         const minPowerAirspeed = Math.pow(1 / (3), 0.25) * minDragAirspeed;
//         const maxLiftCoefficient = newState.mass.totalMass.value * newState.operatingEnvironment.acceleration.value / (0.5 * newState.operatingEnvironment.airDensity.value * Math.pow(newState.operatingEnvironment.stallSpeed.value, 2) * wingArea);
//         const designLiftCoefficient = newState.mass.totalMass.value * newState.operatingEnvironment.acceleration.value / (0.5 * newState.operatingEnvironment.airDensity.value * Math.pow(newState.operatingEnvironment.cruiseSpeed.value, 2) * wingArea).toFixed(6);
//         const inducedDragCoefficient = newState.general.k.value * Math.pow(newState.general.designLiftCoefficient.value, 2)
//         const totalDragCoefficient = newState.drag.wingZeroLiftDragCoefficient.value + newState.drag.fuselageDragCoefficient.value + inducedDragCoefficient;
//         const drag = (0.5 * newState.operatingEnvironment.airDensity.value * Math.pow(newState.operatingEnvironment.cruiseSpeed.value, 2) * wingArea * (totalDragCoefficient) / newState.operatingEnvironment.acceleration.value)
//         const liftToDragRatio = designLiftCoefficient / inducedDragCoefficient;
//         const motorMaxPower = newState.mass.totalMass.value * newState.motorAndBattery.powerToWeightRatio.value;
//         const motorPowerCruise = newState.general.drag.value * newState.operatingEnvironment.acceleration.value * newState.operatingEnvironment.cruiseSpeed.value;
//         console.log(newState.general.drag.value,newState.operatingEnvironment.acceleration.value,newState.operatingEnvironment.cruiseSpeed.value,'power')
//         const motorCurrentCruise = (motorPowerCruise / newState.motorAndBattery.nominalVoltage.value) / (newState.motorAndBattery.propullisiveEfficiency.value / 100);
//         const flightTime = (newState.missionRequirement.range.value * 1000 / newState.operatingEnvironment.cruiseSpeed.value) / (3600);
//         const rangeBatteryCapacity = (flightTime * motorCurrentCruise / Math.pow(10, -3)) / (newState.motorAndBattery.maximumDischarge.value / 100);
//         const rangeCruiseSpeed = newState.missionRequirement.flightTime.value * 60 * 60 * newState.operatingEnvironment.cruiseSpeed.value / 1000;
//         const flightTimeBatteryCapacity = ( newState.missionRequirement.flightTime.value *newState.motorAndBattery.currentCruise.value * 1000) / (newState.motorAndBattery.maximumDischarge.value / 100);
//         const capacityOfEachCell = newState.motorAndBattery.batteryCapacityParallel.value / newState.motorAndBattery.parallelCells.value;
//         const cRating = newState.motorAndBattery.maxContinousCurrent.value / (capacityOfEachCell / 1000);


//         newState.calculatedWing.wingArea.value = wingArea
//         newState.calculatedWing.rootChord.value = wingRootChord;
//         newState.calculatedWing.tipChord.value = wingTipChord;
//         newState.calculatedWing.meanAerodynamicChord.value = meanAerodynamicChord;
//         newState.calculatedHorizontalTail.sht.value = horizontalSHT;
//         newState.calculatedHorizontalTail.rootChord.value = horizontalRootChord;
//         newState.calculatedHorizontalTail.tipChord.value = horizontalTipChord;
//         newState.calculatedVerticalTail.svt.value = verticalSVT;
//         newState.calculatedVerticalTail.rootChord.value = verticalRootChord;
//         newState.calculatedVerticalTail.tipChord.value = verticalTipChord;
//         newState.general.massFraction.value = massFraction;
//         newState.general.ostwaldEfficiency.value = ostwaldEfficiency;
//         newState.general.k.value = k;
//         newState.general.minDragAirspeed.value = minDragAirspeed;
//         newState.general.minPowerAirspeed.value = minPowerAirspeed
//         newState.general.maxLiftCoefficient.value = maxLiftCoefficient
//         newState.general.designLiftCoefficient.value = designLiftCoefficient
//         newState.general.inducedDragCoefficient.value = inducedDragCoefficient
//         newState.general.totalDragCoefficient.value = totalDragCoefficient
//         newState.general.drag.value = drag
//         newState.general.liftToDragRatio.value = liftToDragRatio
//         newState.motorAndBattery.maxPower.value = motorMaxPower
//         newState.motorAndBattery.powerCruise.value = motorPowerCruise
//         newState.motorAndBattery.currentCruise.value = motorCurrentCruise
//         newState.motorAndBattery.FlightTime.value = flightTime
//         newState.motorAndBattery.rangeBatteryCapacity.value=flightTimeBatteryCapacity
//         newState.motorAndBattery.rangeBatteryCapacity.value = rangeBatteryCapacity
//         newState.motorAndBattery.rangeCruiseSpeed.value = rangeCruiseSpeed
//         newState.motorAndBattery.capacityOfEachCell.value = capacityOfEachCell
//         newState.motorAndBattery.cRating.value = cRating;

     newState.calculatedWing.wingArea.value=wingAreaCalc(newState);
         newState.calculatedWing.rootChord.value=calculatedWingRootChord(newState);
         newState.calculatedWing.tipChord.value=calculatedWingTipChord(newState);
          newState.calculatedWing.meanAerodynamicChord.value=meanAerodynamicChord(newState);
         newState.calculatedHorizontalTail.sht.value=calculatedHorizontalTailSht(newState);
          newState.calculatedHorizontalTail.rootChord.value=calculatedHorizontalTailRootChord(newState);
          newState.calculatedHorizontalTail.tipChord.value=calculatedHorizontalTailTipChord(newState)
        // This may have a problem  console.log(newState.calculatedVerticalTail.svt.value=newState.calculatedWing.wingArea.value*newState.wing.span.value*newState.verticalTail.cvt.value/newState.verticalTail.lvt.value);
        newState.calculatedVerticalTail.svt.value=calculatedVerticalTailSvt(newState)
          newState.calculatedVerticalTail.rootChord.value=calculatedVerticalTailRootChord(newState)
          newState.calculatedVerticalTail.tipChord.value=calculatedVerticalTailTipChord(newState)
        //  This may have a problem console.log(newState.general.massFraction.value=(newState.missionRequirement.payload.value+newState.mass.batteryMass.value)/newState.mass.totalMass.value*100,'massfra');
        newState.general.massFraction.value=massFraction(newState)
          newState.general.ostwaldEfficiency.value=ostwaldEfficiency(newState)
          newState.general.k.value=k(newState)
          newState.general.minDragAirspeed.value=minDragAirspeed(newState)
        //   console.log(newState.mass.totalMass.value,newState.operatingEnvironment.acceleration.value,newState.operatingEnvironment.airDensity.value,newState.calculatedWing.wingArea.value,newState.general.k.value,newState.drag.fuselageDragCoefficient.value,"mindrag")
          newState.general.minPowerAirspeed.value=minPowerAirspeed(newState)
          newState.general.maxLiftCoefficient.value=maxLiftCoefficient(newState)
          newState.general.designLiftCoefficient.value=designLiftCoefficient(newState)
          newState.general.inducedDragCoefficient.value=inducedDragCoefficient(newState)
          newState.general.totalDragCoefficient.value=totalDragCoefficient(newState)
        //   newState.general.drag.value=drag(newState)
        newState.general.drag.value=totalDrag(newState)
          newState.general.liftToDragRatio.value=liftToDragRatio(newState)
          newState.motorAndBattery.maxPower.value=maxPower(newState)
          newState.motorAndBattery.powerCruise.value=powerCruise(newState)
          newState.motorAndBattery.currentCruise.value=currentCruise(newState)
          newState.motorAndBattery.FlightTime.value=flightTime(newState)
          newState.motorAndBattery.rangeBatteryCapacity.value=rangeBatteryCapacity(newState)
          newState.motorAndBattery.rangeCruiseSpeed.value=rangeCruiseSpeed(newState)
          newState.motorAndBattery.flightTimeBatteryCapacity.value=flightTimeBatteryCapacity(newState)
          newState.motorAndBattery.capacityOfEachCell.value=capacityOfEachCell(newState)
          newState.motorAndBattery.cRating.value=cRating(newState)



        setState(newState)
    }
    let labels=['0','5','10','15','20','25','30','35','40']
    let velocity=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
    // let velocity=[0,5,10,15,20,25,30,35]
   
    let parasiticDrag=parasiticDragCalc(state)

    let {cl, drag} = dragClCalc(state, velocity, parasiticDrag)
   

    // localStorage.setItem('newState',JSON.stringify(Sizing));
    let sizingArray=objToArray(state)
console.log(sizingArray,'PropsData')
 
    console.log("mainarray",JSON.stringify(sizingArray))
    return (
        <>
            <Header header='Sizing Study' data-test="headerComp" />
            <Grid container>
                <div >
                    <Grid container>
                        {sizingArray ? (
                            sizingArray.map((parent, key) => {
                                console.log("container",JSON.stringify(parent), key,`${parent.title}TypoComp`);
                                return (

                                    <Grid className='eachItem' key={key} items item={true} sm={12} md={6} style={{ margin: '20px 0' }} >
                                        <Paper elevation={4} className="paper" style={{ padding: '20px 30px', marginLeft: ' 20px', marginRight: '20px' }}>
                                            <div style={{ marginTop: '0px' }}>
                                                <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }} data-test={`${parent.title}TypoComp`}>{parent.title}</Typography>
                                                <div style={{ flexGrow: 1 }}>
                                                    <Grid item={true} sm={12}>

                                                        {parent.data.map((child, index) => {
                                                            return (
                                                                <InputUnit  data-test={`${child.data.name}InputComp`} key={child.data.name} id={child.data.name} data={child.data} onChange={(e) => onChangeHandler(e, child.data, child.data.parent)} />
                                                            )
                                                        })}
                                                    </Grid>
                                                </div>
                                            </div>
                                        </Paper>
                                    </Grid>


                                )
                            })
                        ) : ''}
                    </Grid>
                    <Button text='Prev' submitHandler={(e) => submitHandler(e)} data-test="submitComp"/>
                    <Chart cl={cl} drag={drag} velocity={velocity} labels={labels} data-test="chartComp" />
                </div>
            </Grid>
        </>
    )
}
export default SizingInputContainer