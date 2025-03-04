import React from 'react'
import Tour from '../Tour'

const Tours = ({data, reomveItems}) => {
  return (
    <div>
        {
            data.map((items , index)=>{
                return <Tour key={items.id} {...items} reomveItems={reomveItems}/>
            })
        }
    </div>
  )
}

export default Tours