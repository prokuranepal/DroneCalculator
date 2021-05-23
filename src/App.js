import './App.css';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import {data} from './data'


function App() {
  return (
    <div className="App">
     <Header/>
     {data.map((eachData,index)=>{
       return(
         <InputContainer header={eachData.header} />
       )
     })}
    </div>
  );
}

export default App;
