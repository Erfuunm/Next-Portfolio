// data
const workSlides = {
    slides: [
      {
        images: [

            {
                title: 'title',
                path: '/printer/jobqueue.jpg',
              },
          
        ],
      },
      


      {
        images: [

          {
            title: 'title',
            path: '/printer/jobqueue2.jpg',
          },
        ],
      },

      {
        images: [


          {
            title: 'title',
           
            path: '/printer/Dash1.jpg',
          
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

  const PrinterSlider = () => {
    return (
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        //  modules={[ pagination]}
        className='h-[430px] sm:h[480px] mt-[25%]  xl:mt-[130px] lg:mt-20'
      >
        {
          workSlides.slides.map((slide, index) => {
  
            return (
              <SwiperSlide key={index}>
                <div className='flex items-center justify-center mt-10 gap-4 cursor-pointer '>
                  {slide.images.map((image, index) => {
                    return <div className='relative rounded-lg overflow-hidden flex items-center justify-center 
                    group' key={index}>
                      <div className='flex items-center justify-center relative overflow-hidden group '>
                        <div className=' h-full'>
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
  