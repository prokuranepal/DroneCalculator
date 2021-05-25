import React from 'react'
import { Paper, Typography, TextField, Container } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import '../App.css'
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  input: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    gap: '20px',

  },

}))
const InputUnit = (props) => {
  const classes = useStyles()
  console.log(props, 'propsss')
  const { field, unit, name, value, defaultValue } = props.data;
  let message=null
  console.log(props.id,"id")

  switch(props.id){
    case 'maxRPM':
      message="Please enter the value of KV Rating or Nominal Voltage greater than 0"
      break;
      case 'maxWorkingRPM':
        message="Please enter the value of Estimated max percent or No.load MAX RPM greater than 0"
        break;
        case 'nominalVoltage':
          message="Please enter the value of Cells in series greater than 0"
          break;
      default:
        message="Please enter value greater than 0"
  }


  // console.log(name, 'nameee')
  return (
    
    <Container>
      <div className="input">
        <Typography variant="body1">{field}</Typography>
        {/* <Input
          id="standard-number"
          id="standard-error-helper-text"
          label="Enter number only"
          type="number"
          size='small'
          name={name}
          onChange={props.onChange}
          variant='outlined'
          color='primary'
          value={value}
          helperText='Please Enter value greater than 1'          
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
        <TextField
           type="number"
           size='small'
           name={name}
           color='primary'
           value={value}
           onChange={props.onChange}
           error={value<0?true:false}
          id="standard-error-helper-text"  
          helperText={value<0?message:null}
        />

        {/* {value<0?<Typography>{value}</Typography>:null} */}
        <Typography variant="body1">{unit}</Typography>

      </div>
    </Container>
    
    
  )
}
export default InputUnit
