import Image  from "next/image";

import Link from "next/link";

import Socials from '../components/Socials';



const Header = () => {
  return (
  <header className=' absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[120px]'>
    <div className='container mx-auto'>
      <div className=' flex flex-col lg:flex-row justify-between items-center  py-8 '>
        <Link className="mt-1" href={'/'}>
        <Image className="mt-4 " src={'/Logo2.png'} width={250} height={88} alt='' priority={true}/>
        </Link>
        <Socials />
      </div>
    </div>
  </header>
  );
};

export default Header;
