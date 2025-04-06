import React, { useState } from 'react';
import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import useGetProfile from '../../hooks/userFetchData.jsx';
import { BASE_URL } from '../../config';
import Tabs from './Tabs';
import staricon from '../../assets/images/Star.png';
import PhotographerAbout from './../../pages/Photographer/PhotographerAbout.jsx';
import Profile from './Profile.jsx';
import Appointments from'./Appointments.jsx';

const Dashboard = () => {
  const [data, loading, error] = useGetProfile(`${BASE_URL}/photographers/profile/me`);
  const [tab, setTab] = useState('overview');

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    className="bi bi-info-circle-fill flex-shrink-0 w-5 h-5" 
                    viewBox="0 0 16 16" 
                    aria-hidden="true"
                  >
                    <path 
                      fillRule='evenodd' 
                      clipRule="evenodd"
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
                    />
                  </svg>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We'll review manually and approve within 3-days.
                  </div>
                </div>
              )}
              <div className="mt-8">
                {tab === 'overview' && (
                  <div>
                    <div className="flex items-center gap-4 py-5 mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img
                          src={data.photo}
                          alt=""
                          className="w-full"
                        />
                      </figure>
                      <div>
                        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                          {data.company}
                        </span>
                        <h3 className="text-headingColor1 text-[22px] leading-9 mt-3 font-bold">
                          {data.name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor1">
                            <img src={staricon} alt="" className="w-4 h-4" />
                            {data.averageRating}
                          </span>
                          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor1">
                            ({data.totalRating + 1})
                          </span>
                        </div>
                        <p className="text__para1 font-[15px] lg:max-w-[390px] leading-6">
                          {data?.bio}
                        </p>
                      </div>
                    </div>
                    <PhotographerAbout 
                      name={data.name} 
                      about={data.about} 
                      portfolio={data.portfolio}
                      location={data.location}
                    />
                  </div>
                )}
                {tab === 'appointments' && <Appointments appointments={data.appointments}/>}
                {tab === 'settings' && <Profile photographerData={data} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
