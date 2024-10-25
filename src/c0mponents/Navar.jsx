import React from 'react'
import { Link } from 'react-router-dom'

const Navar = () => {
  return (
    <>
      <div className='flex flex-wrap'>
        <ul className='flex justify-center gap-12 my-4 align-middle'> 
          <li className=''><Link to='/'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='Producet'>Product</Link></li>
          <li><Link to='shomore'>Shomore</Link></li>
          
        </ul>
      </div>
    </>
  )
}

export default Navar