// data
const workSlides = {
    slides: [
      {
        images: [

            {
                title: 'title',
                path: '/printer/jobqueue.jpg',
              },
              {
                title: 'title',
               
                path: '/printer/Dash1.jpg',
              
              },
 

        ],
      },

      {
        images: [

            {
                title: 'title',
                path: '/printer/jobqueue2.jpg',
              },

            {
                title: 'title',
                path: '/printer/Dash2.png',
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
  
  import { pagination } from 'swiper';
  
  import { BsArrowRight } from 'react-icons/bs'
  
  import Image from 'next/image';
import { SiDjango } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
  const PrinterSlider = () => {
    return (
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        //  modules={[ pagination]}
        className='h-[580px] sm:h[480px]  mt-[400px] lg:mt-20'
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
                        <div className='md:h-[280px] h-full'>
                          <Image src={image.path} width={500} height={220} alt='' />
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
  
  export default PrinterSlider;
  