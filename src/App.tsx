// import { useState } from 'react'
import './App.css'
// import WebApp from '@twa-dev/sdk'

import ARKLogo from './assets/ARK.png'
import LendingIcon from './assets/Lending_icon.svg'
import BorrowingIcon from './assets/Borrowing_icon.svg'
import BargainIcon from './assets/Bargain_icon.svg'
import BitcoinIcon from './assets/Bitcoin.svg'
import TONIcon from './assets/TON.svg'
import MoreTokenIcon from './assets/more_toekn.svg'

function App() {

  return (
    <>
      <div className="min-h-screen bg-blue-100 p-8">
        <header className="flex items-center py-4">
          <img src={ARKLogo} alt="Ark logo" className="h-[5vh]" />
        </header>
        <div className="bg-gradient-to-r from-blue-300 via-pink-300 to-yellow-300 p-6 rounded-3xl shadow-lg mb-6 h-[25vh]">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <div className="bg-white bg-opacity-20 rounded p-1 w-12 mb-2"></div>
              <h1 className="text-2xl font-bold">Ark Protocol</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[70vw] mx-auto p-1">
          <button className="text-center focus:outline-none w-[20vw] h-[20vw]">
            <div className="flex items-center justify-center">
              <img src={LendingIcon} alt="Lending" className="text-blue-500 w-[10vw] h-[10vw]" />
            </div>
            <p className="text-[1.7vh] font-bold text-blue-500">Lending</p>
          </button>
          <button className="focus:outline-none w-[20vw] h-[20vw]">
            <div className="flex items-center justify-center">
              <img src={BorrowingIcon} alt="Borrowing" className="text-blue-500 w-[10vw] h-[10vw]" />
            </div>
            <p className="text-[1.7vh] font-bold text-blue-500">Borrowing</p>
          </button>
          <button className="text-center focus:outline-none w-[20vw] h-[20vw]">
            <div className="flex items-center justify-center">
              <img src={BargainIcon} alt="Bargain" className="text-blue-500 w-[10vw] h-[10vw]" />
            </div>
            <p className="text-[1.7vh] font-bold text-blue-500">Bargain Link</p>
          </button>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-6 h-min-[min(35vw,320px)] h-fit">
          <div className="flex justify-between items-center h-[11vw] h-fit">
            <div className="flex items-center">
              <img src={TONIcon} alt="TON icon" className="h-[max(12vw,36px)]" />
              <div>
                <p className="text-[min(4vw,60px)] font-bold">TONcoin</p>
                <p className="text-gray-500">697 TON</p>
              </div>
            </div>
            <p className="text-blue-600 font-bold">$1520,056</p>
          </div>
          <div className="flex justify-between items-center h-[11vw] h-fit">
            <div className="flex items-center">
              <img src={BitcoinIcon} alt="Bitcoin icon" className="h-[max(12vw,36px)]" />
              <div>
                <p className="text-[min(4vw,60px)] font-bold">Bitcoin</p>
                <p className="text-gray-500">697 BTC</p>
              </div>
            </div>
            <p className="text-blue-600 font-bold">$15,056</p>
          </div>
          <div className="flex justify-between items-center h-[11vw] h-fit">
            <div className="flex items-center">
              <img src={MoreTokenIcon} alt="More token icon" className="h-[max(12vw,36px)]" />
              <p className="text-[min(4vw,60px)] font-bold">More Asset</p>
            </div>
            <p className="text-blue-600 font-bold">$20,056</p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-blue-500 p-4 rounded-3xl shadow-lg text-white">
          <h2 className="font-bold">Active Bargain</h2>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </>
  )
}

export default App
