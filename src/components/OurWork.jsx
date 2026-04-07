import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

  const workData= [
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into digital solution that connect, engage...',
      image: assets.work_mobile_app
    },
    {
      title: 'Dashboard management',
      description: 'We help you execute',
      image: assets.work_mobile_app
    },
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into digital solution that connect, engage...',
      image: assets.work_mobile_app
    }

  ]

  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700'>
        <Title title="Our Latest Work" desc="From strategy to execution, we craft digital solution that move your business forward." />
        </div>
  )
}

export default OurWork