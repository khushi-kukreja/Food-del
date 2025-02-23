import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('home');
    const {getTotalCartAmount,token ,setToken}=useContext(StoreContext);

    const navigate=useNavigate()
    
    const logout=()=>{
      localStorage.removeItem("token")
      setToken("");
       navigate("/");
    }

    useEffect(() => {
      // Function to detect the visible section
      const handleScroll = () => {
        const sections = document.querySelectorAll('section'); // Target sections
        let currentSection = 'home';
  
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id; // Update current section
          }
        });
  
        setMenu(currentSection); // Set the active menu item
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
      <div className="navbar md:py-5 py-4 flex justify-between items-center flex-row">
        <Link to='/'><img src={assets.logo} alt="" className="logo md:w-[150px] w-[120px]" /></Link>

        <ul className="hidden navbar-menu md:flex list-none gap-6 text-navlink lg:gap-5 md:text-[17px] text-[15px]">
            <Link to='/' onClick={()=>setMenu('home')} className={menu ==='home'?'pb-[2px] border-b-2 border-navlink border-solid':""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu === 'menu'?'pb-[2px] border-b-2 border-navlink border-solid':''}>menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app'?'pb-[2px] border-b-2 border-navlink border-solid':""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu === 'contact-us'? 'pb-[2px] border-b-2 border-navlink border-solid':''}>contact us</a>
        </ul>

        <div className="navbar-right flex items-center md:gap-10 gap-5">
            <img src={assets.search_icon} alt="" className='w-5 md:w-6 '/>

            <div className="navbar-search-icon relative">
              <Link to='/cart'><img src={assets.basket_icon} alt="" className='w-5 md:w-6 '/></Link>
                
                <div className={getTotalCartAmount()===0?"":'dot absolute min-w-[10px] min-h-[10px] bg-tomato rounded-[5px] top-[-8px] right-[-8px]'}></div>
            </div>

            { !token ? <button className='bg-transparent text-navlink border border-solid border-tomato md:py-[10px] md:px-[30px] cursor-pointer rounded-[50px] hover:bg-[#fff4f2] transition duration-[300ms] py-2 px-5 ' onClick={()=>setShowLogin(true)}>Sign in</button>  :
            <div className='group relative'>
              <img src={assets.profile_icon} alt="" className=''/>
              <ul className='absolute right-0 z-10 hidden group-hover:flex group-hover:flex-col group-hover:gap-[10px] group-hover:bg-[#fff2ef]  group-hover:py-3 group-hover:px-[25px] group-hover:border group-hover:border-tomato group-hover:rounded-[4px] group-hover:outline-2'>
                <li onClick={()=>navigate("/myorders")} className='flex items-center gap-[10px] pr-[25px] cursor-pointer hover:text-tomato'>
                   <img src={assets.bag_icon} alt="" className='w-5'/><p>Orders</p>
                </li>
                <hr className='border border-tomato'/>
                <li onClick={logout} className='flex items-center gap-[10px] cursor-pointer hover:text-tomato'>
                   <img src={assets.logout_icon} alt="" className='w-5'/><p>Logout</p>
                </li>
                </ul>
                </div>}
            
        </div>
        
      </div>
    </>
  )
}

export default Navbar
