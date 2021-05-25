import React, { Component } from 'react'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Input from './Input';
import '../App.css'
import { specs } from '../data/specs';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    input: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    paper: {
        margin: theme.spacing(2),
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(600px,1fr))'
    }

}))



class InputContainer extends Component {


    state = {
        ...specs
    }

    changeHandler = (e, data) => {
        console.log(e.target.value, data.id);

        //copy the input object from the state
        const updatedInput = { ...this.state.input }

        //copy the specific field like density, maxPower using data.id from updatedInput
        let item = updatedInput[data.id];

        //update the value using the value from onChange to the related field
        item = { ...item, value: e.target.value };

        //update the field item with updated value to updatedInput
        updatedInput[data.id] = item;

        //set the new state
        this.setState({ input: updatedInput });

    }
    render() {
        let inputData = []
        for (let key in this.state.input) {
            inputData.push({ id: key, data: this.state.input[key] })
        }
        // const classes = useStyles();
        return (
            <div style={{ margin: '0px 20px' }}>

                <div style={{marginTop: '20px'}}>
                    <Typography variant='h5' style={{ margin: '12px', textAlign: 'center' }} >{this.props.header}</Typography>
                    <div style={{ flexGrow: 1 }}>
                        <Paper className="paper" style={{ padding: '20px 30px' }}>
                            <Grid container spacing={0}>


                                {inputData.map(eachInputData => {
                                    return (
                                        <Grid item xs={6}>
                                            <Input key={eachInputData.id} data={eachInputData.data} onChange={(e) => this.changeHandler(e, eachInputData)} />
                                        </Grid>
                                    )
                                })}

                            </Grid>
                        </Paper>
                    </div>
                </div>
                <div style={{margin: '20px 0px'}}>
                    <Typography variant='h5' style={{ margin: '12px', textAlign: 'center' }} >{this.props.header}</Typography>

                    <Paper className="paper" style={{ padding: '0px 20px' }}>
                        <Grid container>
                            {inputData.map(eachInputData => {
                                return (
                                    <Grid item xs={6} md={6} lg={6}>
                                        <Input key={eachInputData.id} data={eachInputData.data} onChange={(e) => this.changeHandler(e, eachInputData)} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Paper>
                </div>
            </div>
        )
    }
}
export default InputContainer;