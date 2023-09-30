import React from 'react'

const Button = ({ name }) => {
  return (
    <div className=''>
      <button className='text-sm font-semibold py-2 px-3 whitespace-nowrap m-2 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button