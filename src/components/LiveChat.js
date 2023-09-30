import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../store/chatSlice';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);

    function generateRandomHumanName() {
        const firstNames = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah"];
        const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Davis", "Miller", "Wilson"];
      
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      
        return randomFirstName + " " + randomLastName;
      }
      
      const randomName = generateRandomHumanName();

      function generateRandomComment() {
        const comments = [
          "Great video!",
          "This is awesome!",
          "I learned so much from this.",
          "You're doing a fantastic job.",
          "Keep up the good work!",
          "I can't believe how helpful this is.",
          "Thanks for sharing!",
          "Wow, I'm impressed.",
          "You make it look easy!",
          "I love your content!",
        ];
      
        const randomComment = comments[Math.floor(Math.random() * comments.length)];
      
        return randomComment;
      }

      const rndmComment = generateRandomComment();

      const handleClick= () => {
        if(liveMessage != "")
        {
            dispatch(addMessage({
                name: "Jenil Savani",
                message: liveMessage,
            }));
            setLiveMessage("");
        }
      }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(addMessage({
                name: randomName,
                message: rndmComment,
            }));
        }, 2000);
        
        return () =>  clearInterval(timer);
    }, [chatMessages])

  return (
    <div className='mx-auto my-3 w-[93%] border border-gray-100 shadow-sm rounded-lg h-[445px]'>
        <p className='h-8 border-b border-gray-100 text-center  text-xl font-semibold my-2'>LiveChat</p>
        <div className='border-b border-gray-100 h-[312px] overflow-y-scroll flex flex-col-reverse'>
            {
                 chatMessages.map((c, index)=> <ChatMessage key={index} name={c.name} message={c.message} />)
            }
        </div>
        <form className='w-full mt-4 flex flex-col' onSubmit={(e) => {
            e.preventDefault();
            handleClick();
        }}> 
            <input onChange={(e) => setLiveMessage(e.target.value)} value={liveMessage} className='border-b border-gray-200 w-[94%] px-2 mt-2 text-xs mx-auto focus:outline-0' placeholder='Chat...' />
            <div className='flex flex-row justify-between mt-1'>
                <img className='h-5 w-5 ml-4 mt-1 cursor-pointer' alt='emoji' src='https://cdn.icon-icons.com/icons2/3288/PNG/512/happy_emo_emoticon_emoji_icon_208299.png' />
                <div className=' flex flex-row mr-4 mt-1'>
                    <span className='text-xs mr-2 text-gray-500'>0/200</span>
                    <img onClick={handleClick} className='h-5 w-5 cursor-pointer' alt="send" src='https://icons.veryicon.com/png/o/miscellaneous/simple-icon-3/send-message-2-3.png' />
                </div>
            </div>
        </form>
    </div>
  )
}

export default LiveChat