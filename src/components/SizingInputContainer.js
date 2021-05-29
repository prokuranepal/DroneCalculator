import React,{useState} from 'react';
import Header from './Header'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import InputUnit from './InputUnit';
import {Sizing} from '../data/data'

const SizingInputContainer=()=>{
const[sizing,setSizing]=useState(Sizing)

const sizingChangeHandler=(e)=>{
console.log(e)
}



let sizingArray=[]
for(let key in sizing){
    let innerArray=[]
    for (let key2 in sizing[key])
    {
        innerArray.push({data:sizing[key][key2  ]})
    }
    sizingArray.push({[key]:innerArray})
}

console.log("parentArray", sizingArray)
// let data=sizingArray.map(each=>{
//     const {data}=each
//     return (
//     Object.keys(data).map(key=>{
//         console.log(data[key],"ssizingO")
//         return(<InputUnit key={data[key].name} id={data[key].name} data={data[key]} onChange={(e) => sizingChangeHandler(e, data[key])} />
//         )
//     })
//     )
// })
let data=sizingArray.map((parent,index)=>{
    
    console.log(parent.input,"parent")
// return <h1>Header</h1>
let arr=
parent.input.map((child,index)=>{
    
console.log(child.data,'parentchild')
return(
    // <InputUnit key={child.data.name} id={child.data.name} data={child.data} onchange={(e)=>sizingChangeHandler(e,child.data)} />
    <h1>{child.data.unit}</h1>
    )

})
// return {arr} 
})


console.log(data,"datta")

    return(
        <>
        <Header header='Sizing Study'/>
      {data}
        </>
    )
}
export default SizingInputContainer