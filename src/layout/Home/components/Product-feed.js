import React from 'react'
import Slider from "react-slick";
import "./style/slider.scss"
import ProductCard from './Product-card'

export default function ProductFeed() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,   
      };
  return (
    <div className='px-10 py-20'>
        <Slider {...settings} >
            <ProductCard imgSrc={"https://cdn.shopify.com/s/files/1/0588/1443/1414/products/1346147001_02.jpg?v=1671654032&width=352"} title={"IDORÉ"} name={"Loretta Ouro Light Metal Eco"} price={"$89.99"}/>
            <ProductCard imgSrc={"https://cdn.shopify.com/s/files/1/0588/1443/1414/products/1346147001_02.jpg?v=1671654032&width=352"} title={"IDORÉ"} name={"Loretta Ouro Light Metal Eco"} price={"$89.99"}/>
            <ProductCard imgSrc={"https://cdn.shopify.com/s/files/1/0588/1443/1414/products/1346147001_02.jpg?v=1671654032&width=352"} title={"IDORÉ"} name={"Loretta Ouro Light Metal Eco"} price={"$89.99"}/>
            <ProductCard imgSrc={"https://cdn.shopify.com/s/files/1/0588/1443/1414/products/1346147001_02.jpg?v=1671654032&width=352"} title={"IDORÉ"} name={"Loretta Ouro Light Metal Eco"} price={"$89.99"}/>
            
            <ProductCard imgSrc={"https://cdn.shopify.com/s/files/1/0588/1443/1414/products/1346147001_02.jpg?v=1671654032&width=352"} title={"IDORÉ"} name={"Loretta Ouro Light Metal Eco"} price={"$89.99"}/>
            <ProductCard imgSrc={"https://cdn.shopify.com/s/files/1/0588/1443/1414/products/1346147001_02.jpg?v=1671654032&width=352"} title={"IDORÉ"} name={"Loretta Ouro Light Metal Eco"} price={"$89.99"}/>
            <ProductCard imgSrc={"https://cdn.shopify.com/s/files/1/0588/1443/1414/products/1346147001_02.jpg?v=1671654032&width=352"} title={"IDORÉ"} name={"Loretta Ouro Light Metal Eco"} price={"$89.99"}/>
            <ProductCard imgSrc={"https://cdn.shopify.com/s/files/1/0588/1443/1414/products/1346147001_02.jpg?v=1671654032&width=352"} title={"IDORÉ"} name={"Loretta Ouro Light Metal Eco"} price={"$89.99"}/>

        </Slider>
        
    </div>
  )
}
