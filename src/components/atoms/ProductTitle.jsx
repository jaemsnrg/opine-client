import React from 'react'

const ProductTitle = ({ children, underlineColor, textColor }) => {
  return (
    <div>
      <div className={`${textColor} t3 text-cream  rounded-md cursor-pointer`}>{children}</div>
      <div className={`${underlineColor} w-full h-2 rounded`}></div>
    </div>
  )
}

export default ProductTitle
