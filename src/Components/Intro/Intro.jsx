import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/pc.png';
import Crown from '../../img/mobile1.png';
import glassesimoji from '../../img/glassesimoji.png'; 
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {useContext} from "react";
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

function Intro() {
    const transition = {duration : 2, type: "spring"}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white': ''}}>Hey ! We are </span>
            <span>RED-KAS</span>
            <span>Frontend Developer with high level of experiences
            in web designing and development, producting the quality work
            </span>
        </div>
         <button className="button i-button">Hire me</button>  
         <div className="i-icons">
             <a href="https://github.com/redkas26">
                 <img src={Github} alt="" />
             </a>
             
             <img src={LinkedIn} alt="linkedin" />
             <img src={Instagram} alt="instagram" />
             </div> 
        </div>
        <div className="i-right">
            <img src={Vector1} alt='vec1' />
            <img src={Vector2} alt='vec2' />
            <img style={{width: 350, height: 200, left:'3.5rem', marginTop: '6rem'}} src={boy} alt='boy' />
            <motion.img 
            initial={{ left:'-36%' }}
            whileInView={{left: '-24%'}}
            transition={transition}
            
            src={glassesimoji} alt='imoji' 
            />
            <motion.div 
            initial={{top: '-4%', left:'74%' }}
            whileInView={{left: '68%'}}
            transition={transition}

            style={{top: '-4%', left: '68%'}}
            className='floating-div'
            >
                
                <FloatingDiv image={Crown} txt1='Mobile' txt2='Developer'/>
            </motion.div>
            <motion.div 
            initial= {{left: "9%", top: "18rem"}}
            whileInView= {{left: '0rem'}}
            transition={transition}
            
            style={{top: '18rem', left: '0rem'}}
            className='floating-div' 
            >
                <FloatingDiv image={thumbup} txt1='Web' txt2='Developer' />
            </motion.div>
            {/* blur */}
            <div className='blur' style={{ background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{ background: '#c1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem',
            }}></div>
            </div>
    </div>
        
  )
}

export default Intro