import React,{useEffect} from 'react'
import Dashboard from './screens/dashboard'
import {BrowserRouter} from 'react-router-dom' 
import Api from './api'


const App = () => {


  useEffect(() =>{
  Api("internship/fetch?sortBy=stipend")
  .then(data=>{
    console.log(data)
  })
  .catch(e=>console.log(e.message))
  
  },[])

  return (
    <BrowserRouter>
      <Dashboard/>
    </BrowserRouter>
  )
}

export default App
