import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Import useRouter

// Data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/TestPage.png',
          href: '/futuru-proj',
        },

        {
          title: 'title',
          path: '/smart-unit/Dash2.png',
          href: '/smartunits',
        },

   
        {
          title: 'title',
          path: '/printer/Dash2.png',
          href: '/printer',
        },
    
        {
          title: 'title',
          path: '/tsoles-panel/Dash1.png',
          href: '/tsoles',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb13.jpg',
          
        },
        {
          title: 'title',
          path: '/smart.jpg',
          
        },
        {
          title: 'title',
          path: '/smart2.jpg',
       
        },
        {
          title: 'title',
          path: '/thumb44.jpg',
         
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const router = useRouter(); // Initialize the router

  // Function to handle the click and redirect
  const handleRedirect = (href) => {
    router.push(href); // Navigate to the specified href
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[480px] sm:h[480px] mt-[400px] lg:mt-20'
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-row-2 mt-10 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => (
              <div
                className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                key={index}
                onClick={() => handleRedirect(image.href)} // Add onClick handler
              >
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  <div className='md:h-[180px] h-full'>
                    <Image src={image.path} width={500} height={150} alt='' />
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      <div className='delay-100'>Live</div>
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                        Project
                      </div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;