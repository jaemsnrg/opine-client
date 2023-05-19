const Logo = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
      }}
      viewBox='0 0 629 610'
      {...props}
    >
      <path
        d='m107.649 107.154 422.029 422.029M352.759 263.035l162.96-176.076M455.534 235.181l89.522 89.522M458.647 262.508l89.523-89.523M102.019 527.151 264.98 351.074M544.879 410.953 412.104 278.178M259.031 167.232l89.522-89.522M286.358 164.119l-89.522-89.522M434.803 77.887 302.028 210.662M177.247 374.943l-89.522-89.522M174.134 347.616l-89.522 89.522M87.902 199.171l132.775 132.775M361.497 438.523l-85.461 93.406M334.336 442.846l93.406 85.462M189.862 535.579l126.753-138.535'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeWidth: '41.87px',
        }}
      />
      <path
        d='M20.935 20.935h586.698v567.548H20.935z'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeWidth: '41.87px',
          strokeLinecap: 'square',
          strokeLinejoin: 'bevel',
        }}
      />
    </svg>
  )
}

export default Logo
