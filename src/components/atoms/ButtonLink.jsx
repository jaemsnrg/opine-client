'use client'
import Link from 'next/link'

const ButtonLink = ({ href, children, colors }) => {
  return (
    <Link
      href={href}
      className={`b2b ${colors} 
        px-6 py-2 rounded-md cursor-pointer h-12 cursor-pointer`}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
