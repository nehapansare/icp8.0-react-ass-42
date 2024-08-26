import React from 'react'
import './Veg.css';  
import { Navbar } from '../../views/Navbar/Navbar'
import MenuNavbar from '../../component/Menu Nav/MenuNavbar';
import Cart from '../Foodcart/Cart'
import './../Foodcart/Cart.css'
import { ITEM, THEME } from '../../config/data';
function Veg() {
  return (
        
    <div style={{color:THEME.dark}}>   
        <Navbar/>
      <MenuNavbar/>
        
      <div className='cart-container' >
        {ITEM.map((foodItem)=>{
            return  <Cart 
            imgUrl={foodItem.imgUrl}
              title={foodItem.title}
              Discription={foodItem.Discription}
              price={foodItem.price}
             />

        })}
     

      
    </div>
    </div>
  )
}

export default Veg