

import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import FuturuSlider from '../../components/FuturuSlider';


import {

  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaMicrosoft,
  FaPython,


} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiCsharp,
  SiCplusplus,
  SiMongodb,
  SiReactquery,
  SiMicrosoftsqlserver,
  SiRedux,
  SiLinux,
  SiDotnet,
  SiBlazor,
  SiFramer,
  SiAdobephotoshop,
  SiTailwindcss,
  SiDjango,
  SiThreedotjs,

} from 'react-icons/si';
import { useState } from 'react';


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
       className=' w-full  xl:max-w-[50%]  xl:-mt-[7%]'>
       <FuturuSlider />
       </motion.div>


<div class="md:flex-1 px-4 -mt-[2%] xl:mt-[12%]">
                <h2 class="text-2xl font-bold text-white mb-2 mt-6 xl:mt-0">FuturU Web App</h2>
                <p class="text-gray-300 text-sm mb-4">
              3D sccaner app wich will help users to manage their 3D body scans
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

                <div class="xl:flex mb-4 hidden ">
                    <div class="mr-4">
                        <span class="font-bold text-white">Publish date: </span>
                        <span class="text-gray-300"> 2024/10/24</span>
                    </div>
              
                </div>



                <div className='hidden xl:block'>
                    
                    <p class="text-gray-300 text-sm mt-2">
                    The FuturU app was a web application developed in collaboration with FuturU and Payatek to view and manage scans made by the PT-3D device.
                    The app is able to predict the shape and structure of individuals bodies by running an algorithm based on weight and muscle mass.
                    </p>
                </div>
            </div>
  
      </div>
    </div>
      <Bulb />

      </div>);

    
 
};

export default Work;
