import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const btnArr = ["All", "Songs", "Gaming", "Live", "Soccer", "Cricket", "Kapil Sharma", "News", "JavaScipt", "thriller", "Computer Science", "Sci-Fi films", "Sketch comedy", "Cooking", "Valentine"]
  return (
    <div className='flex w-full items-center overflow-x-auto'>
        {btnArr.map((btn) => <Button key={btn} name={btn} />)}
    </div>
  )
}

export default ButtonList