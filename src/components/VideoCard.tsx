import React from 'react'

const VideoCard = (props: any) => {
  return (
    <div className='p-3'>
      <img className='rounded-xl' src={props.image}></img>
      <div className='grid grid-cols-12 pt-2'>
        <div className='col-span-1'>
        <img className='rounded-full w-20 h-20' src={props.thumbnail}></img>
        </div>
        <div className='col-span-11'>
            <div>{props.title}</div>

            <div className=' text-gray-600 col-span-11'>
           {props.author}
        </div>

        <div className='col-span-11 text-gray-600'>
            {props.views} | {props.timeStamp}
        </div>
        </div>

       
      </div>
    </div>
  )
}

export default VideoCard
