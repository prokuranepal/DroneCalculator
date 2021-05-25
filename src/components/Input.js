import React from 'react'
import { Paper, Typography, TextField, Container} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import '../App.css'
import Input from '@material-ui/core/Input';
import { makeStyles, withStyles } from '@material-ui/core'
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
  const { field, unit, name, value, defaultValue } = props.data;
  // console.log(name, 'nameee')
  return (
    // <Container>
      <div className="input">
        <Typography style={{textAlign: 'left'}} variant="body1">{field}</Typography>
        <CssTextField
          id="standard-number"
          label="Enter number only"
          type="number"
          size='small'
          defaultValue={value}
          margin="normal"
          required
          name={name}
          onChange={props.onChange}
          variant='outlined'
          color='primary'
          value={value}
          autoFocus
        />
        <Typography style={{textAlign: 'left'}} variant="body1">{unit?unit:null}</Typography>

      </div>
    // </Container>
  )
}
export default InputUnit
