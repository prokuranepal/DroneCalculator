import './App.css';
import Header from './components/Header';
import MotorAndPropellerInputContainer from './components/MotorAndPropellerInputContainer';
import SizingInputContainer from './components/SizingInputContainer'
import {Switch,Route} from 'react-router-dom'
function App() {


  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={SizingInputContainer}/>
<Route exact path="/motorandpropeller" component={MotorAndPropellerInputContainer}/>
<Route exact path="/sizing" component={SizingInputContainer}/>
      </Switch>
       
    
    </div>
  );
}

export default App;



