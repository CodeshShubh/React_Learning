import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment , decrement , incrementByValue} from './state/counterSlice';



const App = () => {

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch()

  return (
    <div>

       <h1>{count}</h1>

       <button onClick={()=>dispatch(increment())}>increment</button>
       <button onClick={()=>dispatch(decrement())}>decrement</button>
       <button onClick={()=>dispatch(incrementByValue(10))}>Increment By 10</button>

    </div>
  )
}

export default App