import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ info }) => {
    // console.log(info);
    const { statistics, snippet, contentDetails } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    const { duration } = contentDetails;

    function formatViews(views) {
        const viewsNumber = parseInt(views);  
        if (viewsNumber >= 1e9) { // 1 billion or more
            return (viewsNumber / 1e9).toFixed(1) + "B"; // Display as X.XB
        } else if (viewsNumber >= 1e6) { // 1 million or more
            return (viewsNumber / 1e6).toFixed(1) + "M"; // Display as X.XM
        } else if (viewsNumber >= 1e3) { // 1 thousand or more
            return (viewsNumber / 1e3).toFixed(1) + "K"; // Display as X.XK
        } else { // Less than 1 thousand
            return viewsNumber.toString(); // Display as is
        }
    }
    const formattedViews = formatViews(statistics.viewCount);

    function getRelativeTime(dateString) {
        const currentDate = new Date();
        const providedDate = new Date(dateString);
    
        const timeDifference = currentDate - providedDate;
        const secondsDifference = Math.floor(timeDifference / 1000);
        const minutesDifference = Math.floor(secondsDifference / 60);
        const hoursDifference = Math.floor(minutesDifference / 60);
        const daysDifference = Math.floor(hoursDifference / 24);
        const monthsDifference = Math.floor(daysDifference / 30);
        const yearsDifference = Math.floor(monthsDifference / 12);
    
        if (yearsDifference > 0) {
            return yearsDifference === 1 ? "1 year ago" : `${yearsDifference} years ago`;
        } else if (monthsDifference > 0) {
            return monthsDifference === 1 ? "1 month ago" : `${monthsDifference} months ago`;
        } else if (daysDifference > 0) {
            if (daysDifference === 1) {
                return "1 day ago";
            } else if (daysDifference < 7) {
                return `${daysDifference} days ago`;
            } else {
                const weeks = Math.floor(daysDifference / 7);
                return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
            }
        } else if (hoursDifference > 0) {
            return hoursDifference === 1 ? "1 hour ago" : `${hoursDifference} hours ago`;
        } else if (minutesDifference > 0) {
            return minutesDifference === 1 ? "1 minute ago" : `${minutesDifference} minutes ago`;
        } else {
            return secondsDifference <= 10 ? "just now" : `${secondsDifference} seconds ago`;
        }
    }
    
    const relativeTime = getRelativeTime(publishedAt);

    function timeConv(duration) {
        const matches = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        
        if (matches) {
          const hours = parseInt(matches[1]) || 0;
          const minutes = parseInt(matches[2]) || 0;
          const seconds = parseInt(matches[3]) || 0;
      
          let formattedDuration = '';
      
          if (hours > 0) {
            formattedDuration += hours.toString().padStart(2, '0') + ':';
          }
      
          formattedDuration += minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      
          return formattedDuration;
        } else {
          return null;
        }
      }
      
      const formattedDuration = timeConv(duration);

    
  return (
    <div className='p-2 m-2 w-80 rounded-lg hover:opacity-95 '>
        <img className='rounded-lg absolute' alt='video' src={thumbnails.medium.url} />
        <p className='bg-black bg-opacity-80 w-max px-1 rounded-sm text-white text-xs relative ml-[270px] mt-40'>{formattedDuration}</p>
        <ul  >
            <li className='font-semibold py-2 text-base text-ellipsis overflow-hidden h-[60px]'>{title}</li>
            <li className='text-sm text-gray-600'>{channelTitle}</li>
            <div className='flex flex-row text-gray-600 text-sm'>
            <p>{formattedViews} views - {relativeTime}</p>
            </div>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({ info }) => {
    return(
      <div className='border-3 bg-gray-50 rounded-lg hover:opacity-70'>
        <Link to="/adv">
        <VideoCard info={info} key={info.id} />
        </Link>
      </div>
    )
  }  

export default VideoCard