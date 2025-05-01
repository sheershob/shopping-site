import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>
        {props.name}
      </p>
      <div className="item-prices">
        <div className="new-price">
        ₹{props.new_price*80.0}
        </div>
        <div className="old-price">
        ₹{props.old_price*80.0}
        </div>
      </div>
    </div>
  )
}

export default Items
