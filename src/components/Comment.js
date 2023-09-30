import React from 'react'

const Comment = ({ data }) => {

    const { name, text, replies } = data;

  return (
    <div className='my-2 flex items-center'>
         <img
          className="w-8 h-8 mr-2"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        />
        <div>
            <p className='text-sm font-semibold'>{name}</p>
            <p className='text-sm'>{text}</p>
        </div>
    </div>
  )
}

export default Comment