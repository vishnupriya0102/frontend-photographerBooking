import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({item, index}) => {
    const{name, url, desc ,bgColor , textColor}= item
  return (
    <div className="py-[30px] px-3 lg:px-5">
        <h2 className="text-[26px] leading-9 font-[700] text-heading1">{name}</h2>
        <div className={url}></div>
        <p className="text-textColor1 text-[16px] leading-7 font-[400]">{desc}</p>
        <div className="flex items-center justify-center mt-[30px]">
        <Link to='/photographer' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
        mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] "
        style={{background: bgColor,
        color: textColor, 
        borderRadius:"6px 0 0 6px",
        }}>
            {index + 1}
        </span>
        </div>
    </div>
  )
}

export default ServiceCard;
