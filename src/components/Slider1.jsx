import React, {useState} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { g1,g2,g3,g4 } from '../assets';

const Slider1 = () => {

  const images = [g1,g2,g3,g4];
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === images.length - 1) {
      setActiveSlide(1);
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };
  return (
    <div className='m-6'>
    {images.map((item, index) => {
      return (
        <div
          key={index}
          className={
            activeSlide === index
              ? 'flex justify-between items-center '
              : 'hidden'
          }
        >
          <button
            className='text-6xl border-2 border-amber-200 rounded-3xl text-amber-900'
            onClick={() => prevSliderHandler(index)}
          >
            <FiChevronLeft />
          </button>
          <div className=' w-full h-[300px]'>
            <img
              src={item}
              alt='landscape'
              className=' object-cover w-full h-[300px] px-5'
            />
          </div>
          <button
            className='text-6xl text-amber-900 border-2 border-amber-200 rounded-3xl'
            onClick={() => nextSliderHandler(index)}
          >
            <FiChevronRight />
          </button>
        </div>
      );
    })}
  </div>
  )
}

export default Slider1
