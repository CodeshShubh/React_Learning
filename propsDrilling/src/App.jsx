import React, { useState } from 'react'
import Comp1 from './Comp1'

// prop driling using raw data
const product = {
   name:'Mackbook',
   price:23000,
   stock:2,
   description:'this is mackbook 16'
}


//  props driling state update data or re-render data
const App = () => {
  const [description, setdescription] = useState('');

  return (
    <div>
      <Comp1 product={product}
       description={description}/>
      <input type='text' value={description} onChange={(e)=>setdescription(e.target.value)}/>
      <h1> this is h1{description}</h1>
    </div>
  )
}

export default App