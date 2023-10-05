import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-500 text-white p-4 mx-0 my-0'>
      <div className="max-w-[1500px] flex justify-between items-center mt-[34px] mx-auto rounded-lg p-4">
      ShvTech
       
      <ul className='hidden md:flex space-x-4 text-white gap-5'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Header