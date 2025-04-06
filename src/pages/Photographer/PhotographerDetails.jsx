import React, { useState } from "react";
import photographer2 from "../../assets/images/pg2.png";
import staricon from "../../assets/images/Star.png";
import PhotographerAbout from "./PhotographerAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "./../../config.js";
import useFetchData from "../../hooks/userFetchData.jsx";
import Loader from "./../../components/Loader/Loading.jsx";
import Error from "./../../components/Error/Error.jsx";
import { useParams } from "react-router-dom";

const PhotographerDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();

  // Now you can use the id variable in your component
  const [data, loading, error] = useFetchData(
    `${BASE_URL}/photographers/${id}`
  );
  const {
    name,
    email,
    phone,
    password,
    bio,
    gender,
    company,
    ticketPrice,
    portfolio,
    location,
    about,
    averageRating = 0,
    totalRating = 0,
    reviews,
    totalUsers = "75",
    photo,
  } = data;

  return (
    <section className="px-10">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!error && !loading && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" className="w-full" />
                </figure>

                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {company}
                  </span>
                  <h3 className="text-headingColor1 text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor1">
                      <img src={staricon} alt="" className="w-4 h-4" />
                      {averageRating.toFixed(2)}
                    </span>
                    <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor1">
                      ({totalRating})
                    </span>
                  </div>
                  <p className="text__para1 text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-b border-solid border-[#6B6E72]">
                <button
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor1 font-semibold`}
                  onClick={() => setTab("about")}
                >
                  About
                </button>
                <button
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor1 font-semibold`}
                  onClick={() => setTab("feedback")}
                >
                  Feedback
                </button>
              </div>
              <div className="mt-[50px]">
                {tab === "about" && (
                  <PhotographerAbout
                    name={name}
                    about={about}
                    portfolio={portfolio}
                    location={location}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>
            <div>
              <SidePanel
                photographerId={id}
                ticketPrice={ticketPrice}
                // timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotographerDetails;
