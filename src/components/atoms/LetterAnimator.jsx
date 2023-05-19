'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'

const LetterAnimator = ({ text, textColor, initialDelay }) => {
  const letters = text.split('')
  return (
    <div className='relative overflow-hidden whitespace-nowrap'>
      <motion.div className='relative bottom-0 left-0 w-full'>
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              delay: initialDelay + index * 0.066,
              duration: 0.9,
              ease: 'anticipate',
            }}
            className={`${textColor} inline-block`}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default LetterAnimator
