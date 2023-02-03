import React from "react";
import { Link } from 'react-router-dom';
import { facebook,instagram,twitter,youtube,discord,github,linkedin } from "../assets";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
    <div className={`w-[30px] h-[30px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center  hover:bg-teal-50 ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)
const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
        <footer className="py-10">
        <div className = " bg-slate-800 rounded-[20px] px-9 pt-9 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    
                   <div className="mb-5">
                    <bold className="text-2xl pb-4 text-cyan-300">FINANCIAL BACKLINGS</bold>
                    <p className="text-gray-500"> 
                        <ul>
                            <li>141-145 Dien Bien Phu.</li>
                            <li>Ward 15. Binh Thanh District . </li>
                            <li>Hcmc.</li>
                        </ul> 
                    </p>
                   </div>
                   
                    <div className="mb-5 ">
                        <bold className="text-2xl text-sky-300 hover:text-4xl"> Information</bold>
                        <ul>
                            <li className="pb-4  hover:text-green-500 text-zinc-300"><Link to="/">THIRD WEB</Link></li>
                            <li className="pb-4  hover:text-green-500 text-zinc-300"><Link to="/">Contact us</Link></li>
                            <li className="pb-4  hover:text-green-500 text-zinc-300 "><Link to="/">Term of services</Link></li>
                            <li className="pb-4  hover:text-green-500 text-zinc-300"><Link to="/">About us</Link></li>
                            <li className="pb-4  hover:text-green-500 text-zinc-300"><Link to="/">Guide</Link></li>
                            <li className="pb-4  hover:text-green-500 text-zinc-300"><Link to="/">SDKs</Link></li>
                            <li className="pb-4  hover:text-green-500 text-zinc-300"><Link to="/">Partner with us</Link></li>
                        </ul>
                        

                    </div>
                    <div className="mb-5">
                        <bold className="text-2xl text-sky-300 hover:text-4xl"> Service</bold>
                        <ul>
                            <li className="pb-4 hover:text-green-500 text-zinc-300"><Link to="/">FAQ</Link></li>
                            <li className="pb-4 hover:text-green-500 text-zinc-300"><Link to="/">NFT DROPS</Link></li>
                            <li className="pb-4 hover:text-green-500 text-zinc-300"><Link to="/">Contracts</Link></li>
                            <li className="pb-4 hover:text-green-500 text-zinc-300"><Link to="/">Privacy policy</Link></li>
                            <li className="pb-4 hover:text-green-500 text-zinc-300"><Link to="/">Blogs</Link></li>
                            <li className="pb-4 hover:text-green-500 text-zinc-300"><Link to="/">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className=" mb-5 py-9 ">
                        <h4 className="text-2xl text-white hover:text-red-500"> Join our newsletter</h4>
                        <p className="text-gray-500"> Join with 120,000+ Donators and Contribution for the better World.</p>
                        <form className=" py-9 flex flex-row flex-wrap ">
                            <input type="text" className="text-yellow-900 w-2/3 p-2 focus:border-lime-200 " placeholder="email@example.com"></input>
                            <button className="p-2 w-1/3 bg-red-700 text-white hover:bg-stone-900 border-2 "> Claim</button>
                        </form>
                        
                    </div>
                
            </div>
        
        <div className=" w-full #3a3a43  text-white rounded-[20px] px-4">
         <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
             <div className="  text-center">
                   {` ®KentnguyenWeb3 © All rights reserved ${year}.`}
             </div>
             <div className="flex  justify-center items-center gap-4">
                 <a><Link to="/"> <Icon styles="bg-[#145A83] shadow_secondary" imgUrl={facebook} /></Link></a>
                 <a><Link to="/"> <Icon styles="bg-[#CF9FFF] shadow_secondary" imgUrl={instagram} /></Link></a>
                 <a><Link to="/"> <Icon styles="bg-[#33B3FF] shadow_secondary" imgUrl={twitter} /></Link></a>
                 <a><Link to="/"> <Icon styles="bg-[#ff0000] shadow_secondary" imgUrl={youtube} /></Link></a>
                 <a><Link to="/"> <Icon styles="bg-[#0000FF] shadow_secondary" imgUrl={discord} /></Link></a>
                 <a><Link to="/"> <Icon styles="bg-[#115646] shadow_secondary" imgUrl={github} /></Link></a>
                 <a><Link to="/"> <Icon styles="bg-[#0C5580] shadow_secondary" imgUrl={linkedin} /></Link></a>
                
             </div>
         </div>

        </div>
        </footer>
    );
  };
  
  export default Footer;