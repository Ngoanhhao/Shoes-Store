import React from 'react'

import { images } from "../../assets/img"
import ProductFeed from './components/Product-slider/Product-feed'
import CategoriesFeed from "./components/Caterogies-slider/Categories-feed"
import Brand from './components/Brand/Brand'

export default function Home() {
  return (
    <>
      <div className=' pt-[50%]' style={{background:`url(${images.HomeBackground})`}}></div>
      <ProductFeed category={1}/>
      <ProductFeed category={2}/>
      <ProductFeed category={3}/>
      <CategoriesFeed />
      <Brand/>
    </>
  )
}
