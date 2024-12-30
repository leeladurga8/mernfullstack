import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Ecommerce stands for “electronic commerce.” Ecommerce websites are built to connect shoppers to products or services for trading online. On the most basic level, they provide everything
           we need for online shopping. </p>
      <p>
      A business builds the website and lists the products or services they sell, along with prices.
      </p>
      </div>
    </div>
  )
}

export default DescriptionBox