import React,{useState,useEffect} from 'react';
import Header from './Header'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import InputUnit from './InputUnit';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {Button} from '../Button'

import {Sizing,title} from '../data/data'
import Chart from './Chart';

const SizingInputContainer=(props)=>{

    //Reducer data's

    const sizing=useSelector(state=>state.sizingReducer)

    //Dispatch

    const dispatch=useDispatch()

    // const sizingGetLocalStorage=()=>{
    //    return JSON.parse(localStorage.getItem('sizing'));
    // }
    // console.log(sizingGetLocalStorage,'retrive')

   
const submitHandler=(e)=>{
    e.preventDefault()
    props.history.push('/')
}

const sizingChangeHandler=(e,data)=>{
dispatch({type:'sizing',data:{...data,value:e.target.value}})
    // const updatedSizing={...sizing,[data.parent]:{...sizing[data.parent],[data.name]:{...sizing[data.parent][data.name],value:+e.target.value}}}
// console.log(updatedSizing,"updatedSizing")
// sizing.calculatedWing.wingArea.value=parseFloat(Math.pow(sizing.wing.span.value,2)/sizing.wing.aspectRatio.value).toPrecision(4);
// sizing.calculatedWing.rootChord.value=parseFloat(2*sizing.calculatedWing.wingArea.value/(sizing.wing.span.value*(1+sizing.wing.tapperRatio.value))).toPrecision(4);


    sizing.calculatedWing.wingArea.value=Math.pow(sizing.wing.span.value,2)/sizing.wing.aspectRatio.value;
    sizing.calculatedWing.rootChord.value=2*sizing.calculatedWing.wingArea.value/(sizing.wing.span.value*(1+sizing.wing.tapperRatio.value));
    sizing.calculatedWing.tipChord.value=(sizing.calculatedWing.rootChord.value*sizing.wing.tapperRatio.value);
     sizing.calculatedWing.meanAerodynamicChord.value=(1+sizing.wing.tapperRatio.value+Math.pow(sizing.wing.tapperRatio.value,2))/(1+sizing.wing.tapperRatio.value)*2/3*sizing.calculatedWing.rootChord.value;
     sizing.calculatedHorizontalTail.sht.value=sizing.horizontalTail.cht.value*sizing.calculatedWing.wingArea.value*sizing.calculatedWing.meanAerodynamicChord.value/sizing.horizontalTail.lht.value;
     sizing.calculatedHorizontalTail.rootChord.value=(2*sizing.calculatedHorizontalTail.sht.value/sizing.horizontalTail.span.value)/(1+sizing.horizontalTail.tapperRatio.value);
     sizing.calculatedHorizontalTail.tipChord.value=sizing.calculatedHorizontalTail.rootChord.value*sizing.horizontalTail.tapperRatio.value;
     console.log(sizing.calculatedVerticalTail.svt.value=sizing.calculatedWing.wingArea.value*sizing.wing.span.value*sizing.verticalTail.cvt.value/sizing.verticalTail.lvt.value);
     sizing.calculatedVerticalTail.rootChord.value=(sizing.calculatedVerticalTail.svt.value*2/sizing.verticalTail.span.value)/(1+sizing.verticalTail.tapperRatio.value);
     sizing.calculatedVerticalTail.tipChord.value=sizing.calculatedVerticalTail.rootChord.value*sizing.verticalTail.tapperRatio.value;
     console.log(sizing.general.massFraction.value=(sizing.missionRequirement.payload.value+sizing.mass.batteryMass.value)/sizing.mass.totalMass.value*100,'massfra');
     sizing.general.ostwaldEfficiency.value=1/(1+sizing.wing.inducedDragFactor.value)
     sizing.general.k.value=1/(3.14*sizing.general.ostwaldEfficiency.value*sizing.wing.aspectRatio.value)
     sizing.general.minDragAirspeed.value=Math.pow((2*sizing.mass.totalMass.value*sizing.operatingEnvironment.acceleration.value/(sizing.operatingEnvironment.airDensity.value*sizing.calculatedWing.wingArea.value)),0.5)*Math.pow((sizing.general.k.value/(sizing.drag.wingZeroLiftDragCoefficient.value+sizing.drag.fuselageDragCoefficient.value)),0.25);
     sizing.general.minPowerAirspeed.value=Math.pow(1/(3),0.25)*sizing.general.minDragAirspeed.value;
     sizing.general.maxLiftCoefficient.value=sizing.mass.totalMass.value*sizing.operatingEnvironment.acceleration.value/(0.5*sizing.operatingEnvironment.airDensity.value*Math.pow(sizing.operatingEnvironment.stallSpeed.value,2)*sizing.calculatedWing.wingArea.value);
     sizing.general.designLiftCoefficient.value=sizing.mass.totalMass.value*sizing.operatingEnvironment.acceleration.value/(0.5*sizing.operatingEnvironment.airDensity.value*Math.pow(sizing.operatingEnvironment.cruiseSpeed.value,2)*sizing.calculatedWing.wingArea.value);
     sizing.general.inducedDragCoefficient.value=sizing.general.k.value*Math.pow(sizing.general.designLiftCoefficient.value,2)
     sizing.general.totalDragCoefficient.value=sizing.drag.wingZeroLiftDragCoefficient.value+sizing.drag.fuselageDragCoefficient.value+sizing.general.inducedDragCoefficient.value;
     sizing.general.drag.value=(0.5*sizing.operatingEnvironment.airDensity.value*Math.pow(sizing.operatingEnvironment.cruiseSpeed.value,2)*sizing.calculatedWing.wingArea.value*(sizing.general.totalDragCoefficient.value)/sizing.operatingEnvironment.acceleration.value)
     sizing.general.liftToDragRatio.value=sizing.general.designLiftCoefficient.value/sizing.general.inducedDragCoefficient.value;
     sizing.motorAndBattery.maxPower.value=sizing.mass.totalMass.value*sizing.motorAndBattery.powerToWeightRatio.value;
     sizing.motorAndBattery.powerCruise.value=sizing.general.drag.value*sizing.operatingEnvironment.acceleration.value*sizing.operatingEnvironment.cruiseSpeed.value;
     sizing.motorAndBattery.currentCruise.value=(sizing.motorAndBattery.powerCruise.value/sizing.motorAndBattery.nominalVoltage.value)/(sizing.motorAndBattery.propullisiveEfficiency.value/100);
     sizing.motorAndBattery.FlightTime.value=(sizing.missionRequirement.range.value*1000/sizing.operatingEnvironment.cruiseSpeed.value)/(3600);
     sizing.motorAndBattery.rangeBatteryCapacity.value=(sizing.motorAndBattery.FlightTime.value * sizing.motorAndBattery.currentCruise.value/Math.pow(10,-3))/(sizing.motorAndBattery.maximumDischarge.value/100);
     sizing.motorAndBattery.rangeCruiseSpeed.value=sizing.missionRequirement.flightTime.value*60*60*sizing.operatingEnvironment.cruiseSpeed.value/1000;
     sizing.motorAndBattery.flightTimeBatteryCapacity.value=(sizing.missionRequirement.flightTime.value * sizing.motorAndBattery.currentCruise.value/Math.pow(10,-3))/(sizing.motorAndBattery.maximumDischarge.value/100);
     sizing.motorAndBattery.capacityOfEachCell.value=sizing.motorAndBattery.batteryCapacityParallel.value/sizing.motorAndBattery.parallelCells.value;
     sizing.motorAndBattery.cRating.value=sizing.motorAndBattery.maxContinousCurrent.value/(sizing.motorAndBattery.capacityOfEachCell.value/1000);

   }

    // localStorage.setItem('sizing',JSON.stringify(Sizing));



let sizingArray=[]
for(let key in sizing){
    let innerArray=[]
    for (let key2 in sizing[key])
    {
        innerArray.push({data:sizing[key][key2]})
    }
    sizingArray.push({data:innerArray, title:title[key]})
}

console.log("mainarray", sizingArray)
    return(
        <>
        <Header header='Sizing Study'/>
      <Grid container>
         <div >
             <Grid container>
                 {sizingArray?(
      sizingArray.map((parent,key)=>{
    return(
        
        <Grid key={key} items xs={12} md={6} style={{margin:'20px 0'}} >
        <Paper elevation={4} className="paper" style={{ padding: '20px 30px',marginLeft:' 20px',marginRight:'10px' }}>
            <div style={{marginTop: '0px'}}>
               <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }}>{parent.title}</Typography>
                    <div style={{ flexGrow: 1 }}>        
                           <Grid item xs={12}>

                 {parent.data.map((child,index)=>{
                     return(
                        <InputUnit key={child.data.name} id={child.data.name} data={child.data} onChange={(e)=>sizingChangeHandler(e,child.data)} />
                     )
                 })}  
                  </Grid>
                   </div>         
                  </div>
             </Paper>
           </Grid>   
           
           
    )
})
                 ):''}
       </Grid> 
      <Button text='Prev' submitHandler={(e)=>submitHandler(e)}/>
       <Chart/>          
    </div>
</Grid>
        </>
    )
}
export default SizingInputContainer