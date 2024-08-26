import React from 'react'
import Cart from '../Foodcart/Cart'
import MenuNavbar from '../Menu Nav/MenuNavbar'
import { Navbar } from '../../views/Navbar/Navbar'
import { ITEM } from '../../config/data'

function Nonveg() {
  return (
    <div>
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

export default Nonveg