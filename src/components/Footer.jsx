import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-slate-50 pt-10 sm:pt-10 mt-20 sm:mt-20 px-4 sm:px-10 lg:px-24 xl:px-40 '>

<div className='flex justify-between lg:items-center max-lg:flex-col gap-10 '>
<div className='space-y-5 text-sm text-gray-700 '>
    <img src={assets.logo} className='w-32 sm:w-44' alt="" />
    <p className='max-w-md'>From strategy to execution, we craft digital solution that move your business forward.</p>
    <ul className='flex gap-8'>
        <li><a href="#hero" className='hover:text-primary'>Home</a></li>
        <li><a href="#services" className='hover:text-primary'>Services</a></li>
        <li><a href="#our-work" className='hover:text-primary'>Our Work</a></li>
        <li><a href="#contact-us" className='hover:text-primary'>Contact Us</a></li>
    </ul>
</div>
<div className='text-gray-600 '>
  <h3 className='font-semibold'>Subscribe to our newsletter</h3>
  <p className='text-sm mt-2 mb-6'>The latest news, article and resources, send to your inbox weekly.</p>
  <div>
    <input type="email" name="" id="" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded bg-transparent border border-gray-300'/>
  </div>
</div>
</div>

    </div>
  )
}

export default Footer