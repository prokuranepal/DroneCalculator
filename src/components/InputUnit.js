




import React from 'react'
import { Paper, Typography, TextField, Container,Box} from '@material-ui/core'
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
  // console.log(props.onChange,"change")
  const { field, unit, name, value, defaultValue,input } = props.data;
  // console.log(name, 'nameee')
  return (
    // <Container>
      <div className="input"  >
        <Typography style={{textAlign: 'left'}} variant="body1">{field}</Typography>
        {input?  <CssTextField
          id="standard-number"
          // label="Enter number only"
          type="number"
          size='small'
          defaultValue={value}
          margin="normal"
          required
          name={name}
          onChange={props.onChange}
          variant='outlined'
          color='primary'
          value={value>0?value:0}
          autoFocus
        />:<Box component="span" style={{background:"#3F51B5",width:"70px",textAlign:'center', color:'white',padding:"13px 0px",borderRadius:"4px",fontWeight:'500',overflow:'auto'}} display="block">{value?value:0}</Box>}
      
        <Typography style={{textAlign: 'left'}} variant="body1">{unit?unit:null}</Typography>

      </div>
    // </Container>
  )
}

export default InputUnit