import me from "../assets/me.jpg"

export const About = () => {
  return (
    <section id='about' className='w-screen md:mb-20 mb-10 md:px-20 px-7'>

  <div className='lg:pt-20 xs:pt-5 pt-20'>

      <div className="w-full relative flex xl:flex-row flex-col-reverse gap-10 items-center justify-center">

      <div className="xl:flex-1 relative">
          <img src={me} alt="" className='about-img shadow-2xl sm:object-cover object-contain rounded-[10px] relative w-full sm:h-[600px] h-[250px]' />
      </div>

        <div className="xl:flex-1 md:mr-10">

          <h2 className='text-3xl text-white font-semibold'>About Me</h2>

          <p className='text-white mt-5 text-[17px]' data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
            I am a skilled Full-Stack Web Developer with over 2 years of experience, currently pursuing a Bachelor's degree in Computer Science at Bahria University Karachi, Pakistan. Fluent in both English and Urdu, I possess effective communication skills that allow me to articulate technical concepts effortlessly and work seamlessly with diverse teams and clients. My passion for web development and academic pursuits drive me to create innovative solutions that deliver exceptional user experiences.
          </p>

          <div className="sub-heading text-white font-semibold text-xl my-3 mt-5">Socials:</div>

          <div className="social-cards mt-5 flex items-center flex-wrap md:gap-4 gap-2">
            <a href="https://github.com/ProDanish203" target='_blank' rel='noreferrer'>
            <i 
            className="fab fa-github text-white md:text-2xl text-xl card w-12 text-center p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="800"
            >
            </i>
            </a>
            <a href="https://www.linkedin.com/in/danish-siddiqui-" target='_blank' rel='noreferrer'>

            <i 
            className="fab fa-linkedin text-white w-12 text-center md:text-2xl text-xl card p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="800"
            >
            </i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100036046420220&mibextid=ZbWKwL" target='_blank' rel='noreferrer'>
            <i 
            className="fab fa-facebook-f text-white w-12 text-center md:text-2xl text-xl card p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
            >
            </i>
            </a>
            <a href="https://www.instagram.com/doesnt.matter.o_o/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank' rel='noreferrer'>
            <i 
            className="fab fa-instagram text-white w-12 text-center md:text-2xl text-xl card p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="550"
            data-aos-duration="800"
            >
            </i>
            </a>

            <a href="https://twitter.com/dewhehe_sh?t=7fs2p1eqBzdewdrod7MLVw&s=08" target='_blank' rel='noreferrer'>
            <i 
            className="fab fa-twitter text-white w-12 text-center md:text-2xl text-xl card p-3 bg-bgSecondary rounded-xl shadow-xl hover:shadow-2xl cursor-pointer" 
            data-aos="fade-left"
            data-aos-delay="700"
            data-aos-duration="800"
            >
            </i>
            </a>

          </div>

        </div>

        

      </div>
    </div>
    </section>
  )
}
