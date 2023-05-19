import React from 'react'
import { Instagram, Twitter, Youtube } from 'react-feather'

const SocialMedia = ({ type, link }) => {
  const getIcon = () => {
    switch (type) {
      case 'instagram':
        return <Instagram className='w-6 h-6' />
      case 'twitter':
        return <Twitter className='w-6 h-6' />
      case 'youtube':
        return <Youtube className='w-6 h-6' />
      default:
        return null
    }
  }

  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className={`inline-flex items-center justify-center rounded-full hover:bg-gray-800`}
    >
      {getIcon()}
    </a>
  )
}

export default SocialMedia
