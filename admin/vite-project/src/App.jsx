import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/list/List'
import Orders from './pages/orders/Orders.jsx'
import "./App.css"

import { ToastContainer } from 'react-toastify';

const App = () => {

  const url="https://food-del-backend-bouo.onrender.com";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'> 
        <Sidebar/>
        <Routes>
        <Route path='/' element={<Add />} />
           <Route path='/add' element={<Add url={url} />} />
            <Route path='/list' element={<List  url={url}/>} />
            <Route path='/orders' element={<Orders url={url}/>} />
            {/* <Route path="*" element={<div>404: Page Not Found</div>} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
