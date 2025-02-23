import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';

const MyOrders = () => {
    const {url,token}=useContext(StoreContext);
    const [data,setData]=useState([]);

    const fetchOrders=async()=>{
        const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        // setData([...response.data.data]);
        setData(response.data.data)
        console.log(response.data.data)
    }
    useEffect(()=>{
           if(token){
            fetchOrders();
           }
    },[token])
  return (
    <>
      <div className='my-[50px] mx-0'>
        <h2>My Orders</h2>
        <div className='flex flex-col gap-5 mt-[30px]'> 
            {
                data.map((order,index)=>{
                    return(
                        <div key={index} className='grid lg:grid-cols-[0.5fr,2fr,1fr,1fr,2fr,1fr] grid-cols-[1fr,2fr,1fr] gap-x-[5px] text-[15px] items-center lg:gap-[30px] lg:text-[14px] py-[10px] px-5 text-[#454545] border-[1px] border-tomato'>
                            <img src={assets.parcel_icon} alt="" className='w-[50px]'/>
                            <p>{ order.items.map((item,index)=>{
                                if(index===order.items.length-1){
                                    return item.name+" x "+item.quantity;
                                }else{
                                    return item.name+" x "+item.quantity+","
                                }
                               
                            }) }</p>
                            <p>${order.amount}.00</p>
                            <p>Items : {order.items.length}</p>
                            <p><span className='text-tomato'>&#x25cf;</span><b className='font-medium text-[#454545]'> {order.status}</b></p>
                            <button onClick={()=>fetchOrders()} className='border-none py-3 px-0 rounded text-[#454545] text-[12px] lg:text-[16px] bg-[#ffe1e1] cursor-pointer'>Track Order</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  )
}

export default MyOrders
