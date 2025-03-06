import React, { useReducer } from 'react';

function reducer(state, action){
   if(action.type === 'increment'){
    return {
      count: state.count +1
    }
   }else if(action.type ==='decrement'){

         if(state.count <=0) return {count:0}

        return {count:state.count -1}

   }else if(action.type === 'incrementBy100'){
         return {count: state.count+100}
   }else{
    return { count:0}
   }
}

const App = () => {
  const [state , dispatch]=useReducer(reducer , {count:0})
  return (
    <div>
       <h1>{state.count}</h1>
       <button onClick={()=>dispatch({type:'increment'})}>increment</button>
       <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
       <button onClick={()=>dispatch({type:'incrementBy100'})}>increment by 100</button>
       <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default App