import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

function About() {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* about img */}
            <div className=" relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2  lg:order-1">
                <img src={aboutImg} alt="" className="lg:h-full" />
                <div className="absolute z-60 bottom-7 w-[200px] md:w-[300px] right-[-20%] md:right-[-7%] lg:right-[-22%]">
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>
            {/* about content */}
            <div className="w-full lg:w-1/2 xl:w-[670px] z-10 order-1 lg:order-2">
                <h2 className="heading1">
                    Proud to be one of the best.
                </h2>
                <div className="py-4">
                <p className="text__para1">
                Welcome to our platform, where capturing your most cherished moments is made effortless. 
                Whether it's a wedding, family reunion, or corporate event, 
                finding the perfect photographer has never been easier. 
                </p>

                <p className="text__para1 mt-[30px]">
                Our curated selection of talented photographers ensures that every click immortalizes 
                your special occasions with finesse and artistry. From candid shots to meticulously crafted 
                portraits, our photographers excel in bringing out the essence of each moment. 
                Say goodbye to endless searches and let us match you with the ideal photographer 
                to transform your vision into timeless memories. Book now and let us frame your story, 
                one snapshot at a time.
                </ p>
                <p className="text__para1 mt-[30px]">
                Looking for the perfect photographer for your special occasion? 
                Look no further than our photographer booking website. 
                With a diverse array of talented photographers specializing in various styles and events, 
                we make finding the ideal match a breeze. Simply browse through portfolios, read reviews, 
                and compare packages to select the photographer that best suits your needs and budget. 
                Whether it's a wedding, family portrait, corporate event, or any other special moment 
                you want to capture, our platform connects you with professionals who will turn your vision 
                into stunning photographs that you'll cherish forever. 
                Say goodbye to the hassle of endless searches and let us streamline the process, 
                leaving you with peace of mind and breathtaking memories.
                </p>
                <Link to='/'>
                    <button className="btn">Learn More</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default About
