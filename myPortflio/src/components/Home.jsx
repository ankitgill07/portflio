
import { Link } from 'react-router-dom'
import {motion } from "framer-motion"
import { useEffect, useRef, useState } from 'react';
import Porjects from './Porjects';


function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX, // Get mouse X position
        y: event.clientY  // Get mouse Y position
      });
    };

    // Add event listener for mousemove
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
const addAnimate = {
hidden : {
  opacity : 0 ,
   y : 100
},
show : {
  opacity : 1 ,
   y : 0,
   transition : {
    staggerChildren: 0.2, 
   duration : 1.5
   }
}
}

const animationRef = useRef(null);

useEffect(() => {
   // Automatically add the animation class when the component mounts
   animationRef.current.classList.add("circle");
}, []);

  return (
<div>
<div className="w-full cursor-default items-center min-h-screen overflow-y-hidden  overflow-x-hidden relative bg-[url('https://tamalsen.dev/wp-content/uploads/2021/07/tamalsen-home-cover.jpg')] bg-cover bg-center">
        <div className='absolute z-30 w-7 h-7 border-[#4ba7b8] border-[1px] rounded-full pointer-events-none'
           style={{
  
            left: position.x - 25, // Subtract half width for centering
            top: position.y - 25   // Subtract half height for centering
          }}>
            <div  className=' absolute top-[35%] left-[33%] rounded-full bg-[#68D9ED] w-2 h-2'>

            </div>
          </div>
          <div
      className="w-[30px] h-[30px] absolute top-[20%] left-[45%]"
      style={{ position: "absolute", top: "21%", left: "54%" }}
    >
      <div ref={animationRef} className="w-[50px] h-[50px] rounded-full"></div>
    </div>
      <div className="max-w-6xl mx-auto px-2">
        <motion.nav 
        initial={{opacity : 0 , y : -100}}
        animate={{opacity : 1 , y : 0}}
        transition={{
          duration : 1
        }}
        className="w-full flex justify-between items-center">
          <div className="mt-4">
            <Link to="/">
              <img
                src="https://raw.githubusercontent.com/procodrr/portfolio/03923dca78d059bfdf8a3fabd656deef22aa1d3a/part-1-starter-files/assets/images/name-logo-white.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="w-6 relative z-50">
            <a href="https://t.me/AnkitCoder1" target="_blank" rel="noopener noreferrer">
              <img
                src="https://raw.githubusercontent.com/procodrr/portfolio/03923dca78d059bfdf8a3fabd656deef22aa1d3a/part-1-starter-files/assets/icons/telegram.svg"
                alt=""
              />
            </a>
          </div>
        </motion.nav>
      </div>
      <motion.div 
      initial="hidden"
      animate= "show" 
      variants={addAnimate}
      className="absolute top-0 w-full min-h-screen flex justify-center items-center">
        <div>
          <div className="xl:h-[200px] lg:h-[150px] md:h-[120px] sm:h-[90px] h-[70px] text-center">
      <motion.h1 
        variants={addAnimate}
      className="xl:text-[192px] lg:text-[136px] md:text-[94px] sm:text-7xl text-6xl tracking-wide font-poppins font-extrabold uppercase text-white">
      Ankit Gill
</motion.h1> 
 </div>
          <div className="lg:mt-6 md:mt-0 w-full h-auto text-center sm:px-0 px-20">
            <motion.h5 variants={addAnimate} className="font-robotoMono tracking-widest text-2xl uppercase text-white font-medium">
              Software Engineer, Front end
            </motion.h5>
          </div>
      
        </div>
        <motion.div variants={addAnimate} className="absolute top-[33%] right-6">
          <ul className="my-4 text-[#b0b2c3] text-4xl">
            <li className="mt-6 hover:text-white transform hover:scale-105 duration-500">
              <a
                href="https://www.linkedin.com/in/ankitgill/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="mt-6 hover:text-white transform hover:scale-105 duration-500">
              <a
                href="https://x.com/Ankit9841061684"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mt-6 hover:text-white transform hover:scale-105 duration-500">
              <a
                href="https://www.instagram.com/ankit__gill_001/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mt-6 hover:text-white transform hover:scale-105 duration-500">
              <a href="gillankit076@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="far fa-envelope"></i>
              </a>
            </li>
            <li className="mt-6 hover:text-white transform hover:scale-105 duration-500">
              <a
                href="https://github.com/ankitgill07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </motion.div>
        <div className=' absolute  bottom-14 left-[50%]'> 
<button onClick={scrollToProjects} className=' w-[31px] outline-none h-[54px] border-2 border-white rounded-full'
  style={{
    animation: 'borderColorChange 3s infinite'
  }}>
<i className="fa-solid fa-arrow-down-long "></i>
</button>
        </div>
      </motion.div>
    </div>
    <section id='projects'>
      <Porjects/>
    </section>
</div>
  );
}




export default Home