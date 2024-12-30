import React from 'react'
import './Newsletter.css'
const newsletter = () => {
  return (
    <div className="newsLetter">
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default newsletter