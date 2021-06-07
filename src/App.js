import MotorAndPropellerInputContainer from './app/global/MotorAndPropellerInputContainer';
import SizingInputContainer from './app/global/SizingInputContainer'
import { Switch, Route } from 'react-router-dom'
function App() {


  return (
    <div className="App">
      <Switch>
        <Route path="/motorandpropeller" component={MotorAndPropellerInputContainer} />
        <Route path="/sizing" component={SizingInputContainer} />
        <Route exact path="/" component={MotorAndPropellerInputContainer}/>
      </Switch>


    </div>
  );
}

export default App;



