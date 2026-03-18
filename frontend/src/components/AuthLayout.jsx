import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div className='flex h-screen overflow-hidden'>
        <div className='w-full md:w-1/2 overflow-y-auto my-auto'>
        <div className='min-h-full flex flex-col px-12 pt-8 pb-12 '>
            <div className='flex-grow flex items-center justify-center'> {children}</div>
        </div>
        </div>
        <div className='hidden md:block w-1/2'>
        <img 
        src='https://i.pinimg.com/736x/d9/7c/e8/d97ce8ea6553220088ccecbb551c12f5.jpg'
        alt='login background'
        className='h-full w-full object-cover'
        />
        </div>
    </div>
  )
}
