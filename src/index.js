import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import    {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
import {specsReducer} from './components/store/reducers/Specs'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import {pitchReducer} from './components/store/reducers/Pitch'
import {environmentReducer} from './components/store/reducers/Environment';
import {diameterReducer} from './components/store/reducers/Diameter'
import {sizingReducer} from './components/store/reducers/SizingReducer'
import {createStore,compose,combineReducers,applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
  specsReducer:specsReducer,
  pitchReducer:pitchReducer,
  environmentReducer:environmentReducer,
  diameterReducer:diameterReducer,
  sizingReducer:sizingReducer,
})
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const persistConfig = {
  key:'root',
  storage,
  whitelist:['sizingReducer','specsReducer','pitchReducer','environmentReducer','diameterReducer'],
}
 const persistedReducer=  persistReducer(persistConfig,rootReducer)
//  const store=createStore(
//    persistedReducer,
//    composeEnhancers(applyMiddleware(thunk))
//    )
   const persistor=persistStore(store)
   // console.log(persistor,"per")
   // console.log(store,"storee")
   // console.log(persistReducer(persistConfig,rootReducer),"perss")


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
    {/* <PersistGate persistor={persistor}> */}
    <App />
  {/* </PersistGate> */}
  </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
