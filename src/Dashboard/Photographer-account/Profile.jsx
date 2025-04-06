import  { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";

const Profile = ({ photographerData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    bio: "",
    gender: "",
    company: "",
    ticketPrice: 0,
    portfolio: "",
    location: [{ address: "", call: "", place: "" }],
    about: "",
    photo: null,
  });
  useEffect(() => {
    setFormData({
      name: photographerData?.name,
      email: photographerData?.email,
      phone: photographerData?.phone,
      password: photographerData?.password,
      bio: photographerData?.bio,
      gender: photographerData?.gender,
      company: photographerData?.company,
      ticketPrice: photographerData?.ticketPrice,
      portfolio: photographerData?.portfolio,
      location: photographerData?.location,
      about: photographerData?.about,
      photo: photographerData?.photo,
    });
  }, [photographerData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file);

    setFormData({ ...formData, photo: data.url });
    //later
    // console.log(data);
  };

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedItems = [...prevFormData[key]];
      updatedItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updatedItems,
      };
    });
  };

  const addLocation = (e) => {
    e.preventDefault();
    addItem("location", {
      address: "",
      call: "",
      place: "",
    });
  };

  const handleLocationChange = (index, e) => {
    handleReusableInputChangeFunc("location", index, e);
  };

  const deleteLocation = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      location: prevFormData.location.filter(
        (_, locIndex) => locIndex !== index
      ),
    }));
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/photographers/${photographerData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }

      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-headingColor1 font-bold text-[24px] leading-9 mb-10">
        Profile Informations
      </h2>
      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly="true"
            disabled
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            maxLength="100"
          />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__label">Specification*</p>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Specification"
                className="form__input"
              />
            </div>
            <div>
              <p className="form__label">Ticket Price*</p>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                placeholder="100"
                className="form__input"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form__label">Portfolio</p>
          <div className="mb-[30px]">
            <div>
              <p className="form__label">Link*</p>
              <input
                type="text"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="URL"
                className="form__input"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form__label">Location</p>
          {formData.location.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <p className="form__label">Address*</p>
                    <input
                      type="text"
                      name="address"
                      value={item.address}
                      onChange={(e) => handleLocationChange(index, e)}
                      placeholder="City, State"
                      className="form__input"
                    />
                  </div>
                  <div>
                    <p className="form__label">Telephone Number*</p>
                    <input
                      type="number"
                      name="call"
                      value={item.call}
                      onChange={(e) => handleLocationChange(index, e)}
                      placeholder="9876543210"
                      className="form__input"
                    />
                  </div>
                  <div>
                    <p className="form__label">Company*</p>
                    <input
                      type="text"
                      name="place"
                      value={item.place}
                      onChange={(e) => handleLocationChange(index, e)}
                      placeholder="Company, City"
                      className="form__input"
                    />
                  </div>
                </div>
                <button
                  onClick={() => deleteLocation(index)}
                  className="bg-red-600 p-2 rounded-full text-white mt-2"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addLocation}
            className="bg-black p-2 text-white mt-2 cursor-pointer"
          >
            Add Location
          </button>
        </div>
        <div className="mb-5">
          <p className="form__label">About</p>
          <textarea
            rows="6"
            type="text"
            name="about"
            placeholder="Your about"
            className="form__input m-1"
            value={formData.about}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure
              className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor 
              flex items-center justify-center"
            >
              <img
                src={formData.photo}
                alt=""
                className="w-full h-full rounded-full"
              />
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
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center
              px-[0.75rem] py-[0.375rem] text-[15px] overflow-hidden bg-[#0066ff46] text-headingColor1 
              font-semibold rounded-lg leading-6 cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>
        <div className="mt-2">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor rounded-lg w-full p-2 text-white mt-2 cursor-pointer"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
