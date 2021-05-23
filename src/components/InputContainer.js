import React,{Component} from 'react'
import{Paper,Typography,TextField,Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import Input from './Input';
import '../App.css'

// const styles=makeStyles((theme)=>({
//     input:{
//         display:'flex',
//         justifyContent:'space-around',
//         alignItems:'center',
//         paddingTop:theme.spacing(2),
//         paddingBottom:theme.spacing(2)
//     },
//     paper:{
//         margin:theme.spacing(2),
//         display:'grid',
//         gridTemplateColumns:'repeat(auto-fit,minmax(600px,1fr))'
//     }

// }))



class InputContainer extends Component{
    

   state={
       input:{
        kvrating:{
            value:'',
            field:'KV Rating',
            unit:'kv',
            defaultValue:830,
            name:'kvrating'
        },
        cellsInSeries:{
            value:'',
            field:'Cells in series',
            unit:'V',
            defaultValue:5,
            name:'cellsInSeries'
        },
        nominalVoltage:{
            value:'',
            field:'Nominal Voltage',
            defaultValue:18.5,
            name:'nominalVoltage'
        },
        maxRPM:{
            value:'',
            field:'No. load MAX RPM',
            defaultValue:15340,
            name:'maxRPM'
        },
        estimatedMaxPercent:{
            value:'',
            field:'Estimated max percent',
            unit:'%',
            defaultValue:85,
            name:'estimatedMaxPercent'
        },
        maxWorkingRPM:{
            value:'',
            field:'Max working RPM',
            unit:'%',
            defaultValue:null,
            name:'maxWorkingRPM'
        },
        maxPower:{
            value:'',
            field:'Max power',
            unit:'Watt',
            defaultValue:1000,
            name:'maxPower'
        },
        altitude:{
            value:'',
            field:'Altitude',
            unit:'m',
            defaultValue:0,
            name:'altitude'
        },
        density:{
            value:'',
            field:'Density',
            unit:'kg/m^3',
            defaultValue:1.225,
            name:'density'
        }
        
    }
}

 changeHandler=(e)=>{
    const{name,value}=e.target;
    console.log(name,"name")
   const updatedInput={...this.state.input}
   console.log(updatedInput,"updatedInput")
   const updatedElement={...updatedInput[name]}
   console.log(updatedElement,"updatedElement")
   
   updatedElement.value=e.target.value
   updatedInput[name]=updatedElement;
   
   this.setState({input:updatedInput})

}
render(){
    // const classes=styles()
    console.log(this.state.input,"updatedinput")

let inputData=[]
for(let key in this.state.input){
    inputData.push({id:key,data:this.state.input[key]})
}
console.log(inputData,"inputdata")

console.log(this.state.input,'input')
    return(
<>

    <Typography variant='h5'style={{margin:'12px',textAlign:'center'}} >{this.props.header}</Typography>
    
    <Paper className="paper">

       {inputData.map(eachInputData=>{
           return(
               <Input key={eachInputData.id} data={eachInputData.data} changed={this.changeHandler}/>
           )
       })}
        
       
        </Paper>
        
        </>
    )
}
}
export default InputContainer;