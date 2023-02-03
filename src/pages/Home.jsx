import React, { useState, useEffect } from 'react';
import styles from "../style";
import { DisplayCampaigns} from '../components';
import { useStateContext } from '../context';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
//import { CheckUser} from '../components/CheckUser';
import { Link } from 'react-router-dom';




const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }
  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  
  //const {isloading, isAuthorized, username} = CheckUser();
     // if(isloading) return null;
      //if(!isAuthorized){
      //  return <p className="text-2xl text-center text-red-600"> You must <Link className="text-cyan-500 " to="/login">Login</Link> to use this place!</p>
     // }
     
  const slides = [
    {
      url: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/958051/retina_1708x683_REDESIGN-State-of-the-Equity-Crowdfunding_Luke-Newsletter-f44f6e115aa5de08b4d685ea19a534bd.png',
    },
    {
      url: 'https://images.nature.com/original/magazine-assets/d41586-019-00104-1/d41586-019-00104-1_16384334.jpg',
    },
    {
      url: 'https://s3.us-east-1.amazonaws.com/co-assets/assets/images/_fbTw/crowdfunding_190808_131827.jpg',
    },

    {
      url: 'https://www.business.org/app/uploads/2020/12/best-crowdfunding-sites-for-startups.png',
    },
    {
      url: 'https://quickbooks.intuit.com/oidam/intuit/sbseg/en_ca/blog/images/successful-crowdfunding-campaign-qbo-ca-desktop.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

            //<p>
          //You are sign in as <strong>{username}</strong>
        //</p>
  return (
    <div>
        <div>
           <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          
                <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white">Welcome, to the </span>
                <span className="text-cyan-500">FUTURE. </span> 
                </p>
              </div>

              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-slate-300	 ss:leading-[100.8px] leading-[75px] italic">
                  TOGETHER, <br className="sm:block hidden" />{" "}
                  <span className="pl-5 bg-gradient-to-r from-indigo-500 text-slate-400">  WE  WILL BUILD A</span>{" "}
                </h1>
              </div>
                <h1 className="pl-10 font-poppins font-semibold ss:text-[68px] text-[52px] text-slate-500 ss:leading-[100.8px] leading-[75px] w-full">
                  BETTER WORLD !
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 text-orange-200`}>
                <a class="font-bold underline decoration-sky-500 text-rose-900">We</a>, the Creator of New Crowd Funding website with <a class="font-bold underline decoration-lime-400 text-cyan-500">WEB3</a> platform. Bringing 
                    everyone that raise their hope for better future,
                    <a class="font-bold underline decoration-sky-500 text-rose-900">we</a> protect it and keep it grow.
                </p>
              </div>
             
              <div className='max-w-[780px] h-[480px] w-full m-auto py-0  px-4 relative group'>
                <div
                  style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                  className='w-full h-full rounded-3xl bg-right bg-cover duration-500'>
                </div>
                    {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                    {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
              <div className='flex top-4 justify-center pt-0 pb-0 text-red-500'>
                  {slides.map((slide, slideIndex) => (
              <div
                  key={slideIndex}
                  onClick={() => goToSlide(slide,slideIndex)}
                  className='text-2xl cursor-pointer'>
                    <RxDotFilled />
              </div>
                ))}
              </div>
              </div>
            </section>
        </div>
        
              <div className=" container rounded-[20px] border-2 bg-green-700 border-green-700 py-4 pr-8">
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
              <div class="py-10">
              <button className=" dark:md:hover:bg-fuchsia-600 container-sm float-right justify-end text-end bg-zinc-600 rounded-[20px] text-xl font-semibold text-cyan-400 px-2  py-2 "><Link to="/login"> Create your campaign here</Link>
              </button>
                    <div className="py-10">
                      <DisplayCampaigns 
                      title="All Campaigns"
                      isLoading={isLoading}
                      campaigns={campaigns}
                      />
                    </div>
                    
              </div>
              
    </div>
        
    
  )
}

export default Home