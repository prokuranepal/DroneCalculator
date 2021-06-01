import React,{useState,useEffect} from 'react';
import Header from './Header'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import InputUnit from './InputUnit';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

import {Sizing,title} from '../data/data'

const SizingInputContainer=()=>{

    //Reducer data's

    const sizingData=useSelector(state=>state.sizingReducer)

    //Dispatch

    const dispatch=useDispatch()

    // const sizingGetLocalStorage=()=>{
    //    return JSON.parse(localStorage.getItem('sizing'));

    // }
    // console.log(sizingGetLocalStorage,'retrive')

   
const[sizing,setSizing]=useState(sizingData)


const sizingChangeHandler=(e,data)=>{
dispatch({type:'sizing',data:{...data,value:e.target.value}})
    const updatedSizing={...sizing,[data.parent]:{...sizing[data.parent],[data.name]:{...sizing[data.parent][data.name],value:+e.target.value}}}
    updatedSizing.calculatedWing.wingArea.value=Math.pow(updatedSizing.wing.span.value,2)/updatedSizing.wing.aspectRatio.value;
    updatedSizing.calculatedWing.rootChord.value=2*updatedSizing.calculatedWing.wingArea.value/(updatedSizing.wing.span.value*(1+updatedSizing.wing.tapperRatio.value));
    updatedSizing.calculatedWing.tipChord.value=(updatedSizing.calculatedWing.rootChord.value*updatedSizing.wing.tapperRatio.value);
     updatedSizing.calculatedWing.meanAerodynamicChord.value=(1+updatedSizing.wing.tapperRatio.value+Math.pow(updatedSizing.wing.tapperRatio.value,2))/(1+updatedSizing.wing.tapperRatio.value)*2/3*updatedSizing.calculatedWing.rootChord.value;
     updatedSizing.calculatedHorizontalTail.sht.value=updatedSizing.horizontalTail.cht.value*updatedSizing.calculatedWing.wingArea.value*updatedSizing.calculatedWing.meanAerodynamicChord.value/updatedSizing.horizontalTail.lht.value;
     updatedSizing.calculatedHorizontalTail.rootChord.value=(2*updatedSizing.calculatedHorizontalTail.sht.value/updatedSizing.horizontalTail.span.value)/(1+updatedSizing.horizontalTail.tapperRatio.value);
     updatedSizing.calculatedHorizontalTail.tipChord.value=updatedSizing.calculatedHorizontalTail.rootChord.value*updatedSizing.horizontalTail.tapperRatio.value;
     updatedSizing.calculatedVerticalTail.svt.value=updatedSizing.calculatedWing.wingArea.value*updatedSizing.wing.span.value*updatedSizing.verticalTail.cvt.value/updatedSizing.verticalTail.lvt.value;
     updatedSizing.calculatedVerticalTail.rootChord.value=(updatedSizing.calculatedVerticalTail.svt.value*2/updatedSizing.verticalTail.span.value)/(1+updatedSizing.verticalTail.tapperRatio.value);
     updatedSizing.calculatedVerticalTail.tipChord.value=updatedSizing.calculatedVerticalTail.rootChord.value*updatedSizing.verticalTail.tapperRatio.value;
     updatedSizing.general.massFraction.value=(updatedSizing.missionRequirement.payload.value+updatedSizing.mass.batteryMass.value)/updatedSizing.mass.totalMass.value*100;
     updatedSizing.general.ostwaldEfficiency.value=1/(1+updatedSizing.wing.inducedDragFactor.value)
     updatedSizing.general.k.value=1/(3.14*updatedSizing.general.ostwaldEfficiency.value*updatedSizing.wing.aspectRatio.value)
     updatedSizing.general.minDragAirspeed.value=Math.pow((2*updatedSizing.mass.totalMass.value*updatedSizing.operatingEnvironment.acceleration.value/(updatedSizing.operatingEnvironment.airDensity.value*updatedSizing.calculatedWing.wingArea.value)),0.5)*Math.pow((updatedSizing.general.k.value/(updatedSizing.drag.wingZeroLiftDragCoefficient.value+updatedSizing.drag.fuselageDragCoefficient.value)),0.25);
     updatedSizing.general.minPowerAirspeed.value=Math.pow(1/(3),0.25)*updatedSizing.general.minDragAirspeed.value;
     updatedSizing.general.maxLiftCoefficient.value=updatedSizing.mass.totalMass.value*updatedSizing.operatingEnvironment.acceleration.value/(0.5*updatedSizing.operatingEnvironment.airDensity.value*Math.pow(updatedSizing.operatingEnvironment.stallSpeed.value,2)*updatedSizing.calculatedWing.wingArea.value);
     updatedSizing.general.designLiftCoefficient.value=updatedSizing.mass.totalMass.value*updatedSizing.operatingEnvironment.acceleration.value/(0.5*updatedSizing.operatingEnvironment.airDensity.value*Math.pow(updatedSizing.operatingEnvironment.cruiseSpeed.value,2)*updatedSizing.calculatedWing.wingArea.value);
     updatedSizing.general.inducedDragCoefficient.value=updatedSizing.general.k.value*Math.pow(updatedSizing.general.designLiftCoefficient.value,2)
     updatedSizing.general.totalDragCoefficient.value=updatedSizing.drag.wingZeroLiftDragCoefficient.value+updatedSizing.drag.fuselageDragCoefficient.value+updatedSizing.general.inducedDragCoefficient.value;
     updatedSizing.general.drag.value=(0.5*updatedSizing.operatingEnvironment.airDensity.value*Math.pow(updatedSizing.operatingEnvironment.cruiseSpeed.value,2)*updatedSizing.calculatedWing.wingArea.value*(updatedSizing.general.totalDragCoefficient.value)/updatedSizing.operatingEnvironment.acceleration.value)
     updatedSizing.general.liftToDragRatio.value=updatedSizing.general.designLiftCoefficient.value/updatedSizing.general.inducedDragCoefficient.value;
     updatedSizing.motorAndBattery.maxPower.value=updatedSizing.mass.totalMass.value*updatedSizing.motorAndBattery.powerToWeightRatio.value;
     updatedSizing.motorAndBattery.powerCruise.value=updatedSizing.general.drag.value*updatedSizing.operatingEnvironment.acceleration.value*updatedSizing.operatingEnvironment.cruiseSpeed.value;
     updatedSizing.motorAndBattery.currentCruise.value=(updatedSizing.motorAndBattery.powerCruise.value/updatedSizing.motorAndBattery.nominalVoltage.value)/(updatedSizing.motorAndBattery.propullisiveEfficiency.value/100);
     updatedSizing.motorAndBattery.FlightTime.value=(updatedSizing.missionRequirement.range.value*1000/updatedSizing.operatingEnvironment.cruiseSpeed.value)/(3600);
     updatedSizing.motorAndBattery.rangeBatteryCapacity.value=(updatedSizing.motorAndBattery.FlightTime.value * updatedSizing.motorAndBattery.currentCruise.value/Math.pow(10,-3))/(updatedSizing.motorAndBattery.maximumDischarge.value/100);
     updatedSizing.motorAndBattery.rangeCruiseSpeed.value=updatedSizing.missionRequirement.flightTime.value*60*60*updatedSizing.operatingEnvironment.cruiseSpeed.value/1000;
     updatedSizing.motorAndBattery.flightTimeBatteryCapacity.value=(updatedSizing.missionRequirement.flightTime.value * updatedSizing.motorAndBattery.currentCruise.value/Math.pow(10,-3))/(updatedSizing.motorAndBattery.maximumDischarge.value/100);
     updatedSizing.motorAndBattery.capacityOfEachCell.value=updatedSizing.motorAndBattery.batteryCapacityParallel.value/updatedSizing.motorAndBattery.parallelCells.value;
     updatedSizing.motorAndBattery.cRating.value=updatedSizing.motorAndBattery.maxContinousCurrent.value/(updatedSizing.motorAndBattery.capacityOfEachCell.value/1000);
    setSizing(updatedSizing)

    
    // let storageSizing=localStorage.setItem('sizing',JSON.stringify(Sizing));
    // console.log(storageSizing,"store")

    // let retrivedSizingg='';
    // function retrivedSizing(){
    //    return  retrivedSizingg=JSON.parse(localStorage.getItem('sizing'));
    // }

    // const updatedSizing={...sizing}
    // const parentObj={...updatedSizing[data.parent]}
    // console.log(parentObj,"parentObj")
    // const childObj={...parentObj[data.name],value:e.target.value}
    // console.log(childObj,"childObj")
    // // childObj={...childObj,value:e.target.value}
    // parentObj[data.name]=childObj
    // updatedSizing[data.parent]=parentObj
    // console.log(updatedSizing,"updatedSizing")
    // console.log(sizing,"originalSizing")
    // setSizing(updatedSizing)

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
    </div>
</Grid>
        </>
    )
}
export default SizingInputContainer