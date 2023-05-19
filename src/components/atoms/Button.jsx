'use client'
import React from 'react'

const Button = ({ children, colors, type = 'button', route, onClick }) => {
  return (
    <button
      type={type}
      className={`b2b ${colors} 
        px-6 py-2 rounded-md cursor-pointer h-12 cursor-pointer`}
      onClick={() => {
        if (onClick) onClick()
      }}
    >
      {children}
    </button>
  )
}

export default Button
