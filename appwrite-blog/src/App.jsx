import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/footer/footer'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurerntUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      }).finally(()=>{
        setLoading(false)
      })
  }, [])
  return !loading ?(
    <div className='min-h-screen flex flex-wrap bg-gray-400 bg-[#1da1f2]'>
      <div className='w-full block'>
          <Header/>
        <main>
         Main {/* <Outlet/> */}
        </main>
          <Footer/>
      </div>
    </div>
  ):null
}

export default App
