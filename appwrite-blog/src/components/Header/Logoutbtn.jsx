import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../appwrite/config'
function Logoutbtn() {
    const dispatch=useDispatch()
    const LogoutbtnHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
    onClick={LogoutbtnHandler}>Logout</button>
  )
}

export default Logoutbtn