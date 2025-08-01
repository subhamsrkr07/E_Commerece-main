import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import navbar from "../assets/navbar.webp"
import axios from 'axios'
import { authDataContext } from '../context/Authcontext'
import { adminDataContext } from '../context/AdminContext'


const Nav = () => {
    let navigate = useNavigate()
    let {serverUrl}= useContext(authDataContext)
    let {getAdmin}= useContext(adminDataContext)



    const logOut =  async()=>{
        try {
            
            const result =await axios.get(serverUrl + "/api/auth/logout",
                {withCredentials:true})
                console.log(result.data)
                getAdmin()
                navigate("/login")

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-[100vw] h-[70px] bg-[#dcdbdbf8] 
    z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden
    shadow-md shadow-black'>
      <div className='w-[30px] flex items-center justify-start
       gap-[10px] cursor-pointer' onClick={()=>navigate("/")}>
        <img src={navbar} alt="" className='w-[30px]' />
        <h1 className='text-[25px] text-[black] fonst-sans'>Vidyut</h1>
      </div>
      <button className='text-[15px] hover:border-[2px] border-[#89daea]
         cursor-pinter bg-[#000000ca] py-[10px] px-[20px] rounded-2xl
          text-white' onClick={logOut}>Logout</button>
    </div>
  )
}

export default Nav
