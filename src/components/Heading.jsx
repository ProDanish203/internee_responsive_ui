import React from 'react'

export const Heading = ({ title }) => {
  return (
    <div 
    className='heading sm:text-5xl text-4xl mb-10 font-semibold text-center text-white'
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="100"
    >
        {title}
    </div>
  )
}
