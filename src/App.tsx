// import { useState } from 'react'
import './App.css'
// import WebApp from '@twa-dev/sdk'

import ARKLogo from './assets/Subtract.svg'
import ARKText from './assets/arktext.svg'
import LendingIcon from './assets/Lending_icon.svg'
import BorrowingIcon from './assets/Borrowing_icon.svg'
import BargainIcon from './assets/Bargain_icon.svg'

function App() {

  return (
    <>
      <div className="min-h-screen bg-blue-100 p-8">
        <header className="flex items-center py-4">
          <img src={ARKLogo} alt="Ark logo" className="" />
          <img src={ARKText} alt="Ark logo" className="" />
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
            <p className="text-[1.7vh] text-blue-500">Lending</p>
          </button>
          <button className="focus:outline-none w-[20vw] h-[20vw]">
            <div className="flex items-center justify-center">
              <img src={BorrowingIcon} alt="Borrowing" className="text-blue-500 w-[10vw] h-[10vw]" />
            </div>
            <p className="text-[1.7vh] text-blue-500">Borrowing</p>
          </button>
          <button className="text-center focus:outline-none w-[20vw] h-[20vw]">
            <div className="flex items-center justify-center">
              <img src={BargainIcon} alt="Bargain" className="text-blue-500 w-[10vw] h-[10vw]" />
            </div>
            <p className="text-[1.7vh] text-blue-500">Bargain Link</p>
          </button>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-blue-200 p-2 rounded-full mr-3">
                <i className="fas fa-gem text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">TONcoin</p>
                <p className="font-bold">697 TON</p>
              </div>
            </div>
            <p className="text-blue-600 font-bold">$1520,056</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-yellow-200 p-2 rounded-full mr-3">
                <i className="fab fa-btc text-yellow-600"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Bitcoin</p>
                <p className="font-bold">697 BTC</p>
              </div>
            </div>
            <p className="text-blue-600 font-bold">$15,056</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="https://placehold.co/32x32" alt="More Asset icon" className="rounded-full mr-3" />
              <p className="font-bold">More Asset</p>
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
