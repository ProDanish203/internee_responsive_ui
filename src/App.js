import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header, Footer, Loading } from './components';
import { About, Banner, Contact, Projects, Services } from "./pages";
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';

function App() {

  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
  <>
    <div className={`${loading ? "": "hide-loader"}`}>
      <Loading/>
    </div>

    <div className="container w-screen min-h-screen">
      <Toaster position='top-right' richColors/>
      <div className="hero w-screen min-h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat">

        <Header/>
        <div className='py-10'>
          <Banner/>
        </div>
        
      </div>

      <div className="min-h-screen pt-20 flex flex-col gap-2 w-screen bg-bgPrimary">
        
        <About/>
        {/* <Skills/> */}
        <Services/>
        <Projects/>
        <Contact/>

        <Footer/>
        
      </div>

    </div>
  
  </>
  );
}

export default App;
