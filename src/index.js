import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import    {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {specsReducer} from './components/store/reducers/Specs'
import {pitchReducer} from './components/store/reducers/Pitch'
import {environmentReducer} from './components/store/reducers/Environment';
import {diameterReducer} from './components/store/reducers/Diameter'
import {sizingReducer} from './components/store/reducers/SizingReducer'
import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
  specsReducer:specsReducer,
  pitchReducer:pitchReducer,
  environmentReducer:environmentReducer,
  diameterReducer:diameterReducer,
  sizingReducer:sizingReducer,
  // burgerBuilder:burgerBuilder,
  // order:orderReducer,
  // authReducer:authReducer
})

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
console.log(store,"storee")
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
