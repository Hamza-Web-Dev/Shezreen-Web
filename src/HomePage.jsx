import ProductBoxes from "./Components/Header/Product-Box/probox";
import React from 'react'
import "./Homepage.css"
import Slideshow from "./Components/Header/image-slider/slider";


export const HomePage = () => {
  return (
    <>
    
      <Slideshow />
      <ProductBoxes />
      
       </>
  )
}
