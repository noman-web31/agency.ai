import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const Services = () => {
  
    const servicesData = [
        {
           title: "advertising",
           description: "We turn bold ideas into powerful digital solution that connect, engine ...",
           icon: assets.ads_icon 
        },
        {
           title: "Content Writing",
           description: "We help you create a marketing atrategy that drives results.",
           icon: assets.content_icon
        },
        {
           title: "Social media ",
           description: "We help you build a strong social media presence and engage with your audience.",
           icon: assets.social_icon
        }
    ]
  
    return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 '>

<img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1'/>

<Title title='How can we help?' desc='From strategy to execution, we craft digital soution that move your business forward.'/>

    </div>
  )
}

export default Services