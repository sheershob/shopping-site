import React, { useContext } from 'react'
import './CSS/Categories.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Items from '../Components/Item/Items'

const Categories = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='categories'>
      <img className='category-banner' src={props.banner} alt="" />
      <div className="category-indexSort">
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item, i) => {
          if(props.category === item.category){
            return <Items key = {i} id = {item.id} name = {item.name} 
            image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
          }
          else return null;
        })}
      </div>
      <div className="loadMore">
        Explore more products
      </div>
    </div>
  )
}

export default Categories
