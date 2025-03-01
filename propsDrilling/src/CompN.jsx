import React from 'react'

const compN = ({product,description}) => {
  return (
    <div>{product.name} <br></br>
    {product.price}<br></br>
    {product.stock}
    <h1>{description}</h1>
    </div>
  )
}

export default compN