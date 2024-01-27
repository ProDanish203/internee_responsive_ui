import { useAppContext } from '../context/AppContext';
import { navLinks } from "../assets/data";
import logo from "../assets/logo.png";

export const Header = () => {

    const { navbar, setNavbar } = useAppContext();        

  return (
    <>
    <header className={`fixed ${navbar && "bg-bgPrimary"} bg-bgPrimary shadow-2xl overflow-hidden z-40 py-4 md:px-20 px-10 w-screen flex items-center justify-between`}>

        <div className="logo text-white font-bold" data-aos="fade-up" data-aos-delay="1800" data-aos-duration="1000">    
        {/* eslint-disable-next-line */}
            <a href="#">
            <img src={logo} className='md:w-[120px] w-[100px] cursor-pointer' alt="logo" />
            </a>
        </div>

        <button 
        className={`menu-btn ${navbar && 'active'} bg-transparent text-white hover:text-contrast text-[18px]`}
        onClick={() => {setNavbar(prev => !prev)}}
        data-aos="fade-up"
        data-aos-delay="1800"
        data-aos-duration="1000"
        >
            <span 
            data-text="Close"
            onClick={() => {}}
            >Menu</span>
        </button>

        {navbar && (
            <div className={`bg-black fixed top-0 -z-50 left-0 w-screen h-screen flex items-center justify-start overflow-hidden xl:px-52 lg:px-36 px-5 max-md:px-7 max-lg:px-16`}>

            <nav className='w-full h-full overflow-hidden flex items-center justify-center flex-col gap-2'>
        
                {navLinks.map((link, index) => (
                <a
                href={`/#${link.link}`} 
                key={index} 
                className='md:text-6xl text-4xl font-bold py-5 cursor-pointer text-white border-b-2 border-secondary hover:text-contrast w-full' 
                data-aos="fade-up"
                data-aos-delay={link.delay}
                onClick={() => setNavbar(false)}
                >
                    {link.name}
                </a> 
                ))}
                </nav>
            </div>
            )
        }
        

    </header>
    </>
  )
}
