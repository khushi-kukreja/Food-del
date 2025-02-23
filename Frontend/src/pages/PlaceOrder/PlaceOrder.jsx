import React, { useContext, useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, url, cartItems  } = useContext(StoreContext);
  const navigate= useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (e) => {
    // e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setData(data => ({ ...data, [name]: value }))
  }


  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
      return null;
    }).filter(Boolean);

    const orderData = {  
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }

    console.log("Request URL:", url+"/api/order/place");
    console.log("Order Data:", orderData);

    let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}});
    console.log("Stripe Response:", response.data); 
    
    if (response.data.success) {
      const { session_url } = response.data;
      console.log("Redirecting to:", session_url); 
      window.location.replace(session_url);
    }
    else {
      alert("Error " + response.data.message)
    }
  }

  
  useEffect(()=>{
         if(!token){
          navigate("/cart")
         }else if(getTotalCartAmount()===0){
          navigate("/cart")
         }
  },[token])

  return (
    <>
      <form onSubmit={placeOrder} className='flex justify-between flex-col md:flex-row items-start gap-[50px] mt-[100px]'>
        <div className='w-[100%] max-w-[max(30%,500px)] text-[14px]'>
          <p className='text-[30px] mb-[50px] font-semibold'>Delivery Information</p>
          <div className='flex gap-[10px]'>

            <input type="text" placeholder='First Name' name='firstname' value={data.firstname} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' required />

            <input type="text" placeholder='Last Name' name='lastname' value={data.lastname} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' required />
          </div>

          <input type="email" placeholder='Email address' name='email' value={data.email} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' required />

          <input type="text" placeholder='Street' name='street' value={data.street} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' required />

          <div className='flex gap-[10px]'>
            <input type="text" placeholder='City' name='city' value={data.city} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' required />

            <input type="text" placeholder='State' name='state' value={data.state} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' required />
          </div>

          <div className='flex gap-[10px]'>
            <input type="text" placeholder='Zip code' name='zipcode' value={data.zipcode} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' required />

            <input type="text" placeholder='Country' name='country' value={data.country} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' />
          </div>
          <input type="text" placeholder='Phone' name='phone' value={data.phone} onChange={onChangeHandler} className='mb-4 w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-tomato' required />
        </div>

        <div className='w-[100%]  max-w-[max(40%,500px)]'>
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
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className='h-[1px] bg-hrcolor border-none my-[10px]' />
              <div className='flex justify-between text-[#555]'>
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button type='submit' className='border-none mt-[30px] text-[14px] text-white bg-tomato w-[max(15vw,200px)] py-3 px-0 rounded-[4px] cursor-pointer'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default PlaceOrder
