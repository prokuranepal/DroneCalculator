import React from 'react'
import {AppBar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
const useStyles=makeStyles({
    appContainer:{
        background:'#3F51B5',
        transform:'translateZ(0)'
    }
})
const Header=()=>{
    const classes=useStyles();
    return(
        <AppBar position='static' className={classes.appContainer}>
            <h2>Motor and Propeller Study</h2>
        </AppBar>
    )
}
export default Header