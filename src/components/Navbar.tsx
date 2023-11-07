import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full flex justify-center left-0 top-6 z-50'>
        <div className='flex w-10/12 mx-auto bg-white border border-black rounded-full  justify-between items-center py-2  px-4'>
            <h1 className='text-xl font-semibold capitalize ml-4'>The Problem Jar</h1>
            <a className='px-10 py-2 rounded-full border bg-primary border-black'>Contact Us</a>
        </div>
    </div>
  )
}

export default Navbar