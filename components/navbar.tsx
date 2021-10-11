import React from 'react'

import Link from './customLink'
import Li from './li'

function Navbar() {
  return (
    <nav className='w-full h-16 m-0 p-0'>
      <ul className='h-full flex justify-center items-center border-b border-gray-500 m-0 px-5'>
        <Li>
          <Link href='/'>
            <a className='list'>Home</a>
          </Link>
        </Li>
        <Li>
          <Link href='/posts'>
            <a className='list'>Posts</a>
          </Link>
        </Li>
        <Li>
          <Link href='/about'>
            <a className='list'>About</a>
          </Link>
        </Li>
      </ul>
    </nav>
  )
}

export default Navbar
