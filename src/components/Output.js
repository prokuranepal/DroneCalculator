import React from 'react'
import { Box} from '@material-ui/core'


export const Output = ({value,message}) => {
    return (
        <div >
            {message?<p style={{color:'red'}} >{message}</p>:null}
         <Box component="span" style={{background:"#3F51B5",width:"100%",textAlign:'center',margin:'0px 0px', color:'white',padding:"13px 0px",borderRadius:"4px",fontWeight:'500',overflow:'auto'}} display="block">{value?value:0}</Box>
         </div>
        
    )
}
