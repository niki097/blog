import React from 'react'
import { Container, Logo, Logoutbtn } from "../index"
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatuss  = useSelector((state) => state.auth.status);

  const navigateMe = useNavigate();

  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatuss,
    },
    {
      name: "Signup",
      url: "/signup",
      active: !authStatuss,
    },
    {
      name: "All Posts",
      url: "/all-posts",
      active: authStatuss,
    }, 
    {
      name: "Add-Post",
      url: "/add-post",
      active: authStatuss,
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-100'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='60px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
              item.active?(
                <li Key={item.name}>
                  <button onClick={()=>navigateMe(item.url)} className='inline-block px-6 py-3 duration-200 hover:bg-blue-500 hover:text-blue-100'>
                    {item.name}</button>
                </li>
              ): null
            )}
            {authStatuss && (
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header;