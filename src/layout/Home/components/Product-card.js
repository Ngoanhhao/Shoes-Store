import React from 'react'

export default function ProductCard({ imgSrc, title, name, price }) {
  return (
    <div className='px-2'>
        <img className='w-full' src={imgSrc} alt={name}/>
        <div className='flex justify-between'>
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
        <p className='text-left'>{name}</p>
    </div>
  )
}
