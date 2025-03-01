import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './state/CounterSlice';


 const store = configureStore({
       reducer:{
           counter:counterReducer
       }
})


export default store;