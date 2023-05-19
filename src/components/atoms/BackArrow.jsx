import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={34} height={18} fill='none' {...props}>
    <path stroke='#000' strokeLinecap='square' strokeLinejoin='round' strokeWidth={2} d='M33 9H3M8 16 1 9l7-7' />
  </svg>
)
export default SvgComponent
