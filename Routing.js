import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../Home/Home'

import { Context } from "../Context"
import { initialState, stateReducer } from '../Reducer/Reducer'
import Travel from '../Travel'
import Seat from '../Seat/Seat'


const Routing = () => {
  
  const [state, dispatch] = useReducer(stateReducer, initialState)
  console.log(state);      
  return (
    <div>
      <Context.Provider value= {{state,dispatch}}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="Travel" element={<Travel/>}/>
          <Route path = "/Seat" element={<Seat/>}/>

            
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default Routing
