import React, {useEffect, useState}from 'react'
import { Route, Routes, } from 'react-router-dom';
import axios from 'axios';
import { CampaignDetails, CreateCampaign, Home, Profile, Charts, Login,CryptoIndex, CryptoDetail,} from './pages';

import { Sidebar, Footer,Navbar } from './components';


const App = () => {
 
  return (
    
    <div className= "relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar/>
      </div>
        
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
      
        <Navbar/>
   
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/chart" element={<Charts/>}/>
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cryptoindex"element={<CryptoIndex/>}/>
          <Route path ="/coin/:id" element={<CryptoDetail/>}/>
         
        </Routes>
        <Footer/>
      
       
      </div>
    </div>
    
  )
}

export default App