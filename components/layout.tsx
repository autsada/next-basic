import React from 'react'

import Navbar from './navbar'

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='py-5 px-10 text-center'>{children}</div>
    </>
  )
}

export default Layout
