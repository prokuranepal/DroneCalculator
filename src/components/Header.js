import React from 'react'
import {AppBar,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
const useStyles=makeStyles({
    appContainer:{
        background:'#3F51B5',
        transform:'translateZ(0)',
        padding:'20px 0px'
    },
    header:{
        textAlign:'center',
        fontWeight:'bold'
    }
})
const Header=()=>{
    const classes=useStyles();
    return(
        <AppBar position='static' className={classes.appContainer}>
<Typography className={classes.header} variant='h5'>Motor and Propeller Study</Typography>
        </AppBar>
    )
}
export default Header