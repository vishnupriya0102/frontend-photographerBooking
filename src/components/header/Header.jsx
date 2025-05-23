import { useEffect, useRef, useContext } from 'react'
import logo from "../../assets/images/logo1.png";
import { NavLink,Link } from 'react-router-dom';
// import userImg from '../../assets/images/avatar-icon.png';
import { BiMenu } from "react-icons/bi";
import { AuthContext } from '../../context/AuthContext';

const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/photographer',
    display:'Find a Photographer'
  },
  {
    path:'/service',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user, role, token} = useContext(AuthContext)
  // console.log(user, role, token)

  const handleStickyHeader = ()=> {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    return ()=> window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header flex items-center px-10" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img className="w-32 h-10" src={logo} alt="" />
          </div>
          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) =><li key={index}>
                  <NavLink to={link.path} className={navClass=> navClass.isActive 
                    ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
                    : 'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor'}>{link.display}</NavLink>
                </li>)
              }
            </ul>
          </div>
{/* nav right */}
          <div className="flex items-center gap-4">
            {
              token && user ? <div>
              <Link to={`${role=== 'photographer' ? '/photographers/profile/me' : '/users/profile/me'}`}>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={user?.photo} className="w-full rounded-full" alt="" />
                </figure>
                {/* <h1 className="text-white">{user?.name}</h1> */}
              </Link>
            </div> : <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center 
              justify-center rounded-[50px]">
                Login
                </button>
            </Link>
            }
            
            
            

            <span className="md:hidden text-white" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
