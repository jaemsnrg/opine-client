import ShadeTransition from '@/components/atoms/ShadeTransition'

const Grid = ({ children, background, hasMarginTop = true, shadingTop = false, shadingBottom = false }) => {
  return (
    <div className={`relative ${background}`}>
      {shadingTop && <ShadeTransition direction='top-bottom' position='top' />}

      <div
        className={`relative h-full mx-3 mx-3 md:mx-auto max-w-[65rem] grid grid-cols-6 gap-2 ${
          hasMarginTop ? 'mt-40' : ''
        }`}
      >
        {children}
      </div>
      {shadingBottom && <ShadeTransition direction='bottom-top' position='bottom' />}
    </div>
  )
}

export default Grid
