import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const StartScreen = () => {
  const [productid , setProductid] = useState("")

  async function resp(){
    const res = await axios.get(`/api/Product/${productid}`)
    console.log(res.data)
  }

  return (
    <div>
        <Link to="/vendorSignup">
        <button>
                Vendor
        </button>
        </Link>
        <Link to="/retailerSignup">
        <button>
                Retailer
        </button>
        </Link>
        <input placeholder='id' onChange={(e) => setProductid(e.target.value)}/>
        <button onClick={resp}>
          click me 
        </button>
      
    </div>
  )
}

export default StartScreen
