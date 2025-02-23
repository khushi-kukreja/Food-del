import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
// import { useEffect } from 'react'

const LoginPopUp = ({setShowLogin}) => {

    const {url,setToken}=useContext(StoreContext);

    const [currState, setCurrState] = useState("Sign Up")
   const [data,setData]=useState({
    name:"",
    email:"",
    password:""
   })

   const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setData({...data,[name]:value});
   }


   const onLogin=async (e)=>{
        e.preventDefault();
        let newUrl=url;
        if(currState==="Login"){
            newUrl+= "/api/user/login"
        }
        else{
            newUrl+= "/api/user/register"
        }

        const response= await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }else{
            alert(response.data.message);
        }
   }

    return (
        <>
            <div id='login-popup' className='absolute w-full h-full z-[1] bg-loginbg grid'>

                <form className='place-self-center w-[max(23vw,330px)] text-explorepara bg-white flex flex-col gap-6 py-6 px-[30px] rounded-lg text-[14px] animate-fadein1' onSubmit={onLogin}>
                    <div className='flex justify-between text-black items-center text-[24px] font-semibold'>
                        <h2>{currState}</h2>
                        <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" className='w-4 cursor-pointer'/>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {currState==="Login"?<></>: <input type="text" placeholder='Your name' className='border border-bordercolor p-[10px] rounded-[4px]' required name='name' onChange={onChangeHandler} value={data.name}/>}

                        <input type="email" placeholder='Your email' className='border border-bordercolor p-[10px] rounded-[4px]' required onChange={onChangeHandler} name='email' value={data.email}/>

                        <input type="password" placeholder='Password' className='border border-bordercolor p-[10px] rounded-[4px]' required value={data.password} onChange={onChangeHandler} name='password'/>
                    </div>
                    <button type='submit' className='border-none text-white bg-tomato text-[15px] cursor-pointer rounded-[4px] p-[10px]'>{currState==="Sign Up"?"Create account":"Login"}</button>
                    <div className='flex items-start gap-2 mt-[-15px]'>
                        <input type="checkbox" className='mt-[5px]' required />
                        <p>By continuing, i agree to the terms of use & privacy policy.</p>
                    </div>
                    {
                        currState==="Login"?<p>Create a new account? <span className='text-tomato font-medium cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:                  
                        <p>Already have an account? <span className='text-tomato font-medium cursor-pointer' onClick={()=>setCurrState("Login")}>Click here</span></p>
                    }
  
                </form>

            </div>
        </>
    )
}

export default LoginPopUp
