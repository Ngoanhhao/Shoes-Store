import React from 'react'

import { images } from "../../assets/img"

export default function Home() {
  return (
    <div className=' h-[1000px]' style={{backgroundImage:`url(${images.HomeBackground})`}}></div>
  )
}
