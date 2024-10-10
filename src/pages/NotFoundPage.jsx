import Container from 'postcss/lib/container'
import React from 'react'

const NotFoundPage = () => {
  return (
   <div className='h-screen flex justify-center items-center'>
      <div className='bg-slate-900 text-white p-3'>
        <p className='text-2xl uppercase tracking-wider'>Page Not Found</p>
      </div>
   </div>
  )
}

export default NotFoundPage
