import React, { useEffect, useState } from 'react'
import Card from '../c0mponents/Card'

export const Producet = () => {
    const [use,setUse]= useState(null)

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res => res.json()))
        .then((data)=>{
            console.log(data.products)
            setUse(data.products)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <>
    <h1 className='text-center font-bold mt-4 text-4xl'>Producet</h1>
    <div className='flex flex-wrap gap-6 justify-center'>
   {use && use.map((item,index)=>{
    return <Card title={item.title} price={item.price} src={item.thumbnail}  description={item.description} />
   })}
   </div>
    </>
  )
}
export default Producet