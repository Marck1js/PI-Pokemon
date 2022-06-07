import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer } from '../reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// store.subscribe(()=>{
//     console.log(store.getState())
// })

export default store;

