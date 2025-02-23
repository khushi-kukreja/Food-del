import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);

  const navigate=useNavigate();
  return (
    <>
      <div className='mt-[100px]'>
        <div>
          <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className='h-[1px] bg-hrcolor border-none' />
          {
            food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] my-[10px] text-black'>
                      <img src={url+"/images/"+item.image} alt="" className='w-[70px]' />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p className='cursor-pointer' onClick={() => removeFromCart(item._id)}>x</p>
                    </div>
                    <hr className='h-[1px] bg-hrcolor border-none' />
                  </>

                )
              }
            })
          }
        </div>

        <div className='flex justify-between md:flex-row flex-col-reverse mt-20 gap-[max(12vw,20px)]'>
          <div className='flex flex-1 gap-5 flex-col'>
            <h2 className='text-[25px] font-semibold'>Cart Totals</h2>
            <div>
              <div className='flex justify-between text-[#555]'>
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='h-[1px] bg-hrcolor border-none my-[10px]' />
              <div className='flex justify-between text-[#555]'>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr className='h-[1px] bg-hrcolor border-none my-[10px]' />
              <div className='flex justify-between text-[#555]'>
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')} className='border-none text-white bg-tomato w-[max(15vw,200px)] py-3 px-0 rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>
          </div>
          <div className='flex-1 justify-start'>
            <div className='text-[14px]'>
              <p className='text-[#555]'>If you have a promo code, Enter it here</p>
              <div className='flex justify-between items-center mt-[10px] bg-[#eaeaea] rounded-[4px]'>
                <input type="text" placeholder='promo-code' className='bg-transparent pl-[10px] border-none outline-none'/>
                <button className='w-[max(10vw,150px)] py-2 px-[7px] bg-black border-none text-white rounded-[4px]'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
