import React , { useState } from 'react'
import { Viewerchart } from '../components';
import { Barchart} from '../components';
import { Bar } from 'react-chartjs-2';
import {color, data} from '../constant';
import Wrapper, {WrapperMain, WrapperRight} from '../components/wrapper/Wrapper';
import SummaryBox,{SummaryBoxSpecial} from '../components/summary-box/SummaryBox';
import Box from '../components/box/Box';
import {images, city1} from '../assets';
import Slider1 from '../components/Slider1';
import {CheckUser} from '../access/CheckUser';
import { Link } from 'react-router-dom';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import OverallList from '../components/overall-list/OverallList';
import RevenueList from '../components/revenue-list/RevenueList';
import { RxFontRoman } from 'react-icons/rx';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Charts = () => {

  
 
    const {isLoading, isAuthorized, username} = CheckUser();
    if(isLoading) return null;
    if (!isAuthorized){
      return(
        <p className="text-center text-orange-400 text-3xl"> You must <Link  className=" text-orange-50" to="/login"> Login</Link> to view this page.</p>
      )
    }

    const data = {
        stockFullName: "SW Limited.",
        stockShortName: "ASX:SFW",
        price: {
          current: 2.32,
          open: 2.23,
          low: 2.215,
          high: 2.325,
          cap: 93765011,
          ratio: 20.1,
          dividend: 1.67,
        },
        chartData: {
          labels: [
            "10:00",
            "",
            "",
            "",
            "12:00",
            "",
            "",
            "",
            "2:00",
            "",
            "",
            "",
            "4:00",
          ],
          data: [
            2.23,
            2.215,
            2.22,
            2.25,
            2.245,
            2.27,
            2.28,
            2.29,
            2.3,
            2.29,
            2.325,
            2.325,
            2.32,
          ],
        },
      };
      const data1 = {
        stockFullName: "SW Limited.",
        stockShortName: "ASX:SFW",
        price: {
          current: 2.32,
          open: 2.23,
          low: 2.215,
          high: 2.325,
          cap: 93765011,
          ratio: 20.1,
          dividend: 1.67,
        },
        chartData: {
          labels: [
            "10:00",
            "",
            "",
            "",
            "12:00",
            "",
            "",
            "",
            "2:00",
            "",
            "",
            "",
            "4:00",
          ],
          data: [
            2.23,
            2.215,
            2.22,
            2.25,
            2.245,
            2.27,
            2.28,
            2.29,
            2.3,
            2.29,
            2.325,
            2.325,
            2.32,
          ],
        },
      };
      
  return (
    <div>
      <p className=" text-lime-600 text-xl text-end"> You are signed in as <strong className="name text-red-900">{username}</strong></p>
        <div className="py-10">
            <Slider1/>
        </div>
            
        <div className=" px-9 max-w-7xl mx-auto  bg-transparent py-10">
            <p className="text-white text-5xl text-center "> LET'S SEE WHAT YOU HAVE GOT TODAY.</p>
        </div>
        <div>
          
        </div>
        <div className="min-w-7xl min-h-7xl rounded-[20px] flex items-center justify-center py-10 bg-red-700">
            <Barchart info={data1} />
        </div>

        <div className="min-w-7xl min-h-7xl bg-yellow-200 rounded-[20px] flex items-center justify-center  py-10">
            <Viewerchart info={data} />
        </div>
    </div>
    
  )
}

export default Charts



