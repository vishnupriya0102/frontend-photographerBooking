import React, { useContext } from 'react'
import { BiMenu } from "react-icons/bi";
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Tabs = ({tab, setTab}) => {
    // console.log(tab === "overview")
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout =()=>{
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    }

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button className={`${tab=== "overview" ?'bg-indigo-100 text-primaryColor':'bg-transparent text-headingColor1'}
        w-full btn mt-0 rounded-md`}
        onClick={() => setTab('overview')}
        >
            Overview
        </button>
        <button className={`${tab=== "appointments" ?'bg-indigo-100 text-primaryColor':'bg-transparent text-headingColor1'}
        w-full btn mt-0 rounded-md`}
        onClick={() => setTab('appointments')}
        >
            Appointments
        </button>
        <button className={`${tab=== "settings" ?'bg-indigo-100 text-primaryColor':'bg-transparent text-headingColor1'}
        w-full btn mt-0 rounded-md`}
        onClick={() => setTab('settings')}
        >
            Profile
        </button>
        <div className="mt-[80px] w-full">
            <button onClick={handleLogout} className="w-full bg-[#181A1E] p-3 text-[16px] 
                leading-7 rounded-md text-white">
                    Logout
            </button>
             <button className="w-full p-3 bg-red-600 mt-3 text-[16px] leading-7 rounded-md 
             text-white">
                 Delete Account
              </button>
        </div>
      </div>
    </div>
  )
}

export default Tabs
