import React, { useContext, createContext, useState } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0xf59A1f8251864e1c5a6bD64020e3569be27e6AA9');
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

  const address = useAddress();
  const connect = useMetamask();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const publishCampaign = async (form) => {
    try {
      setIsLoading(true);
      setError(null);

      if (!form.title?.trim()) throw new Error('Campaign title is required');
      if (!form.target || parseFloat(form.target) <= 0) throw new Error('Campaign target must be greater than zero');
      if (!form.deadline) throw new Error('Campaign deadline is required');
      if (!form.image?.trim()) throw new Error('Campaign image URL is required');

      const deadlineDate = new Date(form.deadline).getTime() / 1000;
      if (deadlineDate <= Math.floor(Date.now() / 1000)) {
        throw new Error('Deadline must be in the future');
      }

      const data = await createCampaign([
        address,
        form.title.trim(),
        form.description?.trim() || '',
        ethers.utils.parseEther(form.target),
        Math.floor(deadlineDate),
        form.image.trim()
      ]);

      setError(null);
      return { success: true, data };
    } catch (err) {
      const errorMsg = err?.message || 'Failed to create campaign';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setIsLoading(false);
    }
  };

  const getCampaigns = async () => {
    try {
      setError(null);
      if (!contract) throw new Error('Contract not initialized');

      const campaigns = await contract.call('getCampaigns');

      const parsedCampaigns = campaigns.map((campaign, i) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
        image: campaign.image,
        pId: i,
        isActive: campaign.deadline.toNumber() > Math.floor(Date.now() / 1000)
      }));

      return parsedCampaigns;
    } catch (err) {
      const errorMsg = err?.message || 'Failed to fetch campaigns';
      setError(errorMsg);
      console.error('Error fetching campaigns:', err);
      return [];
    }
  };

  const getUserCampaigns = async () => {
    try {
      if (!address) throw new Error('User address not available');

      const allCampaigns = await getCampaigns();
      const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner.toLowerCase() === address.toLowerCase());

      return filteredCampaigns;
    } catch (err) {
      const errorMsg = err?.message || 'Failed to fetch user campaigns';
      setError(errorMsg);
      return [];
    }
  };

  const donate = async (pId, amount) => {
    try {
      setIsLoading(true);
      setError(null);

      if (!amount || parseFloat(amount) <= 0) throw new Error('Donation amount must be greater than zero');
      if (pId === undefined || pId === null) throw new Error('Invalid campaign');

      const data = await contract.call('donateToCampaign', pId, {
        value: ethers.utils.parseEther(amount)
      });

      return { success: true, data };
    } catch (err) {
      const errorMsg = err?.message || 'Donation failed';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setIsLoading(false);
    }
  };

  const getDonations = async (pId) => {
    try {
      setError(null);

      if (pId === undefined || pId === null) throw new Error('Invalid campaign');

      const donations = await contract.call('getDonators', pId);
      const numberOfDonations = donations[0].length;

      const parsedDonations = [];

      for(let i = 0; i < numberOfDonations; i++) {
        parsedDonations.push({
          donator: donations[0][i],
          donation: ethers.utils.formatEther(donations[1][i].toString())
        });
      }

      return parsedDonations;
    } catch (err) {
      const errorMsg = err?.message || 'Failed to fetch donations';
      setError(errorMsg);
      console.error('Error fetching donations:', err);
      return [];
    }
  };

  const clearError = () => setError(null);

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        error,
        isLoading,
        clearError
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);