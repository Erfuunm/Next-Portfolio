// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/smart-unit/Dash2.png',
          
        },
        {
          title: 'title',
          
          path: '/smart-unit/Dash1 - Copy.png',
        },

      ],
    },



  ],
};







// data

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import Image from 'next/image';

const SmartSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      //  modules={[ pagination]}
      className='h-[580px] sm:h[480px]  mt-[400px] lg:mt-36'
    >
      {
        workSlides.slides.map((slide, index) => {

          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-1 grid-row-1 mt-10 gap-4 cursor-pointer '>
                {slide.images.map((image, index) => {
                  return <div className='relative rounded-lg overflow-hidden flex items-center justify-center 
                  group' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden group '>
                      <div className=' h-full'>
                        <Image src={image.path} width={500} height={200} alt='' />
                      </div>


                    
                    
                    </div>
                  </div>
                })}
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default SmartSlider;
