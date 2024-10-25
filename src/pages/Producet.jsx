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
    <h1>Producet</h1>
   {use && use.map((item,index)=>{
    return <Card title={item.title} price={item.price} src={item.thumbnail}  description={item.description} />
   })}
    </>
  )
}
export default Producet