import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './button'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='/'>
            <h1 className='text-4xl font-bold text-teal-500'>Travel<span className='text-black'>eon.</span></h1>
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