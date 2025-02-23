import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
      <div id='footer' className='bg-footerbg text-footertext flex flex-col  items-center md:gap-5 gap-9 py-5 px-[8vw] pt-20 mt-[100px]'>
        <div className='w-[100%] md:grid md:grid-cols-[2fr_1fr_1fr] md:gap-20 sm:flex sm:flex-col gap-9'>
            <div className='flex flex-col gap-5 items-start'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit corporis ad eos, placeat vitae facilis accusantium, quae libero maxime obcaecati corrupti, sapiente veritatis cupiditate vero. Porro, explicabo beatae? Sunt, rerum!</p>
                    <div className='flex'>
                        <img src={assets.facebook_icon} alt="" className='w-10 mr-4'/>
                        <img src={assets.twitter_icon} alt="" className='w-10 mr-4'/>
                        <img src={assets.linkedin_icon} alt="" className='w-10 mr-4'/>
                    </div>
            </div>
            <div className='flex flex-col gap-5 items-start'>
               <h2 className='text-white text-[27px] font-semibold'>COMPANY</h2>
               <ul>
                <li className='mb-[10px] cursor-pointer'>Home</li>
                <li className='mb-[10px] cursor-pointer'>About us</li>
                <li className='mb-[10px] cursor-pointer'>Delivery</li>
                <li className='mb-[10px] cursor-pointer'>Privacy policy</li>
               </ul>
            </div>
            <div className='flex flex-col gap-5 items-start'>
              <h2 className='text-white text-[27px] font-semibold'>GET IN TOUCH</h2>
              <ul>
                <li className='mb-[10px] cursor-pointer'>+1-212-456-7890</li>
                <li className='mb-[10px] cursor-pointer'>contact@tomato.com</li>
              </ul>
            </div>
        </div>

        <hr className='w-[100%] bg-gray-400 h-[2px] my-5 border-none'/>
        <p className='md:text-center'>Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
      </div>
    </>
  )
}

export default Footer
