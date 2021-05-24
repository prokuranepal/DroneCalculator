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
  // console.log(props, 'props')
  const { field, unit, name, value, defaultValue } = props.data;
  // console.log(name, 'nameee')
  return (
    <Container>
      <div className="input">
        <Typography variant="body1"  >{field}</Typography>
        <Input
          id="standard-number"
          label="Enter number only"
          type="number"
          size='small'
          // defaultValue={defaultValue}

          name={name}
          onChange={props.onChange}
          //   value="100"
          //   fullWidth
          variant='outlined'
          color='primary'
          value={value}
          //   helperText="Enter numbers only"
          InputLabelProps={{
            shrink: true,
          }}

        />
        <Typography variant="body1">{unit}</Typography>

      </div>
    </Container>
  )
}
export default InputUnit
