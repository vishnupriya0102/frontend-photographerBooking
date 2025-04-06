import React from "react";
import staricon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const PhotographerCard = ({ photographer }) => {
  const {
    name,
    company,
    averageRating,
    totalRating,
    photo,
    totalUsers = "75",
    location,
  } = photographer;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt={name} className="w-full h-[400px]" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor1 font-[700] mt-3 lg:mt-5 ">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span
          className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px]
        lg:leading-7 font-semibold rounded "
        >
          {company}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor1">
            <img src={staricon} alt="" className="w-4 h-4" />
            {averageRating.toFixed(2)}
          </span>
          <span className="text-[14px] leading-6 px-2 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="mt-3  lg:mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] font-semibold text-headingColor1">
            +{totalUsers} clients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor1 ">
            At {location && location[0]?.place}
          </p>
        </div>
        <Link
          to={`/photographer/${photographer._id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default PhotographerCard;
