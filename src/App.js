import MotorAndPropellerInputContainer from './app/global/MotorAndPropellerInputContainer';
import SizingInputContainer from './app/global/SizingInputContainer'
import { Switch, Route } from 'react-router-dom'
function App() {


  return (
    <div className="App">
      <Switch>
        <Route path="/motorandpropeller" id='motor' component={MotorAndPropellerInputContainer} />
        <Route path="/sizing" id="sizing" component={SizingInputContainer} />
        <Route exact path="/" id="motor" component={MotorAndPropellerInputContainer}/>
      </Switch>


    </div>
  );
}

export default App;



