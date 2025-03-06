// -> this is useReducerhook

// import React, { act, useReducer } from 'react'

// const initialState = {name:'' , age:'', count:0}
// const reducer = (state,action)=>{

//   switch(action.type ){
//       case 'increment':
//       return {... state, count: state.count +1}

//       case 'decrement':
//       return  { ...state, count:state.count -1}

//       case 'change_name':
//         return {...state , name:action.payload}

//         case 'change_age':
//           return {...state , age:action.payload}
//       default:
//       return initialState;
//   }
// }

// const App = () => {

//   const [state, dispatch] = useReducer(reducer , initialState)

//   return (
//     <div>
//       <input type='text' placeholder='name' value={state.name}  onChange={(e)=>dispatch({type:'change_name' , payload:e.target.value})} />
//       <input type='number' placeholder='age'  value={state.age} onChange={(e)=>dispatch({ type:'change_age' , payload:e.target.value})} />
//       <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
//       <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
//       <p>My name is : {state.name} and age is : {state.age} and working days: {state.count}</p>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

const App = () => {
  const [Details, setDetails] = useState({name:'', age:'', count:0})

   
const handleChange = (key , value)=>{
  setDetails({...Details , [key]: value})
}
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={Details.name}
        onChange={(e) =>handleChange(e.target.name , e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        name="age"
        value={Details.age}
        onChange={(e) =>handleChange(e.target.name , e.target.value)}
      />
      <button onClick={()=>setDetails({...Details , count: Details.count +1})}>Increment</button>
      <button onClick={()=>setDetails({...Details , count: Details.count-1})}>Decrement</button>
      <p>
        My name is : {Details.name} and age is : {Details.age} and working days:{" "}
        {Details.count}
      </p>
    </div>
  );
};

export default App;
