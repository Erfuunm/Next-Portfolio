// data
const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'title',
            path: '/TestPage.png',
          },
          {
            title: 'title',
            path: '/ComparePage.jpg',
          },

        ],
      },

      {
        images: [
            {
                title: 'title',
                path: '/Comparepage2.png',
              },
              {
                title: 'title',
                path: '/PredictionPage.png',
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
  const FuturuSlider = () => {
    return (
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        //  modules={[ pagination]}
        className='xl:h-[480px] sm:h[430px] mt-[5%]  xl:mt-[100px] lg:mt-20'
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
                        <div className='md:h-[200px] h-full'>
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
  
  export default FuturuSlider;
  