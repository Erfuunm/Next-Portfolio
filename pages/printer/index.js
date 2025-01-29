

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
  FaVuejs,


} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiMongodb,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiDjango,
  SiThreedotjs,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiVuetify,

} from 'react-icons/si';
import { useState } from 'react';
import PrinterSlider from '../../components/PrinterSlider';


export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Back: ',
        icons: [

          <SiDotnet key={2} />,
          <SiCsharp key={2} />,
          <SiMicrosoftsqlserver key={2} />,

        


        ],
      },
      {
        title: 'Front:',
        icons: [
          
          
          <FaVuejs key={2} />,
          <SiVuetify key={2}/> ,
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
       <PrinterSlider />
       </motion.div>
        {/* <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left mt-[300px] -mb-[350px]  xl:mb-0 xl:mt-40 '>
          <motion.h2 variants={fadeIn('up' , 0.2)} initial='hidden' animate='show' exit='hidden'
           className='h2 xl:mt-8'>My Projects<span className='text-accent '></span></motion.h2>
          <motion.p variants={fadeIn('up' , 0.4)} initial='hidden' animate='show' exit='hidden' 
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>You can have look on some of my last Projection and there is source code for some of them in my github.</motion.p>
        </div> */}

<div class="md:flex-1 px-4 mt-[14%]">
                <h2 class="text-2xl font-bold text-white mb-2">3D insole printer</h2>
                <p class="text-gray-300 text-sm mb-4">
                a web control panel for 3D isole printers
                </p>
       
                <div class="mb-4">
                  
                           {aboutData[index].info.map((item, itemIndex) => {
                             return (
                               <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 mb-2 mt-2 '>
                                 <div className='text-white mb-2 mr-2 md:mb-0'>{item.title}</div>
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

                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-white">Publish date: </span>
                        <span class="text-gray-300"> 2025/01/10</span>
                    </div>
              
                </div>



                <div>
                    
                    <p class="text-gray-300 text-sm mt-2">
                    this control panel was a web application developed in collaboration with Tsoles Co. and Payatek to view and manage the settings of a 3D insole printer.
                   
                    </p>
                </div>
            </div>
  
      </div>
    </div>
      <Bulb />

      </div>);

    
 
};

export default Work;
