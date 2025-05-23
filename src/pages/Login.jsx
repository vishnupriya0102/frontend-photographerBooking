import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {BASE_URL} from '../config.js';
import { toast } from "react-toastify";
import { AuthContext } from '../context/AuthContext.jsx';
import  HashLoader  from 'react-spinners/HashLoader'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    //console.log(formData);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result= await res.json();

      if(!res.ok){
        throw new Error(result.message);
      }

      // console.log(
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token: result.token,
          user: result.data,
          role: result.role,
        }
      })
    // )
      console.log(result, "login data");

      setLoading(false);
      toast.success(result.message);
      navigate('/');
      
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor1 text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[16px] leading-[30px] rounded-lg px-4 py-3"
            >
              {loading ?<HashLoader size={25} color='#fff' />:'Login'}
            </button>
          </div>
          <p className="mt-5 text-textColor1 text-center">
            Don't have an account? <Link to='/register' className="text-primaryColor font-medium mt-1">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
