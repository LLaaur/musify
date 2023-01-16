import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { links } from '../assets/constants'
import { HiOutlineMenu } from 'react-icons/hi';

const NavLinks = ({handleClick}) => {


  return (
    <div className="mt-10">
      {links.map((item) => (
        <NavLink className='flex flex-row justify-start text-sm my-8 font-medium text-gray-200 hover:text-cyan-300'
                  key={item.name}
                  to = {item.to}
                  onClick = {() => handleClick && handleClick()}>
          <item.icon className='w-6 h-6 mr-2'/>
          {item.name}

        </NavLink>
      ))}
    </div>
  )

}

const Sidebar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>

      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#1d192c]'>
        <img src="" alt="logo" className='w-full h14 object-contain' />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? 
        <RiCloseLine className="w-6 h-6 text-white mr-2"
          onClick={() => setMobileMenuOpen(false)} />
          :
          <HiOutlineMenu className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)} />}
      </div>

      <div className={`absolute top-0 h-screen w-2/4 bg-gradient-to-tr from-white/10 to-[#2b1f78] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src="" alt="logo" className='w-full h14 object-contain' />
        <NavLinks 
          handleClick={() => setMobileMenuOpen(false)}
        />
      </div>

    </>
  )

};

export default Sidebar;
