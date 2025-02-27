

import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import {
  FaPython,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiMongodb,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiDjango,
  SiThreedotjs,
} from 'react-icons/si';
import { useState } from 'react';
import SmartSlider from '../../components/SmartSlider';
import TsolesSlider from '../../components/TsolesSlider';

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Back: ',
        icons: [

          <SiDjango key={2} />,
          <FaPython key={2} />,
          <SiMongodb key={2} />,

        


        ],
      },
      {
        title: 'Front:',
        icons: [
          
          
          <SiNextdotjs key={2} />,
          <SiThreedotjs key={2}/> ,
          <SiReactquery key={2} />,
          <SiRedux key={2} />,          
          <SiTailwindcss key={2} />,
         
         
          ],

      },

    ],
  },



];

const Work = () => {

    const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-36  flex items-center'>
    <Circles />
    <div className=' container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
      <motion.div variants={fadeIn('down' , 0.6)} initial='hidden' animate='show' exit='hidden'
       className=' w-full  xl:max-w-[50%] -mt-[7%]'>
      <TsolesSlider />
       </motion.div>
        {/* <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left mt-[300px] -mb-[350px]  xl:mb-0 xl:mt-40 '>
          <motion.h2 variants={fadeIn('up' , 0.2)} initial='hidden' animate='show' exit='hidden'
           className='h2 xl:mt-8'>My Projects<span className='text-accent '></span></motion.h2>
          <motion.p variants={fadeIn('up' , 0.4)} initial='hidden' animate='show' exit='hidden' 
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>You can have look on some of my last Projection and there is source code for some of them in my github.</motion.p>
        </div> */}

<div class="md:flex-1 px-4 mt-10 xl:mt-[15%]">
                <h2 class="text-2xl font-bold text-white mb-2">Tsoles Admin Panel</h2>
                <p class="text-gray-300 text-sm mb-4">
                 this panel is use for managing Tsoles users account
                </p>
       
                <div class="mb-4">
                  
                           {aboutData[index].info.map((item, itemIndex) => {
                             return (
                               <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 mb-2 mt-2 '>
                                 <div className='text-white mb-2 mr-2 md:mb-0 hidden xl:block'>{item.title}</div>
                                 <div className=' hidden md:flex'></div>
                                 <div>{item.stage}</div>
                                 <div className=' flex gap-x-4 '>
               
                                   {item.icons?.map((icon, itemIndex) => {
                                     return <div className='text-2xl text-white' key={itemIndex}>{icon}</div>
                                   })}
               
               
                                 </div>
                               </div>
                             );
                           })}
                </div>

                <div class="xl:flex mb-4 hidden">
                    <div class="mr-4">
                        <span class="font-bold text-white">Publish date: </span>
                        <span class="text-gray-300"> 2024/08/12</span>
                    </div>
              
                </div>



                <div className='hidden xl:block'>
                    
                    <p class="text-gray-300 text-sm mt-2">
                    Insole Design is a desktop software licensed by Tsoles and Payatek that allows its users to modify and personalize their designed insoles.
                    This panel manages the data of each account related to this software and allows users to make a series of changes to the saved scans.
                    </p>
                </div>
            </div>
  
      </div>
    </div>
      <Bulb />

      </div>);

    
 
};

export default Work;
