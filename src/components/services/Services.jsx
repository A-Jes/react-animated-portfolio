import { motion } from "framer-motion";
import React from 'react';
import "./services.scss";



const variants = {
    initial:{
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial="initial" animate="animate">
        <motion.div className='textContainer' variants={variants}>
            <p>I focus on helping your brand grow 
               <br/> and move forward</p> 
            <hr/>
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
            <div className="title">
                <img src="/people.webp" alt=""/>
                <h1>
                    <b>Unique</b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For Your</b> Business.
                </h1>
                <button> 
                    WHAT I DO?
                </button>
            </div>
        </motion.div>
        <motion.div className='listContainer' variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Website Development</h2><br/>
                <p>Creating visually appealing and functional websites using HTML, CSS, and JavaScript that align with client requirements and design specifications.
Ensuring websites or web applications are optimized for various devices and screen sizes, providing a seamless user experience across desktops, tablets, and mobile devices.</p><br/>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2><br/>
                <p>Following brand guidelines provided by the client or company to ensure the UI/UX reflects the intended brand personality. Ensuring consistent branding elements such as colors, typography, and logos are implemented across the site/application to maintain brand identity.</p><br/>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Debugging and Problem Solving</h2><br/>
                <p>Identifying and resolving bugs, issues, or inconsistencies in the front-end codebase. </p><br/>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Optimization and Performance Improvement</h2><br/>
                <p>Optimizing code, images, and assets to improve website loading times and overall performance.</p><br/>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div> 
    
  )
}

export default Services