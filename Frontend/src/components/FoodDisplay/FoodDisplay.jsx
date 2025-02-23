import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext);
  return (
    <>
      <div id='food-display' className='mt-8'>
           <h2 className='text-[max(2vw,24px)] font-semibold'>Top dishes near you</h2>
           <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] mt-7 gap-7 gap-y-12'>
            {
                food_list.map((item,index)=>{
                    if(category==="All"||category===item.category){
                        return(
                            <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                          )
                    }
                      
                })
            }
           </div>
      </div>
    </>
  )
}

export default FoodDisplay
