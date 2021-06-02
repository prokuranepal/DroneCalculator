
import React, { useState,useEffect } from 'react'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import InputUnit from './InputUnit';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import '../App.css'
import { Specs,Environment,Diameter,Pitch } from '../data/data';
import Header from './Header'
import { environmentReducer } from './store/reducers/Environment';


const SpecsInputContainer=()=> {

    //Reducer Data's

    const specs=useSelector(state=>state.specsReducer);
    const environment=useSelector(state=>state.environmentReducer)
    const diameter=useSelector(state=>state.diameterReducer)
    const pitch=useSelector(state=>state.pitchReducer)

    //States

    // const[specs,setSpecs]=useState(specsData)
    
    // const[environment,setEnvironment]=useState(environmentData)
    // const[diameter,setDiameter]=useState(diameterData)
    // const[pitch,setPitch]=useState(pitchData)

    const dispatch=useDispatch()
    console.log("testspecs", specs)
    console.log("testdiameter", diameter)

   const specsChangeHandler = (e, data) => {
        // console.log(e.target.value, data.id);
        dispatch({type:'specs',data:{...data,value:+e.target.value} })

        specs.input.nominalVoltage.value=specs.input.cellsInSeries.value*3.7

        specs.input.maxRPM.value=(specs.input.kvRating.value*specs.input.nominalVoltage.value)
        specs.input.maxWorkingRPM.value=(specs.input.estimatedMaxPercent.value)/100*specs.input.maxRPM.value



    }
  
    const environmentChangeHandler = (e, data) => {
        // console.log(e.target.value, data.id);
        dispatch({type:'environment',data:{...data,value:+e.target.value} })

       
    }

    const diameterChangeHandler = (e, data) => {
        // console.log(e.target.value, data.id);
        dispatch({type:'diameter',data:{...data,value:+e.target.value} })

        
           //Diameter1 value calculation start
         // let powerData=(specs.input.cp1.value*specs.input.density.value*Math.pow(specs.input.maxWorkingRPM.value/60,3))
         let diameter1Result=Math.pow((specs.input.maxPower.value/(diameter.input.cp1.value*environment.input.density.value* Math.pow((specs.input.maxWorkingRPM.value/60),3))),1/5)*1000/25.4
         let diameter2Result=Math.pow((specs.input.maxPower.value/(diameter.input.cp2.value*environment.input.density.value* Math.pow((specs.input.maxWorkingRPM.value/60),3))),1/5)*1000/25.4
      

        //Update is happening one step slow

         diameter.input.diameter1.value=diameter1Result
         diameter.input.diameter2.value=diameter2Result
 

        //update the field item with updated value to specs.input
        
        //set the new state



    }
    const pitchChangeHandler=(e,data)=>{
         // console.log(e.target.value, data.id);
         dispatch({type:'pitch',data:{...data,value:+e.target.value} })

        //copy the input object from the state
       

pitch.input.pitch1.value=(pitch.input.airspeed1.value*1.8)/(specs.input.maxWorkingRPM.value/60)*1000/25.4
pitch.input.pitch2.value=(pitch.input.airspeed2.value*1.8)/(specs.input.maxWorkingRPM.value/60)*1000/25.4


    }


    
        let specsInputData = []
        for (let key in specs.input) {
            specsInputData.push({ id: key, data: specs.input[key] })
        }
        let environmentInputData = []
        for (let key in environment.input) {
            environmentInputData.push({ id: key, data: environment.input[key] })
        }
        let diameterInputData = []
        for (let key in diameter.input) {
            diameterInputData.push({ id: key, data: diameter.input[key] })
        }
        let pitchInputData=[]
        for(let key in pitch.input){
            pitchInputData.push({id:key,data:pitch.input[key]})
        }
        console.log(pitchInputData,"arr1")
        useEffect(
            ()=>{
                
                const updatedDiameterInput = { ...diameter.input }
                const updatedEnvironmentInput={...environment.input}
                const updatedSpecsInput={...specs.input}

                let diameter1Result=Math.pow((updatedSpecsInput.maxPower.value/(updatedDiameterInput.cp1.value*updatedEnvironmentInput.density.value* Math.pow((updatedSpecsInput.maxWorkingRPM.value/60),3))),1/5)*1000/25.4
                
console.log(updatedEnvironmentInput.density.value,"densitycheckeffect")
console.log(updatedSpecsInput.maxPower.value,"specscheckeffect")
console.log(updatedDiameterInput.cp1.value,"diametercheckeffect")
                let diameter2Result=Math.pow((updatedSpecsInput.maxPower.value/(updatedDiameterInput.cp2.value*updatedEnvironmentInput.density.value* Math.pow((updatedSpecsInput.maxWorkingRPM.value/60),3))),1/5)*1000/25.4
                    updatedDiameterInput.diameter1.value=diameter1Result
                    updatedDiameterInput.diameter2.value=diameter2Result

                    
                    console.log("updated diameter")
            
                    },[specs,environment])

useEffect(()=>{
    
    const updatedSpecsInput={...specs.input}
    const updatedPitchInput={...pitch.input}
    updatedPitchInput.pitch1.value=(updatedPitchInput.airspeed1.value*1.8)/(updatedSpecsInput.maxWorkingRPM.value/60)*1000/25.4
    updatedPitchInput.pitch2.value=(updatedPitchInput.airspeed2.value*1.8)/(updatedSpecsInput.maxWorkingRPM.value/60)*1000/25.4


    
},[specs,pitch])

        console.log('specsData',specsInputData,'environmentData:',environmentInputData,'diameterData', diameterInputData)
        // const classes = useStyles();
        console.log(specs,"state")
        return (
            <>
<Header header='Motor and Propeller Study'/>
      <Grid container>
         <div >
             <Grid container>

                <Grid  items xs={12} md={6} style={{margin:'10px 0'}} >
                     <Paper elevation={4} className="paper" style={{ padding: '20px 30px',marginLeft:' 20px',marginRight:'20px' }}>
                         <div >
                            <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }} >Motor Specs</Typography>
                                 <div style={{ flexGrow: 1 }}>
                                {specsInputData.map(eachInputData => {
                                    return (
                                        <Grid key={eachInputData.id} item xs={12}>
                                            <InputUnit key={eachInputData.id} id={eachInputData.id} data={eachInputData.data} onChange={(e) => specsChangeHandler(e, eachInputData)} />
                                        </Grid>
                                    )
                                })}
                                    </div>         
                                   </div>
                              </Paper>
                            </Grid>
                                            
                     <Grid items xs={12} md={6} spacing={0} style={{margin:'10px 0'}}>
                         <Paper elevation={4} className="paper" style={{ padding: '20px 30px',marginLeft:' 20px',marginRight:'20px' }}>
                            <div >
                                <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }} >Propeller diameter selection</Typography>
                                  <div style={{ flexGrow: 1 }}>
                                    {diameterInputData.map(eachInputData => {
                                    return (
                                        <Grid key={eachInputData.id} item xs={12}>
                                            <InputUnit key={eachInputData.id} id={eachInputData.id} data={eachInputData.data} onChange={(e) => diameterChangeHandler(e, eachInputData)} />
                                        </Grid>
                                    )
                                })}
                                 </div>
                              </div>
                          </Paper>
                     </Grid>

                     <Grid items xs={12} md={6} spacing={0} style={{margin:'10px 0'}} >
                          <Paper elevation={4} className="paper" style={{ padding: '20px 30px',marginLeft:'20px',marginRight:'20px' }}>
                             <div >
                               <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }} >Environment</Typography>
                                  <div style={{ flexGrow: 1 }}>                                     
                                      {environmentInputData.map(eachInputData => {
                                    return (
                                        <Grid key={eachInputData.id} item xs={12}>
                                            <InputUnit key={eachInputData.id} id={eachInputData.id} data={eachInputData.data} onChange={(e) => environmentChangeHandler(e, eachInputData)} />
                                        </Grid>
                                    )
                                })}
                                </div>           
                            </div>
                       </Paper>
                   </Grid>

                            
                     <Grid items xs={12} md={6} spacing={0}  className="propeller-pitch-selection" >
                       <Paper elevation={6} className="paper" style={{ padding: '20px 30px',marginLeft:'20px',marginRight:'20px' }} >
                          <div >
                             <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }} >Propeller Pitch selection</Typography>
                                <div style={{ flexGrow: 1 }}>
                                   {pitchInputData.map(eachInputData => {
                                    return (
                                        <Grid key={eachInputData.id} item xs={12}>
                                            <InputUnit key={eachInputData.id} id={eachInputData.id} data={eachInputData.data} onChange={(e) => pitchChangeHandler(e, eachInputData)} />
                                        </Grid>
                                    )
                                })}
                                </div>              
                              </div>
                          </Paper>
                     </Grid>
                 </Grid>
                 
            </div>
        </Grid>
        </>
        )
    }

export default SpecsInputContainer;