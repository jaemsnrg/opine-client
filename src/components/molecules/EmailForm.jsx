'use client'
import React, { useState } from 'react'
import Button from '@/components/atoms/Button'

const EmailForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(email)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-row items-center'>
      <input
        type='email'
        className='focus:outline-dark-blue b3 min-w-80 p-3 mr-2 rounded-md focus:border-crimson'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button colors=' bg-dark-blue text-cream' type='submit'>
        submit
      </Button>
    </form>
  )
}

export default EmailForm
