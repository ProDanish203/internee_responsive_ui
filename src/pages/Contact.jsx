import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import contactImg from "../assets/contactImg.jpg";

export const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
      })
      const formRef = useRef();
    
      const [loading, setLoading] = useState(false);
    
      const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
      }
    
      const serviceId =  "service_bg65x0d";
      const templateId = "template_m2dlv8n";
      const publicKey = "6wBqthpMqYBlmxOLU";
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(!form.name) return toast.error("Name is required");
        if(!form.email) return toast.error("Email is required");
        if(!/^[A-Z0-9._%+-@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) return toast.error("Invalid Email Address");
        if(!form.message) return toast.error("Message is required");
        try{
          setLoading(true);
          emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
          .then((result) => {
              toast.success("Your message has been sent")
          }, (error) => {
              toast.error("Something went wrong");
          });
          setForm({
            name: "",
            email: "",
            message: ""
          })
          setLoading(false);
        }catch(error){
          setLoading(false);
        }
      }

  return (
    <section id='contact' className='w-screen lg:pt-12 xs:pt-5 pt-20 md:px-32 px-4 pb-20'>
      
    <div className="w-full md:mt-20 mt-10 relative flex xl:flex-row flex-col-reverse lg:gap-2 gap-4 items-center justify-center">

    <div 
    className="content md:mr-10 md:flex-[0.7] w-full flex-1 bg-bgTertiary py-8 px-4 rounded-2xl"
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-delay="300"
    >
      
      <p className="text-gray-400 text-lg font-semibold">Get in touch</p>
      <h2 className="text-white xs:text-[35px] text-[30px] font-bold">Contact Me</h2>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-2 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
            type="text" 
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Enter Name'
            autoComplete='off'
            className='bg-bgPrimary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none md:text-md text-sm border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
            type="email" 
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Enter Email Address'
            autoComplete='off'
            className='bg-bgPrimary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none md:text-md text-sm border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
            rows={7} 
            name='message'
            value={form.message}
            autoComplete='off'
            onChange={handleChange}
            placeholder='What do you want to say?'
            className='bg-bgPrimary resize-none py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none md:text-md text-sm border-none font-medium'
            ></textarea>
          </label>

          <button
          type='submit'
          className='bg-bgSecondary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          > 
            {loading ? "Sending..." : "Send"}
          </button>

        </form>

    </div>

    <div className="xl:flex hidden flex-1 items-center justify-center lg:hidden md:h-[500px] h-[400px] relative" 
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="300">
      <img src={contactImg} alt="contact us" className='w-full max-w-[600px] h-full object-cover rounded-md'/>
    </div>

  

</div>

    </section>
  )
}
