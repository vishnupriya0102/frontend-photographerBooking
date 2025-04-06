import React, { useEffect, useState } from "react";
import PhotographerCard from "../../components/Photographers/PhotographerCard";
import { BASE_URL } from "./../../config.js";
import useFetchData from "../../hooks/userFetchData.jsx";
import Loader from "./../../components/Loader/Loading.jsx";
import Error from "./../../components/Error/Error.jsx";

const Photographer = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const handleSearch = () => {
    setQuery(query.trim);

    console.log("handle search");
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);
    return () => clearTimeout(timeout);
  }, [query]);
  const [data, loading, error] = useFetchData(
    `${BASE_URL}/photographers?query=${debounceQuery}`
  );

  return (
    <>
      <section className="bg-yellow-50">
        <div className="container text-center">
          <h2 className="heading1">Find a Photographer</h2>
          <div className="max-w-[570px] mt-[370] mx-auto bg-[#0066ff2c] rounded-md flex item-center justify-between">
            <input
              type="search"
              placeholder="Search photographer by name or specification"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textcolor1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-auto rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="px-10">
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 ">
              {data.map((photographer) => (
                <PhotographerCard
                  key={photographer._id}
                  photographer={photographer}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Photographer;
