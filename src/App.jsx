import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer'
import mens_banner from './Components/assets/banner_mens.png'
import womens_banner from './Components/assets/banner_women.png'
import kids_banner from './Components/assets/banner_kids.png'
function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path='/' element =  { <Home/>}/>
          <Route path='/men' element =  { <Categories banner = {mens_banner} category="men" />}/>
          <Route path='/women' element =  { <Categories banner = {womens_banner} category="women" />}/>
          <Route path='/kids' element =  { <Categories banner = {kids_banner} category="kid" />}/>
          <Route path='/cart' element =  { <Cart/>}/>
          <Route path='/product' element =  { <Product/>}>
            <Route path=':productId' element = { <Product/>}/>
          </Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
