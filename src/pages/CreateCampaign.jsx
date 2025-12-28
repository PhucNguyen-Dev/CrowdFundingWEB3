import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const { createCampaign, address, error, isLoading, clearError } = useStateContext();
  const [localError, setLocalError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  useEffect(() => {
    if (!address) {
      setLocalError('Please connect your wallet first');
    }
  }, [address]);

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  const handleFormFieldChange = (fieldName, e) => {
    setLocalError('');
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name?.trim()) {
      setLocalError('Please enter your name');
      return false;
    }
    if (!form.title?.trim()) {
      setLocalError('Please enter a campaign title');
      return false;
    }
    if (form.title.length > 100) {
      setLocalError('Campaign title must be less than 100 characters');
      return false;
    }
    if (!form.target) {
      setLocalError('Please enter a funding goal');
      return false;
    }
    const target = parseFloat(form.target);
    if (isNaN(target) || target <= 0) {
      setLocalError('Funding goal must be a positive number');
      return false;
    }
    if (target > 1000) {
      setLocalError('Funding goal must be less than 1000 ETH');
      return false;
    }
    if (!form.deadline) {
      setLocalError('Please select a deadline');
      return false;
    }
    const deadlineDate = new Date(form.deadline);
    if (deadlineDate <= new Date()) {
      setLocalError('Deadline must be in the future');
      return false;
    }
    if (!form.image?.trim()) {
      setLocalError('Please enter a campaign image URL');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    setSuccessMsg('');

    if (!address) {
      setLocalError('Please connect your wallet first');
      return;
    }

    if (!validateForm()) {
      return;
    }

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        const result = await createCampaign(form);
        if (result.success) {
          setSuccessMsg('Campaign created successfully! Redirecting...');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          setLocalError(result.error || 'Failed to create campaign');
        }
      } else {
        setLocalError('Invalid image URL. Please provide a valid image link');
      }
    });
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
      </div>

      {(localError || error) && (
        <div className="w-full mt-[20px] p-4 bg-[#e74c3c] rounded-[10px]">
          <p className="font-epilogue font-medium text-[14px] text-white">{localError || error}</p>
        </div>
      )}

      {successMsg && (
        <div className="w-full mt-[20px] p-4 bg-[#27ae60] rounded-[10px]">
          <p className="font-epilogue font-medium text-[14px] text-white">{successMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="input your name here"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField
          labelName="Story"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description', e)}
        />

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain" />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal (ETH) *"
            placeholder="0.50"
            inputType="number"
            step="0.01"
            min="0"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField
          labelName="Campaign Image URL *"
          placeholder="https://example.com/image.jpg"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange('image', e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title={isLoading ? "Creating..." : "Submit new campaign"}
            styles="bg-[#784534]"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;