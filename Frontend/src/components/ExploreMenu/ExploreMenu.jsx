import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    return (
        <>
            <div id='explore-menu' className='flex flex-col gap-5'>
                <h1 className=' text-explorehead font-medium text-3xl'>Explore our Menu</h1>
                <p className='lg:max-w-[60%] text-explorepara max-w-[100%] text-[14px] lg:text-[16px]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p>

                <div className='flex justify-between items-center gap-[30px] text-center my-5 mx-0 overflow-x-auto scrollbar-hidden'>
                    {menu_list.map((item, index) => {
                        return (
                            <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                                <img src={item.menu_image} alt="" className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200 ${category===item.menu_name?' border-4 border-tomato p-[2px]':''}`} />
                                <p className='mt-3 text-headerbtn text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
                <hr className='my-2 mx-0 border-none' style={{height:'2px',backgroundColor:"#e2e2e2"}}/>
            </div>
        </>
    )
}

export default ExploreMenu
