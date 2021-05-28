import React,{useState} from 'react';
import Header from './Header'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import InputUnit from './InputUnit';
import {arr} from '../data/data'

const SizingInputContainer=()=>{
const[array,setArr]=useState(arr)

const sizingChangeHandler=(e)=>{
console.log(e)
}



// let sizingArray=[]
// for(let key in sizing){
//     sizingArray.push({data:sizing[key]})
// }
// console.log(sizingArray,"ssizingA")
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

console.log(array,"array")
let data=array.map(each=>{
    console.log(each,"each")
    
    each.map(sub=>{
        return <InputUnit key={sub.field} id={sub.field} data={sub} onChange={(e)=>sizingChangeHandler(e,sub.name)}/>
    })
})

    return(
        <>
        <Header header='Sizing Study'/>
     {   array.map((each,index)=>{
    console.log(typeof (each.input),"each")
    
   { each.input.map(sub=>{
        return <InputUnit key={sub.field} id={sub.field} data={sub} onChange={(e)=>sizingChangeHandler(e,sub.name)}/>
    })
}
})
}
        </>
    )
}
export default SizingInputContainer