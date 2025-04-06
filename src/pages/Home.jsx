import React from "react";
import photo01 from "../assets/images/photo-1.png";
import photo02 from "../assets/images/photo2.png";
import photo03 from "../assets/images/photo3.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import FaqList from "../components/faq/FaqList";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import f1 from "../assets/images/feature.mp4";
import v1 from "../assets/images/video-icon.png";
import pg1 from "../assets/images/pg1.png";
import PhotographerList from '../components/Photographers/PhotographerList';
import faq from "../assets/images/faq.png";

function Home() {
  return (
    <>
      <style></style>
      {/*  section */}
      <section className="hero__section pt-[60px] px-10 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* content */}
            <div>
              <div className="lg:w-[570px]">
                <h1
                  id="id"
                  className="text-[36px] leading-[46px] bg-black text-headingColor font-[800] md:text-[60px] 
            md:leading-[70px]"
                >
                  Framing Your World, One Shot at a Time
                </h1>
                <p className="text__para  bg-black">
                  Welcome to our photography booking platform, where we
                  transform your moments into timeless memories. Whether it's
                  capturing the magic of your wedding day, the joy of a family
                  reunion, or the essence of your corporate event, we're here to
                  make sure every snapshot is perfect. With a curated selection
                  of talented photographers, state-of-the-art equipment, and a
                  passion for storytelling, we strive to exceed your
                  expectations with every click.
                </p>

                <button className="btn">Request an Appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] bg-black leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    8+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt:[-14px]"></span>
                  <p className="text__para  bg-black">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] bg-black leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt:[-14px]"></span>
                  <p className="text__para  bg-black">Studio Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] bg-black leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt:[-14px]"></span>
                  <p className="text__para bg-black">Customer Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px]  justify-end">
              <div>
                <img className="w-full h-[400px] " src={photo01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img
                  src={photo02}
                  alt=""
                  className="w-full h-[160px] mb-[30px]"
                />
                <img src={photo03} alt="" className="w-full h-[160px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      <section className="px-10">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading1 text-center">
              Providing the best Photographer.
            </h2>
            <p className="text__para1 text-center">
              World-class photography for everyone. Our Photographers offers
              unmatched, expert photos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className="w-[250px] h-[150px]" src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-blackheadingColor font-[700] text-center">
                  Find a Photographer
                </h2>
                <p className="text-[16px] leading-7 text-blacktextColor font-[400] mt-4 text-center">
                  World-class photography for everyone. Our Photographers offers
                  unmatched, expert photos. From studio to photographer.
                </p>
                <Link
                  to="/photographer"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
        mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-blackheadingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-blacktextColor font-[400] mt-4 text-center">
                  World-class photography for everyone. Our Photographers offers
                  unmatched, expert photos. In many location.
                </p>
                <Link
                  to="/photographer"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
        mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-blackheadingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-blacktextColor font-[400] mt-4 text-center">
                  World-class photography for everyone. Our Photographers offers
                  unmatched, expert photos.. here for you at scheduled time.
                </p>
                <Link
                  to="/photographer"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
        mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* service */}
      <section className="px-10">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading1 text-center">Our Assistance</h2>
            <p className="text__para1 text-center">
              Explore our captivating array of diverse and stunning photo
              selections, each guaranteed to captivate your imagination and
              elevate your visual experience.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* feature */}
      <section className="px-10">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="lg:w-[670px]">
              <h2 className="heading1">
                Get virtual photos
                <br />
                anytime..
              </h2>
              <ul className="pl-4">
                <li className="text__para1">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para1">
                  2. Search for your photographer here. and contact their
                  studio.
                </li>
                <li className="text__para1">
                  3. View our photographer who are accepting your photos,use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn more</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <div className="w-full h-full">
                <video autoPlay muted loop className="lg:w-[1090px] lg:h-full">
                  <source src={f1} type="video/mp4" />
                </video>
              </div>
              <div
                className="w-[150px] lg:w-[248px] bg-black absolute bottom-[10px] left-0 
          md:bottom-[30px] lg:bottom-[10px] md:left-1 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600] ">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
                    <img src={v1} />
                  </span>
                </div>
                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-2 px-2 lg:py-[3px] lg:px-[10px] text-[8px]
            leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full"
                >
                  Conference
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                  <img
                    src={pg1}
                    alt=""
                    className="w-[32px] h-[32px] rounded-full "
                  />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    James Smith
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Our Majestic Photographers */}
      <section className="px-10">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading1 text-center">Our Majestic Photographers</h2>
            <p className="text__para1 text-center">
              Discover a curated collection of top-tier photographers ready to
              bring your moments to life in stunning detail.
            </p>
          </div>
          <PhotographerList />
        </div>
      </section>
      {/* faq */}
      <section className="px-10">
        <div className="container">
          <div className="flex justify between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faq} alt="" className="lg:w-4/5 " />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading1">Your Queries Addressed</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
