import React from 'react';
import PhotographerCard from './PhotographerCard.jsx';
import { BASE_URL } from './../../config.js';
import useFetchData from '../../hooks/userFetchData.jsx';
import Loader from './../Loader/Loading.jsx';
import Error from './../Error/Error.jsx';

function PhotographerList() {
  const [data, loading, error ] = useFetchData(`${BASE_URL}/photographers/`);

  // Log data, loading, and error for debugging purposes
  // console.log('Loading:', loading);
  // console.log('Error:', error);
  // console.log('Data:', data);

  if (loading) return <Loader />;
  if (error) return <Error />;

  // Check if data is an array and not empty
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No photographers available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {data.map((photographer) => (
        <PhotographerCard key={photographer._id} photographer={photographer} />
      ))}
    </div>
  );
}

export default PhotographerList;
