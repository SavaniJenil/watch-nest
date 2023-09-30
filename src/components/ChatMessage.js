import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='m-2 flex flex-row items-start'>
        <img className='h-7 w-7 border border-black rounded-full' alt="user-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSZ7267xfDuKGyNkrHli7hOWgDyq1EFLXpg&usqp=CAU' />
        <div className='flex flex-row ml-2 items-ceneter mt-1'>
        <span className='text-gray-500 text-xs'>{name+ ": "}</span>
        <span className='text-black text-xs ml-2'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage