import './App.css';
import Header from './components/Header';
import InputContainer from './components/InputContainer';


function App() {

//   const data={
//     firstName:'Manish',
//     lastName:'kharel',
//     gender:'male',
//     email:'kharelmanish2@gmail.com'
//   }
//   let arrayData=[]
// for(let key in data){
//   arrayData.push({key:key,value:data[key]})
// }
// console.log(arrayData,'arraytest');


// var obj={}
// for(let i=0;i<arrayData.length-1;i++ ){
//   obj[arrayData[i].key]=arrayData[i].value;
// }
// console.log(obj,'objtest')

  return (
    <div className="App">
     <Header/>
    
         <InputContainer  />
       
    
    </div>
  );
}

export default App;



