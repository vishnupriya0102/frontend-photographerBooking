import React, { useState } from 'react'
import signup from '../assets/images/signup.gif';
import photo01 from '../assets/images/photo-1.png';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import {toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender:'',
    role:'customer'
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file)

    setPreviewURL(data.url); //not
    setSelectedFile(data.url); //not
    setFormData({ ...formData, photo: data.url });
    //later
    // console.log(data);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    //console.log(formData);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const {message}= await res.json();

      if(!res.ok){
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/login');
      
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-col-1 lg:grid-cols-2">
          {/* img */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signup} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          {/* form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor1 text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
            <div className="mb-5">
            <input
              type="text"
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-5 flex items-center justify-between">
            <label className="text-headingColor1 font-bold text-[16px] leading-7">
              Are you a:
              <select
                name="role" 
                value={formData.role}
                onChange={handleInputChange}
                className="text-textColor1 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                  <option value="photographer">Photographer</option>
                  <option value="customer">Customer</option>
                </select>
            </label>
            <label className="text-headingColor1 font-bold text-[16px] leading-7">
              Gender:
              <select
                name="gender" 
                value={formData.gender}
                onChange={handleInputChange}
                className="text-textColor1 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
            </label>
          </div>
          <div className="mb-5 flex items-center gap-3">
            { selectedFile && (
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor 
              flex items-center justify-center">
              <img src={previewURL} alt="" className="w-full h-full rounded-full" />
              </figure>
            )}
            <div className="relative w-[130px] h-[50px]">
              <input 
                type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center
              px-[0.75rem] py-[0.375rem] text-[15px] overflow-hidden bg-[#0066ff46] text-headingColor1 
              font-semibold rounded-lg leading-6 cursor-pointer">
                Upload Photo
              </label>
            </div>
          </div>
          <div className="mt-7">
            <button
              disabled={loading && true}
              type="submit"
              className="w-full bg-primaryColor text-white text-[16px] leading-[30px] rounded-lg px-4 py-3"
            >
              {loading ? <HashLoader size={35} color="#ffffff"/> : 'Sign up'}
            </button>
          </div>
          <p className="mt-5 text-textColor1 text-center">
            Already have an account? <Link to='/login' className="text-primaryColor font-medium mt-1">Login</Link>
          </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;
