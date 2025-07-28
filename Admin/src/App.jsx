import React, { useContext } from 'react'
import Lists from './pages/Lists'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Add from "./pages/Add"
import Login from "./pages/Login"
import {Routes,Route} from "react-router-dom"
import {adminDataContext} from "./context/AdminContext"


const App = () => {

  let{adminData}= useContext(adminDataContext)
  return (
   <>
   {!adminData ?<Login/>:<>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/lists" element={<Lists/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/login" element={<Login/>} />

   </Routes>
   </>
   }
   </>
  )
}

export default App
