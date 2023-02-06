import React from 'react'

import { images } from "../../assets/img"
import ProductFeed from './components/Product-feed'

export default function Home() {
  return (
    <>
      <div className=' pt-[50%]' style={{background:`url(${images.HomeBackground})`}}></div>
      <ProductFeed category={1}/>
      <ProductFeed category={2}/>
      <ProductFeed category={3}/>
    </>
  )
}
