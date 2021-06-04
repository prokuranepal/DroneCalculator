import { persistStore, persistReducer } from 'redux-persist'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'

import { pitchReducer } from './reducers/Pitch'
import { environmentReducer } from './reducers/Environment';
import { diameterReducer } from './reducers/Diameter'
import { sizingReducer } from './reducers/sizing'
import { motorReducer } from './reducers/motor'
import { specsReducer } from './reducers/Specs'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    specsReducer: specsReducer,
    pitchReducer: pitchReducer,
    environmentReducer: environmentReducer,
    diameterReducer: diameterReducer,
    sizingReducer: sizingReducer,
    motorReducer: motorReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['sizingReducer', 'specsReducer', 'pitchReducer', 'environmentReducer', 'diameterReducer', 'motorReducer'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store)

