import React from 'react'
import ServiceList from '../components/Services/ServiceList';
function Service() {
  return (
    
  <section className="px-10">
  <div className="container">
    <div className="lg:w-[470px] mx-auto">
      <h2 className="heading1 text-center">
        Our Assistance
      </h2>
      <p className="text__para1 text-center">
      Explore our captivating array of diverse and stunning photo selections, 
      each guaranteed to captivate your imagination and elevate your visual experience.
      </p>
    </div>
    <ServiceList />
  </div>
</section>
  )
}

export default Service
