import React, { ReactNode, Children, ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import A from './aTag'

interface Props extends LinkProps {
  children: ReactNode
}

function CustomLink({ href, passHref, children, ...props }: Props) {
  const { asPath } = useRouter()
  // const child = Children.only(children) as ReactElement
  // const childClassName = child.props.className || ''
  // const className =
  //   href === asPath ? `${childClassName} text-red-500` : childClassName
  const isActive = href === asPath

  return (
    <Link href={href} passHref {...props}>
      {/* {cloneElement(child, {
        className: className || null,
      })} */}
      <A className={isActive ? 'text-red-500' : undefined}>{children}</A>
    </Link>
  )
}

export default CustomLink
