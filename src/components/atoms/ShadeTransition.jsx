import React from 'react'

const ShadeTransition = ({ direction, position }) => {
  return (
    <div
      className={`
      absolute
      w-full
      z-0
      ${position === 'bottom' ? 'bottom-0' : 'top-0'}
      ${
        direction === 'bottom-top'
          ? 'bg-gradient-to-t from-off-white-dark to-black'
          : 'bg-gradient-to-b from-off-white-dark to-black'
      } h-72 `}
    ></div>
  )
}

export default ShadeTransition
