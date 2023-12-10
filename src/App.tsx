import { useState } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {

  return (
    <>
      <div className="min-h-screen bg-blue-100 p-4">
        <header className="flex justify-between items-center py-4">
          <i className="fas fa-bars text-xl"></i>
          <img src="https://placehold.co/50x50" alt="Ark logo" className="rounded-full" />
        </header>
        <div className="bg-gradient-to-r from-blue-300 via-pink-300 to-yellow-300 p-6 rounded-3xl shadow-lg mb-6">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <div className="bg-white bg-opacity-20 rounded p-1 w-12 mb-2"></div>
              <h1 className="text-2xl font-bold">Ark Protocol</h1>
            </div>
            <div className="space-y-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <button className="text-center focus:outline-none">
            <i className="fas fa-dollar-sign text-blue-500 text-3xl mb-2"></i>
            <p className="text-sm">Lending</p>
          </button>
          <div className="text-center">
            <i className="fas fa-hand-holding-usd text-blue-500 text-3xl mb-2"></i>
            <p className="text-sm">Borrowing</p>
          </div>
          <div className="text-center">
            <i className="fas fa-tags text-blue-500 text-3xl mb-2"></i>
            <p className="text-sm">Bargain Link</p>
          </div>
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
