import { useState } from 'react'
import twaLogo from './assets/tapps.png'
import './App.css'

import WebApp from '@twa-dev/sdk'
import OrderBook from './OrderBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://ton.org/dev" target="_blank">
          <img src={twaLogo} className="logo" alt="TWA logo" />
        </a>
      </div>
      <div>
        <h1>Arc Order Book </h1>
        <div className="card">
          <h2>Place Order</h2>
          <input type="text" placeholder="Amount" />
          <input type="text" placeholder="Price" />
          <button onClick={() => setCount((count) => count + 1)}>
            Place order queue: {count}
          </button>
        </div>
        <OrderBook />
      </div>

      {/* */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Please waiting order: ${count}`)}>
          Status
        </button>
      </div> 
    </>
  )
}

export default App
