import React from 'react'
import { BASE_URL,token } from './../../config';
import {toast} from 'react-toastify';

const SidePanel = ({photographerId, ticketPrice, timeSlots}) => {
    const bookingHandler = async()=> {
        try {
            const res = await fetch(`${BASE_URL}/booking/checkout-session/${photographerId}`,{
                method: 'POST',
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            const date = await res.json();

            if(!res.ok){
                throw new Error(date.message);
            }
            if(date.session.url){
                window.location.href=date.session.url;
            }
        } catch (err) {
            // console.log(err);
            toast.error(err.message);
        }
    }
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para1 mt-0 font-semibold">
            Ticket Price
        </p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor1 font-bold">
            {ticketPrice} Rs
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para1 mt-0 font-semibold text-headingColor1">
            Available Time Slots:
        </p>
        <ul className="mt-3">
            <li className="flex items-center justify-between mb-2">
                <p className="text-[15px] leading-6 text-textColor1 font-semilbold">
                    Sunday
                </p>
                <p className="text-[15px] leading-6 text-textColor1 font-semilbold">
                    6:00 AM - 9:00 PM
                </p>
            </li>
            <li className="flex items-center justify-between mb-2">
                <p className="text-[15px] leading-6 text-textColor1 font-semilbold">
                    Mon-Fri
                </p>
                <p className="text-[15px] leading-6 text-textColor1 font-semilbold">
                    6:00 AM - 8:00 PM
                </p>
            </li>
            <li className="flex items-center justify-between mb-2">
                <p className="text-[15px] leading-6 text-textColor1 font-semilbold">
                    Saturday
                </p>
                <p className="text-[15px] leading-6 text-textColor1 font-semilbold">
                    9:00 AM - 8:00 PM
                </p>
            </li>
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">Booking</button>
    </div>
  )
}

export default SidePanel
