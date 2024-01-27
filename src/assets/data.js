import { cmpHome, bloggerHome, summarizerDS, portfolio, landing, twitterHome } from "./index";
// // Services Images
import { responsive,seo, webDesign } from "./index";

export const navLinks = [
    {
        name: "Home",
        link: "home",
        delay: 250,
    },
    {
        name: "About",
        link: "about",
        delay: 400,
    },
    {
        name: "Services",
        link: "services",
        delay: 550,
    },
    {
        name: "Projects",
        link: "projects",
        delay: 700,
    },
    {
        name: "Contact",
        link: "contact",
        delay: 850,
    },
]

export const projects = [
    {
        img: summarizerDS,
        title: "SummarizerDS",
        desc: "A React AI Application that takes url of any blog or article as an input from the user then creates a summmary for the article itself using Artificial Intelligence",
        link: "https://summarizerds.web.app/",
        demo: 'https://summarizerds.web.app/'
    },
    {
        img: portfolio,
        title: "Portfolo Website",
        desc: "A complete portfolio website that showcases the bussiness and person's information and details with responsive and interactive design, built from scratch.",
        link: "https://uzairfaseeh-d3959.web.app/",
        demo: "https://uzairfaseeh-d3959.web.app/",
    },
    {
        img: landing,
        title: "Landing Page",
        desc: "A Portfolio landing page with great and smooth animations to display a person or bussines's information, built from scratch with HTML,CSS and JS",
        link: "https://prodanish203.github.io/portfolioHeroSectionCSS/",
        demo: "https://prodanish203.github.io/portfolioHeroSectionCSS/",
        code: "https://github.com/ProDanish203/portfolioHeroSectionCSS"
    },
    {
        img: twitterHome,
        title: "TwitterDS",
        desc: "A Fullstack fully functional, Twitter clone made with the help of Nextjs implemeting the Server actions and th latest app directory",
        demo: "https://twitterds.vercel.app",
        code: "https://github.com/ProDanish203/twitter"
    },
    {
        img: bloggerHome,
        title: "BloggerDS",
        desc: "A Fullstack Bloggin website built on top of Nextjs, implemeting Server actions for robust backend system ",
        demo: "https://bloggerds.vercel.app",
        code: "https://github.com/ProDanish203/Blogger"
    },
    {
        img: cmpHome,
        title: "Choose My Power",
        desc: "Choose My Power is my professional project used to compare electricty providers in the state",
    },
]

export const servicesData = [
    {
        title: "Full-stack Development",
        desc: "I offer comprehensive Full-Stack Web Development services, creating modern and engaging websites and applications. With expertise in frontend and backend technologies, I deliver seamless user experiences and efficient functionality to meet your unique business needs.",
        img: responsive 
    },
    {
        title: "Web Design",
        desc: "As a Frontend Web Developer, I specialize in crafting responsive and visually captivating designs that adapt flawlessly across all devices. My focus on user-centric experiences ensures your website leaves a lasting impression on visitors and promote your digital presence in efficient mannner.",
        img: webDesign 
    },
    {
        title: "SEO Optimization",
        desc: "I specialize in building web applications that achieve SEO optimization, ensuring your digital presence ranks higher and attracts a broader audience. With a strategic approach and technical expertise, I enhance your online visibility and drive organic traffic to your platform.",
        img: seo 
    }
]