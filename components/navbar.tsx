'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './button'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <nav className={`w-full  flexBetween fixed z-50  sm:px-20 px-0  py-3 ${
        isScrolled ? 'bg-green-100' : 'bg-transparent'
      } transition-colors duration-300`}>
        <Link href='/'>
            <h1 className='text-2xl font-bold text-teal-500'>Travel<span className='text-black'>eon.</span></h1>
        </Link>
        <ul className='hidden h-full gap-10 lg:flex '>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 '>
                    {link.label}
                </Link>
            ))}
        </ul>
        
        <div className='lg:flexCenter hidden'>
            <Button
                type='button'
                title='Login'
                icon='/user.svg'
                variant='btn_dark_green'
            />
        </div>

        <Image src='menu.svg' alt='menu' width={32} height={32} className='inline-block cursor-pointer lg:hidden'/>
    </nav>
  )
}

export default Navbar