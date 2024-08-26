import React from 'react'
import "./Home.css"
// Importing the components
import { Navbar } from './../Navbar/Navbar';
import MenuNavbar from '../../component/Menu Nav/MenuNavbar';
import Footer from '../../component/Footer/Footer';




function Home() {
  return (
    <div>
        <Navbar/>
        <MenuNavbar/>

      <img src='https://img.freepik.com/premium-vector/healthy-pizza-delicious-food-facebook-cover-photo-template-design_547743-122.jpg?w=1380' className='banner' alt=''/>
        <h1 className='deals-title'>Most Popular Deals</h1>
        <div className='offer'>
        <img src='https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-two.jpg' alt=''/>
        <img src='https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-three.jpg' alt=''/>
        </div>
        <button className='btn-offer'>View All Deals</button>
     
        <Footer/>
        </div>
      
  )
}



export default Home