import React,{useState} from 'react';
import Header from './Header'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import InputUnit from './InputUnit';
import {Sizing} from '../data/data'

const SizingInputContainer=()=>{
const[sizing,setSizing]=useState(Sizing)
console.log(sizing,"ssizing")

const sizingChangeHandler=(e)=>{
console.log(e)
}



let sizingArray=[]
for(let key in sizing){
    let innerArray=[]
    for (let key2 in sizing[key])
    {
        innerArray.push({[key2]:sizing[key][key2]})
    }
    sizingArray.push({[key]:innerArray})
}

console.log("sizingArray", sizingArray)
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
const data=null
console.log(data,"datta")

    return(
        <>
        <Header header='Sizing Study'/>
        {data}
        </>
    )
}
export default SizingInputContainer