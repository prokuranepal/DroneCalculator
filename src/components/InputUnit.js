




import React from 'react'
import { Paper, Typography, TextField, Container,Box} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import '../App.css'
import Input from '@material-ui/core/Input';
import { makeStyles, withStyles } from '@material-ui/core'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { Output } from './Output';
const useStyles = makeStyles((theme) => ({
  input: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0),
    gap: '20px',

  },

}));

const CssTextField = withStyles({
  root: {
      '& label.Mui-focused': {
          color: 'black',
      },
      '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
              borderColor: '#686F76',
          },
          '&:hover fieldset': {
              borderColor: 'green',
          },
          '&.Mui-focused fieldset': {
              borderColor: 'blue',
              color: 'blue'
          },
      },
  },
})(TextField);
const InputUnit = (props) => {
  const classes = useStyles()
  // console.log(props, 'props')
  // console.log(props.onChange,"change")
  const { field, unit, name, value, defaultValue,input } = props.data;
  const id=props.id;
  let message=null;
  switch(id){
    case "flightTimeBatteryCapacity":
message="For Flight Time"
break;

case "rangeBatteryCapacity":
  message="For Range "
  break;
  default:
    message=null
  }
  console.log(id, 'id')
  console.log(message,"message")
  return (
    // <Container>
      <div className={`${message?'messege input':'input'}`}  >
        {/* <h1>{message}</h1> */}
        <Typography style={{textAlign: 'left'}} variant="body1">{field}</Typography>
        {input?  <CssTextField
          id="standard-number"
          type="number"
          size='small'
          defaultValue={value}
          margin="normal"
          required
          name={name}
          onChange={props.onChange}
          variant='outlined'
          color='primary'
          // helperText={message?message:''}
          value={props.value}
          autoFocus
        />:<Output value={value} message={message}/>
        }
      
        <Typography style={{textAlign: 'left'}} variant="body1">{unit?unit:null}</Typography>

      </div>
    // </Container>
  )
}

export default InputUnit