import React from 'react'

import Link from './customLink'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-lists'>
        <li className='nav-list'>
          <Link href='/'>
            <a className='list'>Home</a>
          </Link>
        </li>
        <li className='nav-list'>
          <Link href='/posts'>
            <a className='list'>Posts</a>
          </Link>
        </li>
        <li className='nav-list'>
          <Link href='/about'>
            <a className='list'>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
