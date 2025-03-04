import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Loading from './components/Loading';
import Tours from './components/Tours';


const App = () => {
const url = 'https://www.course-api.com/react-tours-project';

const [tours, setTours] = useState([]);
const [isLoading, setisLoading] = useState(false);

  const fetchTours = async()=>{
     try {
      setisLoading(true)
      const {data}  = await axios.get(url)
       
      setTours(data)
      setisLoading(false)
     } catch (error) {
        console.log("Error:",error)
        setisLoading(true)
     }
  }


  useEffect(() => {
    fetchTours()
  }, [])

  const reomveItems = (id)=>{
    const filterArr =   tours.filter((items)=> items.id !== id)
    setTours(filterArr)
  }


  


  return (
    <>
    {
      isLoading ? <Loading/>  : <div>
        {
          tours.length>0 ? <Tours data= {tours} reomveItems={reomveItems}/> : <h1>no items found 
            <button onClick={()=>fetchTours()}>Refresh</button>
          </h1>
        }
        </div>
    }
    </>
  )
}

export default App