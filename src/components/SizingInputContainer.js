import React,{useState} from 'react';
import Header from './Header'
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import InputUnit from './InputUnit';
import {Sizing, title} from '../data/data'

const SizingInputContainer=()=>{
const[sizing,setSizing]=useState(Sizing)

const sizingChangeHandler=(e,data)=>{

    // const updatedSizing={...sizing,[data.parent]:{...sizing[data.parent],[data.name]:{...sizing[data.name],value:e.target.value}}}
    // setSizing({sizing:updatedSizing})

    const updatedSizing={...sizing}
    const parentObj={...updatedSizing[data.parent]}
    console.log(parentObj,"parentObj",data)
    const childObj={...parentObj[data.name],value:e.target.value}
    console.log(childObj,"childObj")
    // childObj={...childObj,value:e.target.value}
    parentObj[data.name]=childObj
    updatedSizing[data.parent]=parentObj
    console.log(updatedSizing,"updatedSizing")
    console.log(sizing,"originalSizing")
    setSizing(updatedSizing)

}

console.log(sizing,"updatedSizingOrgi")

let sizingArray=[]
for(let key in sizing){
    let innerArray=[]
    for (let key2 in sizing[key])
    {
        innerArray.push({data:sizing[key][key2]})
    }
    sizingArray.push({data:innerArray, title:title[key]})
}

console.log("UpdatedSizingArr", sizingArray)
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



    return(
        <>
        <Header header='Motor and Propeller Study'/>
      <Grid container>
         <div >
             <Grid container>
                 {sizingArray?(
      sizingArray.map((parent,key)=>{
    return(
        
        <Grid ley={key} items xs={6} style={{margin:'20px 0'}} >
        <Paper elevation={4} className="paper" style={{ padding: '20px 30px',marginLeft:' 20px',marginRight:'10px' }}>
            <div style={{marginTop: '20px'}}>
               <Typography variant='h5' style={{ marginBottom: '12px', textAlign: 'center' }}>{parent.title}</Typography>
                    <div style={{ flexGrow: 1 }}>        
                           <Grid item xs={12}>

                 {parent.data.map((child,index)=>{
                     return(
                        <InputUnit key={child.data.name} id={child.data.name} data={child.data} onChange={(e)=>sizingChangeHandler(e,child.data)} />
                     )
                 })}  
                  </Grid>
                   </div>         
                  </div>
             </Paper>
           </Grid>   
           
           
    )
})
                 ):''}
       </Grid>           
    </div>
</Grid>
        </>
    )
}
export default SizingInputContainer