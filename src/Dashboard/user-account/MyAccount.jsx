import { useContext, useState } from 'react';
import { AuthContext } from './../../context/AuthContext.jsx';
import userImg from '../../assets/images/pg1.png';
import MyBookings from './MyBookings.jsx';
import Profile from './Profile.jsx';
import useGetProfile from '../../hooks/userFetchData'
import { BASE_URL } from '../../config.js';
import Loading from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx';

const MyAccount = () => {
    const { dispatch } = useContext(AuthContext);
    const [tab, setTab] = useState('bookings');

    const [userData, loading, error]=useGetProfile(`${BASE_URL}/users/profile/me`)
     
    //console.log(userData);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <section>
        <div className="max-w-[1170px] px-5 mx-auto">

            {loading && !error && <Loading />}
            {error && !loading && <Error errMessage={error} />}

            {
                !loading &&!error && 
                (<div className="grid md:grid-cols-3 gap-10">
                <div className="pb-[50px] px-[30px] rounded-md">
                    <div className="flex items-center justify-center">
                        <figure className="w-[100px] h-[100px] rounded-full border-2 border-soild 
                        border-primaryColor">
                            <img src={userData.photo} alt="" className='w-full h-full rounded-full'/>
                        </figure>
                    </div>
                    <div className="text-center mt-4">
                        <h3 className="text-[18px] leading-[30px] font-bold text-headingColor1">
                            {userData.name}
                        </h3>
                        <p className="text-[15px] leading-6 font-medium text-textColor1">
                            {userData.email}
                        </p>
                        <p className="text-[15px] leading-6 font-medium text-textColor1">
                            Location:
                            <span className="mt-2 text-headingColor1 text-[22px] leading-8">
                                {userData.location}
                            </span>
                        </p>
                    </div>
                    <div className="mt-[40px] md:mt-[80px] ">
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

                <div className="md:col-span-2 md:px-[30px]">
                    <div>
                        <button onClick={() => setTab('bookings')} 
                        className={`bg-primaryColor font-semibold text-[16px] leading-7 p-2 mr-5 
                        px-5 rounded-md border border-solid border-primaryColor 
                        ${tab === 'bookings' ? 'text-white' : 'bg-transparent text-headingColor1 font-normal'}`}>
                            My Bookings
                        </button>
                        <button onClick={() => setTab('settings')} 
                        className={`bg-primaryColor font-semibold text-[16px] leading-7 p-2 px-5 
                        rounded-md border border-solid border-primaryColor 
                        ${tab === 'settings' ? 'text-white' : 'bg-transparent text-headingColor1 font-normal'}`}>
                            Profile Settings
                        </button>
                    </div>
                    {
                        tab === 'bookings' && <MyBookings />
                    }
                    {
                        tab ==='settings' && <Profile user={userData}/>
                    }
                </div>
            </div>)
            }
        </div>
        </section>
    )
}

export default MyAccount;
