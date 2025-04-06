import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo1.png';
import { RiLinkedinFill }from 'react-icons/ri';
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiOutlineInstagram } from 'react-icons/ai';

const SocailLinks = [
  {
    path: "vishnupriya.s2021csec@sece.ac.in",
    icon: <AiFillGoogleCircle className="text-white group-hover:text-black w-4 h-5"/>,
  },
  {
    path: "https://www.linkedin.com/in/vishnu-priya-s-059134278/",
    icon: <RiLinkedinFill className="text-white group-hover:text-black w-4 h-5"/>,
  },
  {
    path: "https://github.com/vishnupriya0102",
    icon: <AiFillGithub className="text-white group-hover:text-black w-4 h-5"/>,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100069731765069",
    icon: <AiFillFacebook className="text-white group-hover:text-black w-4 h-5"/>,
  },
  {
    path: "https://www.instagram.com/pir__vis/",
    icon: <AiOutlineInstagram className="text-white group-hover:text-black w-4 h-5"/>,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About",
  },
  {
    path: "/service",
    display: "Services",
  },
  {
    path:"/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path:'/photographer',
    display:'Find a Photographer'
  },
  {
    path:"/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a location",
  },
  {
    path: "/",
    display: "Get virtual conference",
  },
];
const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path:"/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-white pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img className="w-32 h-10" src={Logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright @ {year} developed by Vishnu Priya all right reserved
            </p>
            <div className="flex items-center gap-3 mt-4">
              {SocailLinks.map((link, index)=>(
                <Link 
                to={link.path} 
                key={index}
                className="w-9 h-9 border border-solid border-primaryColor rounded-full flex items-center justify-center group hover:bg-white "
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
