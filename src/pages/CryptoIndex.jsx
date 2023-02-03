import React from 'react'
import {useState, useEffect} from 'react';
import Axios from 'axios';





const CryptoIndex = () => {
    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState("");

        useEffect(() => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
            (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

    const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });
    
  return (
    <div>
        <div className="container py-8 px-4 bg-orange-900 rounded-[20px]">
            <h1 className="text-2xl text-end text-slate-900 font-bold"> Cryptocurrency Exchange</h1>
            <p className="text-white text-sm text-center"> see below</p>
                <div className="cryptoHeader flex w-full h-52 bg-zinc-900 justify-center items-center">
                    <input className= " w-2/5 h-14 border-none rounded-md  font-medium text-xl text-center text-teal-200 bg-gray-700" type="text"placeholder="Bitcoin..."
                            onChange={(event) => {
                                setSearchWord(event.target.value);
                                    }}/>
                </div>
        </div>
    </div>
  )
}

export default CryptoIndex