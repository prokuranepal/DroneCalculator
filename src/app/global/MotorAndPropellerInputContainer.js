
import React, { useState, useEffect } from 'react'
import { Paper, Typography, TextField, Container, Grid, BottomNavigation } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import InputUnit from '../components/inputUnit/InputUnit';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../../app/styles/App.css'
import { motorProp } from '../../data/data';
import { Button } from '../components/Button/Button'
import Header from '../components/Header/Header'
// import { environmentReducer } from '../store/reducers/Environment';
import * as actions from '../store/actions';

const SpecsInputContainer = (props) => {

    //Reducer Data's

    // const specsR = useSelector(state => state.specsReducer);
    // const environmentR = useSelector(state => state.environmentReducer)
    // const diameterR = useSelector(state => state.diameterReducer)
    // const pitchR = useSelector(state => state.pitchReducer)

    // const [specs, setSpecs] = useState(motorProp.specs);
    // const [environment, setEnvironment] = useState(motorProp.environment);
    // const [diameter, setDiameter] = useState(motorProp.diameter);
    // const [pitch, setPitch] = useState(motorProp.pitch);
    const motorPropsR = useSelector(({ reducer }) => reducer.motorPropsR)

    const [state, setState] = useState(motorProp);

    
    useEffect(() => {
        if (motorPropsR) setState(motorPropsR);
        console.log(motorPropsR, "reducerState")
        // if (environmentR) setEnvironment(environmentR);
        // if (diameterR) setDiameter(diameterR);
        // if (pitchR) setPitch(pitchR);
    }, [])

    // useEffect(() => {
    //     console.log('motor state',state);
    // },[state])
    // console.log(state, 'reducer')
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(actions.updateMotorPropValues(state))
        props.history.push('/sizing')
    }


    //States

    // const[specs,setSpecs]=useState(specsData)
    // const[environment,setEnvironment]=useState(environmentData)
    // const[diameter,setDiameter]=useState(diameterData)
    // const[pitch,setPitch]=useState(pitchData)

    const dispatch = useDispatch()



    const updateState = (e, data, s, type) => {

        // console.log(s, type, "State")
        // console.log(e.target.value, "value")
        const newState = {
            ...s,
            [type]: {
                ...s[type],
                input: {
                    ...s[type].input,
                    [data.id]: {
                        ...s[type].input[data.id],
                        value: e.target.value
                    }
                }
            }
        }
        // console.log(newState,'newState')
        // const newState = {
        //     ...stateValue,
        //     input: {
        //         ...stateValue.input,
        //         [data.id]: {
        //             ...stateValue.input[data.id],
        //             value: e.target.value
        //         }
        //     }3.09
        // }
        return newState;
    }

    const onChangeHandler = (e, data, type) => {
        let newState = {...state};
        // console.log(e.target.value, data, type)
        newState = updateState(e, data, newState, type);
        // console.log(type, "TYPE")
        const nominalVoltage = newState.specs.input.cellsInSeries.value * 3.7;
        const maxRPM = newState.specs.input.kvRating.value * nominalVoltage
        const maxWorkingRPM = (newState.specs.input.estimatedMaxPercent.value / 100) * maxRPM

        const diameter1 = Math.pow((newState.specs.input.maxPower.value / (newState.diameter.input.cp1.value * newState.environment.input.density.value * Math.pow((maxWorkingRPM / 60), 3))), 1 / 5) * 1000 / 25.4;
        const diameter2 = Math.pow((newState.specs.input.maxPower.value / (newState.diameter.input.cp2.value * newState.environment.input.density.value * Math.pow((maxWorkingRPM / 60), 3))), 1 / 5) * 1000 / 25.4;
        const pitch1 = (newState.pitch.input.airspeed1.value * 1.8) / (maxWorkingRPM / 60) * 1000 / 25.4;
        const pitch2 = (newState.pitch.input.airspeed2.value * 1.8) / (maxWorkingRPM / 60) * 1000 / 25.4;

        newState.specs.input.nominalVoltage.value = nominalVoltage
        newState.diameter.input.diameter1.value = diameter1;
        newState.diameter.input.diameter2.value = diameter2;
        newState.pitch.input.pitch1.value = pitch1;
        newState.pitch.input.pitch2.value = pitch2;
        newState.specs.input.maxWorkingRPM.value = maxWorkingRPM;
        newState.specs.input.maxRPM.value = maxRPM;

        // newState = {
        //     ...newState,[type]:{...newState[type],...newState[type].input,
        //         nominalVoltage: {...newState[type].input.nominalVoltage, value: nominalVoltage},
        //         maxRPM: {...newState[type].input.maxRPM, value: maxRPM},
        //         maxWorkingRPM: {...newState[type].input.maxWorkingRPM, value: maxWorkingRPM},

        //     }}
        // console.log(newState, 'newState')

        //     input: {

        // }

        // let powerData=(specs.input.cp1.value*specs.input.density.value*Math.pow(specs.input.maxWorkingRPM.value/60,3))
        //     console.log(state.specs.input.maxPower.value,"maxpower")
        // let diameter1 = Math.pow((state.specs.input.maxPower.value / (newState.input.cp1.value * state.environment.input.density.value * Math.pow((state.specs.input.maxWorkingRPM.value / 60), 3))), 1 / 5) * 1000 / 25.4;
        // let diameter2 = Math.pow((state.specs.input.maxPower.value / (newState.input.cp2.value * state.environment.input.density.value * Math.pow((state.specs.input.maxWorkingRPM.value / 60), 3))), 1 / 5) * 1000 / 25.4;
        //     console.log(diameter1,"maxpowerdiameter")
        //     newState = {
        //         ...newState,
        //         input: {
        //             ...newState.input,
        //             diameter1: {...newState.input.diameter1, value:  diameter1},
        //             diameter2: {...newState.input.diameter2, value:  diameter2},

        //         }
        //     }
        //  else if (type === 'pitch') {
        //     const pitch1 = (newState.input.airspeed1.value * 1.8) / (state.specs.input.maxWorkingRPM.value / 60) * 1000 / 25.4;
        // const pitch2 = (newState.input.airspeed2.value * 1.8) / (state.specs.input.maxWorkingRPM.value / 60) * 1000 / 25.4;
        //     newState = {
        //         ...newState,
        //         input: {
        //             ...newState.input,
        //             pitch1: {...newState.input.pitch1, value: pitch1},
        //             pitch2: {...newState.input.pitch2, value: pitch2},

        //         }
        //     }
        // }
        // console.log(newState);
        setState(newState);
    }

    // const specsChangeHandler = (e, data) => {
    // specs.input.nominalVoltage.value=specs.input.cellsInSeries.value*3.7

    // specs.input.maxRPM.value=(specs.input.kvRating.value*specs.input.nominalVoltage.value)
    // specs.input.maxWorkingRPM.value=(specs.input.estimatedMaxPercent.value)/100*specs.input.maxRPM.value
    // let newSpecs = 


    // }

    // const environmentChangeHandler = (e, data) => {
    // console.log(e.target.value, data.id);
    //     dispatch({ type: 'environment', data: { ...data, value: +e.target.value } })


    // }

    // const diameterChangeHandler = (e, data) => {
    // console.log(e.target.value, data.id);
    // dispatch({ type: 'diameter', data: { ...data, value: +e.target.value } })


    //Diameter1 value calculation start
    // let powerData=(specs.input.cp1.value*specs.input.density.value*Math.pow(specs.input.maxWorkingRPM.value/60,3))
    // let diameter1Result = Math.pow((specs.input.maxPower.value / (diameter.input.cp1.value * environment.input.density.value * Math.pow((specs.input.maxWorkingRPM.value / 60), 3))), 1 / 5) * 1000 / 25.4
    // let diameter2Result = Math.pow((specs.input.maxPower.value / (diameter.input.cp2.value * environment.input.density.value * Math.pow((specs.input.maxWorkingRPM.value / 60), 3))), 1 / 5) * 1000 / 25.4


    //Update is happening one step slow

    // diameter.input.diameter1.value = diameter1Result
    // diameter.input.diameter2.value = diameter2Result


    //update the field item with updated value to specs.input

    //set the new state



    // }
    // const pitchChangeHandler = (e, data) => {
    // console.log(e.target.value, data.id);
    // dispatch({ type: 'pitch', data: { ...data, value: +e.target.value } })

    //copy the input object from the state


    //     pitch.input.pitch1.value = (pitch.input.airspeed1.value * 1.8) / (specs.input.maxWorkingRPM.value / 60) * 1000 / 25.4
    //     pitch.input.pitch2.value = (pitch.input.airspeed2.value * 1.8) / (specs.input.maxWorkingRPM.value / 60) * 1000 / 25.4


    // }

    let motorPropData = [];
    for (let key in state) {
        let data = []
        for (let i in state[key].input) {
            data.push({ id: i, data: state[key].input[i] })
        }
        motorPropData.push({ id: key, style: state[key].style, data: data })
    }
    // console.log(motorPropData)

    // let specsInputData = []
    // for (let key in specs.input) {
    //     specsInputData.push({ id: key, data: specs.input[key] })
    // }
    // let environmentInputData = []
    // for (let key in environment.input) {
    //     environmentInputData.push({ id: key, data: environment.input[key] })
    // }
    // let diameterInputData = []
    // for (let key in diameter.input) {
    //     diameterInputData.push({ id: key, data: diameter.input[key] })
    // }
    // let pitchInputData = []
    // for (let key in pitch.input) {
    //     pitchInputData.push({ id: key, data: pitch.input[key] })
    // }
    // console.log(pitchInputData, "arr1")
    // useEffect(
    //     () => {
    //         const updatedDiameterInput = { ...diameter.input }
    //         const updatedEnvironmentInput = { ...environment.input }
    //         const updatedSpecsInput = { ...specs.input }

    //         let diameter1Result = Math.pow((updatedSpecsInput.maxPower.value / (updatedDiameterInput.cp1.value * updatedEnvironmentInput.density.value * Math.pow((updatedSpecsInput.maxWorkingRPM.value / 60), 3))), 1 / 5) * 1000 / 25.4

    //         console.log(updatedEnvironmentInput.density.value, "densitycheckeffect")
    //         console.log(updatedSpecsInput.maxPower.value, "specscheckeffect")
    //         console.log(updatedDiameterInput.cp1.value, "diametercheckeffect")
    //         let diameter2Result = Math.pow((updatedSpecsInput.maxPower.value / (updatedDiameterInput.cp2.value * updatedEnvironmentInput.density.value * Math.pow((updatedSpecsInput.maxWorkingRPM.value / 60), 3))), 1 / 5) * 1000 / 25.4
    //         updatedDiameterInput.diameter1.value = diameter1Result
    //         updatedDiameterInput.diameter2.value = diameter2Result


    //         console.log("updated diameter")

    //     }, [specs, environment])

    // useEffect(() => {

    //     const updatedSpecsInput = { ...specs.input }
    //     const updatedPitchInput = { ...pitch.input }
    //     updatedPitchInput.pitch1.value = (updatedPitchInput.airspeed1.value * 1.8) / (updatedSpecsInput.maxWorkingRPM.value / 60) * 1000 / 25.4
    //     updatedPitchInput.pitch2.value = (updatedPitchInput.airspeed2.value * 1.8) / (updatedSpecsInput.maxWorkingRPM.value / 60) * 1000 / 25.4



    // }, [specs, pitch])

    // console.log('specsData', specsInputData, 'environmentData:', environmentInputData, 'diameterData', diameterInputData)
    // const classes = useStyles();
    // console.log(specs, "state")
    return (
        <>
            <Header header='Motor and Propeller Study' />
            <Grid container style={{ padding: '50px 0' }}>
                <div >
                    <Grid container style={{ paddingBottom: '20px ' }}>

                        {motorPropData.map(inputData => {
                            return <Grid items xs={12} md={6} style={{ margin: '10px 0', ...inputData.style }} >
                                <Paper elevation={4} className="paper" style={{ padding: '20px 30px', marginLeft: ' 20px', marginRight: '20px' }}>
                                    <div >
                                        <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }} >{inputData.id}</Typography>
                                        <div style={{ flexGrow: 1 }}>
                                            {inputData.data.map(eachInputData => {
                                                // console.log(eachInputData)
                                                return (
                                                    <Grid key={eachInputData.id} item xs={12}>
                                                        <InputUnit data-test={`testinputunit`} key={eachInputData.id} id={eachInputData.id} data={eachInputData.data}
                                                            onChange={(e) => onChangeHandler(e, eachInputData, inputData.id)}
                                                        // value={state[inputData.id].input[eachInputData.id].value} 
                                                        />
                                                    </Grid>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        })}
                        {/* <Grid items xs={12} md={6} style={{ margin: '10px 0' }} >
                        <Paper elevation={4} className="paper" style={{ padding: '20px 30px', marginLeft: ' 20px', marginRight: '20px' }}>
                            <div >
                                <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }} >Motor Specs</Typography>
                                <div style={{ flexGrow: 1 }}>
                                    {specsInputData.map(eachInputData => {
                                        return (
                                            <Grid key={eachInputData.id} item xs={12}>
                                                <InputUnit key={eachInputData.id} id={eachInputData.id} data={eachInputData.data} onChange={(e) => onChangeHandler(e, eachInputData, 'specs')} />
                                            </Grid>
                                        )
                                    })}
                                </div>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid items xs={12} md={6} spacing={0} style={{ margin: '10px 0' }}>
                        <Paper elevation={4} className="paper" style={{ padding: '20px 30px', marginLeft: ' 20px', marginRight: '20px' }}>
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

                    <Grid items xs={12} md={6} spacing={0} style={{ margin: '10px 0' }} >
                        <Paper elevation={4} className="paper" style={{ padding: '20px 30px', marginLeft: '20px', marginRight: '20px' }}>
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


                    <Grid items xs={12} md={6} spacing={0} className="propeller-pitch-selection" >
                        <Paper elevation={6} className="paper" style={{ padding: '20px 30px', marginLeft: '20px', marginRight: '20px' }} >
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
                    </Grid> */}
                    </Grid>
                    <Button text='Next' submitHandler={(e) => submitHandler(e)} />
                </div>
            </Grid>
        </>
    )
}

export default SpecsInputContainer;