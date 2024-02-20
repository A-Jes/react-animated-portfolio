import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { React, useRef } from 'react';
import "./portfolio.scss";
 


const items = [
    {
        id:1,
        title:"GPT-3",
        img:"./gpt3.png",
        desc: "This application an AI landing page interface with morden look and feel. Tecchnology used is React Js",
        link: "https://gpt-react-sand.vercel.app/"
    },
    {
        id:2,
        title:"Meme-Generator",
        img:"./meme.png",
        desc: "This application generates meme randomly getting data from an API, and user can interact with it by inputting a text that displays on the meme generated. Tecchnology used is React Js",
        link: "https://a-jes.github.io/Meme-Generator/"
    },
    {
        id:3,
        title:"Recipes Website",
        img:"./recipe.png",
        desc: "This is a search engine to get global recipes with instructions, using bootstrap Framework and JavaScript",
        link: "https://a-jes.github.io/Recipes/"
    },
    {
        id:4,
        title:"Journal",
        img:"./journal.png",
        desc: "This project diplays image, location and description of places travelled, using reusable React component",
        link: "https://a-jes.github.io/My-Journal/"
    },
]

const Single = ({item}) =>{

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ["start start", "end start"]
});

const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return(
        <section >
        <div className="container" >
        <div className="wrapper" >
        <div className="imageContainer" ref={ref} >
        <a href={item.link}><img src={item.img} alt="" /></a> 
        </div>
        <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p> 
            <a href={item.link}><button>See Demo</button></a>
        </motion.div>
        </div>
        </div>
        </section>
    )
}

const portfolio = () => {

    const ref= useRef();

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"],
});

    const scaleX = useSpring (scrollYProgress, {
        stiffness: 100,
        damping:30,
    });

  return (
    <div className='portfolio' ref={ref}>
        <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className='progressBar'></motion.div>
             </div>
             {items.map((item) => (
               <Single item={item} key={item.id} /> 
             )
             )}
        </div>
  )
}

export default portfolio