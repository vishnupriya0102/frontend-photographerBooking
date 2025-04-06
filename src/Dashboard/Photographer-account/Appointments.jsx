import React from 'react';
import { formateDate } from '../../utils/formateDate'; // Ensure correct import

const Appointments = ({ appointments }) => {
  console.log(appointments);

  return (
    <table className='w-full text-left text-sm text bg-gray-100'>
      <thead className='text-xs uppercase bg-primaryColor text-white'>
        <tr>
          <th className='py-3 px-6'>Name</th>
          <th className='py-3 px-6'>Payment</th>
          <th className='py-3 px-6'>Price</th>
          <th className='py-3 px-6'>Appointment on</th>
        </tr>
      </thead>
      <tbody>
        {appointments?.length > 0 ? (
          appointments.map(item => (
            <tr key={item._id}>
              <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
                <img src={item.user?.photo || 'default-photo-url'} alt="" className='w-10 h-10 rounded-full' />
                <div className='pl-3'>
                  <div className="text-base font-semibold">{item.user?.name || 'No Name'}</div>
                  <div className="text-normal text-gray-500">{item.user?.email || 'No Email'}</div>
                </div>
              </th>
              <td className='px-6 py-4'>
                {item.isPaid ? (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Paid
                  </div>
                ) : (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    Unpaid
                  </div>
                )}
              </td>
              <td className='px-6 py-4'>{item.ticketPrice || 'N/A'}</td>
              <td className='px-6 py-4'>{formateDate(item.createdAt) || 'Invalid Date'}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center py-4">
              No appointments available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Appointments;
