

import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'



const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36  flex items-center'>
    <Circles />
    <div className=' container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 -mt-10 xl:mb-0 xl:mt-0'>
          <motion.h2 variants={fadeIn('up' , 0.2)} initial='hidden' animate='show' exit='hidden'
           className='h2 mt-[25%] xl:mt-8'>My Services<span className='text-accent '></span></motion.h2>
          <motion.p variants={fadeIn('up' , 0.4)} initial='hidden' animate='show' exit='hidden' 
          className='xl:mb-4 max-w-[400px] mx-auto lg:mx-0'>Here is some of the Services wich you can expect me to do for your self. for the item wich doesnt exist in this list contact me .</motion.p>
        </div>
       <motion.div variants={fadeIn('down' , 0.6)} initial='hidden' animate='show' exit='hidden'
       className=' w-full xl:max-w-[65%]'>
       <ServiceSlider />
       </motion.div>
      </div>
    </div>
      <Bulb />

      </div>);

    
 
};

export default Services;
