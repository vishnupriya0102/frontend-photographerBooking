import { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
import { BASE_URL, token } from '../../config';
import {toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';


const Profile = ({user}) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender:'',
    location:'',
  });

  const navigate = useNavigate();

//  console.log(user.location);
useEffect(() => {
  setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
      photo: user.photo,
      gender: user.gender,
      location: user.location
  });
}, []);


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file)

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
    // console.log(data);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      const {message}= await res.json();

      if(!res.ok){
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/users/profile/me');
      
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <div className="mt-10">
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
              aria-readonly
              readOnly
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
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-5 flex items-center justify-between">
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
            { formData.photo && (
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor 
              flex items-center justify-center">
              <img src={formData.photo} alt="" className="w-full h-full rounded-full" />
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
                {selectedFile ? selectedFile.name : 'Upload Photo'}
              </label>
            </div>
          </div>
          <div className="mt-7">
            <button
              disabled={loading && true}
              type="submit"
              className="w-full bg-primaryColor text-white text-[16px] leading-[30px] rounded-lg px-4 py-3"
            >
              {loading ? <HashLoader size={25} color="#ffffff"/> : 'Update'}
            </button>
          </div>
            </form>
    </div>
  )
}

export default Profile
