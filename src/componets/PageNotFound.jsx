import React from 'react'
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
   <div className='text-2xl text-center bg-white text-black font-bold'>
    <Link to='/' className='text-blue-700  hover:underline duration-300'>Go to Home</Link>
    <h1>coming soon!</h1>
   </div>
  )
}

export default PageNotFound