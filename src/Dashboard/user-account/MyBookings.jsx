import userFetchData from "../../hooks/userFetchData"
import { BASE_URL } from "../../config"
import PhotographerCard from "../../components/Photographers/PhotographerCard.jsx"
import Loading from "../../components/Loader/Loading"
import Error from "../../components/Error/Error"

const MyBookings = () => {
  const [appointments, loading, error] =userFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {appointments.map(photographer => (
          <PhotographerCard photographer={photographer} key={photographer._id} />
        ))}
        </div>}
        {!loading && !error && appointments.length === 0 && (
          <h2 className="mt-5 text-center text-primaryColor text-[20px] leading-9 font-semibold">
            You have no bookings yet
          </h2>
        )}
    </div>
  )
}

export default MyBookings
