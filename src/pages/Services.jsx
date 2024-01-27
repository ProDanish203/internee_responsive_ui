import { servicesData } from "../assets/data";
import { Heading } from "../components";

export const Services = () => {
  return (
    <section id='services' className='w-screen min-h-[70vh] md:px-20 px-7'>

    <div className='lg:pt-20 xs:pt-5 pt-20'>

    <Heading title="My Services"/>

    <div className="project-cards relative w-full gap-10 flex flex-wrap justify-center items-center mt-10">
    {
    servicesData.map((item, index) => (
        <div 
        key={index} 
        className="card card-hover p-4 min-w-52 max-w-[350px] relative bg-bgSecondary rounded-xl"
        data-aos="fade-up"
        data-aos-delay={100 * index}
        data-aos-duration="800"
        >

    <div className="img mb-4">
        <img src={item.img} alt={item.title} className='w-full h-[120px] object-contain rounded-2xl' />
    </div>

    <p className='md:text-2xl text-lg text-white text-center my-2'>{item.title}</p>
    <p className='text-gray-400 sm:text-[16px] text-[15px] mt-2'>
        {item.desc}
    </p>

    </div>
    ))
    }
    

    </div>

    </div>
    </section>
  )
}
