import React from "react";
import { Link } from "react-router-dom";

const Portfolio = [
  {
    path: "https://portfolio-f35.pages.dev/",
    display: " <<Click>>",
  },
];

const PhotographerAbout = ({ name, about, portfolio, location }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor1 font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
            {/* Sanjay */}
          </span>
        </h3>
        <p className="text__para1">
          {about}
          {/* Photographer Sanjay embodies the essence of storytelling through his
          lens, capturing timeless moments with unparalleled creativity and
          skill. With a keen eye for detail and a passion for his craft, Sanjay
          brings a unique perspective to every shoot, ensuring each image tells
          a compelling narrative. His dedication to his artistry and commitment
          to excellence have earned him widespread acclaim and admiration from
          clients and peers alike, establishing him as a trusted name in the
          world of photography. */}
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor1 font-semibold">
          Portfolio
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px] ">
            <div>
              Find me
              {Portfolio.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="text-[15px] leading-6 text-primaryColor font-semibold group hover:text-irisBlueColor "
                >
                  {link.display}
                </Link>
              ))}
              <p className="text-[16px] leading-6 font-medium text-textColor1">
                Certified Photographer
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor1">
              Zebra Studio, chennai.
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor1 font-semibold">
          Location
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {location && location.length > 0 ? (
            location.map((item, index) => (
              <li key={index} className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                  @ {item.address}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor1">
                  +91 {item.call}
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor1">
                  {item.place}
                </p>
              </li>
            ))
          ) : (
            <p>No locations available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PhotographerAbout;
