import { useState } from 'react'
import reactLogo from './assets/react.svg'
import twaLogo from './assets/tapps.png'
import viteLogo from '/vite.svg'
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

      {/* <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
          Show Alert
        </button>
      </div> */}

    </>
  )
}

export default App
