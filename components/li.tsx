import React from 'react'

function Li({ children }: { children?: React.ReactNode }) {
  return <li className='px-1 mx-5'>{children}</li>
}

export default Li
