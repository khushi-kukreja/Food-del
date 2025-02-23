import React from 'react'

const Header = () => {
  return (
    <>
       <div className="header bg-header-img h-[34vw] my-[30px] mx-auto bg-no-repeat bg-contain relative" >
        <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] md:max-w-[50%] max-w-[55%] bottom-[10%] left-[6vw] animate-fadein ">
                <h2 className='text-white font-medium text-[max(4.3vw,22px)]'>Order your Favourite Food here</h2>
                <p className='text-white text-[1vw] hidden md:block'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p>
                <button className='border-none text-headerbtn font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]'>View Menu</button>
        </div>
       </div>
    </>
  )
}

export default Header
