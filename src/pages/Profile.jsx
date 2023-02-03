import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import {CheckUser} from '../access/CheckUser';


const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }
  
  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
        <div className="px-9 max-w-7xl mx-auto  bg-transparent py-10">
            <p className=" text-5xl text-center text-rose-400"> Bring your project to life.</p>
            <h5 className=" text-center py-10 text-xl text-amber-400">On Financial Backlings:</h5>
        </div>
        <div className="container rounded-[20px] border-2 bg-green-700 border-green-700">
          <div class="grid grid-cols-3 divide-x divide-black ">
            <div>
              <div className="text-center text-3xl font-semibold">199 </div>
              <p className="text-center text-violet-900"> project funded</p>
            </div>
            <div>
              <div className="text-center text-3xl font-semibold"> ETH 5009 </div>
              <p className="text-center text-violet-900"> toward creative works</p>
            </div>
            <div>
              <div className="text-center text-3xl font-semibold">10.029.091 </div>
              <p className="text-center text-violet-900"> pledges</p>
            </div>
          </div>
        </div>
        <div class="container py-10">
          <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns} />

        </div>
        
      
    </div>
    
  )
}

export default Profile

