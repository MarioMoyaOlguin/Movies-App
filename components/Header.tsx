import Image from 'next/image'
import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import BasicMenu from './BasicMenu';

const Header = () => {

  const {logout} = useAuth()
  const [isScrolled, IsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        IsScrolled(true)
      } else {
        IsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

  
  return (
    
    <header className={`${isScrolled && "bg-[#141414]"}`}>

      <div className='flex items-center space-x-2 md:space-x-10'>
        
        <h1 className='text-3xl text-red-600 font-bold'>Movie App</h1>
      
        <BasicMenu />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New &#38; Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
          <SearchIcon className='hidden sm:inline w-6 h-6' />
          <p className='hidden lg:inline'>Kids</p>
          <BellIcon className='hidden sm:inline w-6 h-6' />
          <div className='flex items-center'>
            {/* <Link href="/account"> */}
              <Image
                onClick={logout}
                src={"https://drive.google.com/uc?id=12u7XKbjpcNIeu9RTc6qeJt6oh2y19b0n"}
                alt=" "
                width={32}
                height={32}
                className='cursor-pointer rounded'
              />
            {/* </Link> */}
          </div>
      </div>
      
        
    </header>
  )
}

export default Header