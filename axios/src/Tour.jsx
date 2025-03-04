import React, { useState } from 'react';
import styled from 'styled-components'

const Tour = ({ id, name , image , price ,  info, reomveItems }) => {

    const [Expand, setExpand] = useState(false);

  return (
    <Container>
        <h1>{name}</h1>
        <div className='imge_container'>
        <img src={image} alt='product_image'/>
        </div>
        <div className='description'>
        <p>{
        Expand ? info : `${info.substring(0,200)}...`
        }</p>
        <button onClick={()=>setExpand(!Expand)}>{Expand ? 'collapse' : ' expand'}</button>
        </div>
        <h3>{price}</h3>
        <button onClick={()=>reomveItems(id)}>Remove</button>
    </Container>
  )
}

export default Tour;


const Container = styled.div`
    
    border: 1px solid red;
    width: 30vw;
    text-align: center;
    img{
        width: 300px;
        height: 200px;
    }
`



