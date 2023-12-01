import { motion } from "framer-motion";
import Sidebar from "../Siderbar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className='navbar' >
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper" >
                <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
                >A_JES DEV</motion.span>
                <motion.div 
                className='social' 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
                >
                     <a href='https://twitter.com/Ajes575'><img src='/twitter.png' alt='' /></a>  
                     <a href='https://instagram.com/ajes575?igshid=OGQ5ZDc2ODk2ZA=='><img src='/instagram.png' alt='' /></a>  
                     <a href='https://youtube.com/@ajes8597?feature=shared'><img src='/youtube.png' alt='' /></a>  
                     <a href='https://github.com/A-Jes'><img src='/GitHub.png' alt='' /></a>  
                </motion.div>
            </div>
        </div>
      )
}
 

export default Navbar;