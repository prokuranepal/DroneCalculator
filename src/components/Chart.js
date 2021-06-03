import React, { Component } from 'react'
import {Line,Bar} from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2';

export default class Chart extends Component {
    render() {
        let data={
            labels:['wing','span','density','airspeed','payload'],
            datasets:[{
                label:'Motor & Propeller',
                data:[2.6,3.2,3.1,1.7,1.5,4,0],
                backgroundColor:['rgba(162, 211, 235, 0.4)','red','blue','green','orange'],
                borderWidth:4,
                fill:true,
                radius:4,
                lineTension:0.5
            },
        ]
        }
        return (

         <div className="chart" style={{padding:' 0 0 100px 0',margin:'0 auto', width:'830px',height:'400px'}} >
         <Line data={data} 
        //  height={80}
         options={
            {    
                responsive: true,    
                title: {      
                  display: true,      
                  position: "top",      
                  text: "Line Chart",      
                  fontSize: 16,      
                  fontColor: "#444"    
                },    
                legend: {      
                  display: true,      
                  position: "bottom",      
                  labels: {        
                   fontColor: "#555",        
                    fontSize: 14     
                  }    
                }  
              } 
         }
          />
         
         </div>
     )


    }
}
