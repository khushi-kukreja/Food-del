import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,removeFromCart,addToCart,url}=useContext(StoreContext)

    return (
        <>
            <div className='w-100 m-auto rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.09)] transition duration-300 animate-fadein1'>
                <div className='relative'>
                    <img src={url+"/images/"+image} alt="" className='w-[100%] rounded-[15px_15px_0px_0px]' />
                    {
                        !cartItems[id]
                            ? <img src={assets.add_icon_white} alt='' className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full' onClick={() => addToCart(id)} />
                            : <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-full bg-white'>
                                <img src={assets.remove_icon_red} alt="" onClick={()=>removeFromCart(id)} className='w-[30px]' />
                                <p>{cartItems[id]}</p>
                                <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)} className='w-[30px]' />
                            </div>
                    }
                </div>
                <div className='p-5'>
                    <div className='flex justify-between items-center mb-[10px]'>
                        <p className='text-xl font-medium'>{name}</p>
                        <img src={assets.rating_starts} alt="" className='w-[70px]' />
                    </div>
                    <div>
                        <p className='text-carddesc text-xs'>{description}</p>
                        <p className='text-tomato text-[22px] font-medium my-[10px] mx-0'>${price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodItem
