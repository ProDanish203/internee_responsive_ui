import { projects } from "../assets/data";
import { Heading } from "../components";

export const Projects = () => {
  return (
    <section id='projects' className='w-screen min-h-screen md:px-20 px-7'>

      <div className='lg:pt-20 xs:pt-5 pt-20'>

      <Heading title="My Projects"/>

      <div className="project-cards relative w-full gap-10 flex flex-wrap justify-center items-center mt-10">
      {
        projects.map((item, index) => (
          <div 
          key={index} 
          className="card p-4 min-w-52 max-w-[350px] relative bg-bgSecondary rounded-xl"
          data-aos="fade-up"
          data-aos-delay={100 * index}
          data-aos-duration="800"
          >

        <div className="img mb-4">
          <img src={item.img} alt={item.title} className='w-full h-[200px] object-contain rounded-2xl' />
        </div>

        <p className='md:text-2xl text-[22px] text-white'>{item.title}</p>
        <p className='text-gray-400 sm:text-[16px] text-[15px] mt-2'>
          {item.desc}
        </p>

         <a href={item.demo} target='_blank' rel='noreferrer'>
          <button className='bg-bgPrimary w-full md:py-3 py-2.5 rounded-lg mt-3 text-white md:text-xl text-lg cursor-pointer'>Demo</button>
        </a> 

        </div>
        ))
      }
      

        

      </div>

      </div>
    </section>
  )
}
