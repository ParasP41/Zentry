import React from 'react'

export default function Button({title,id,rightIcon,leftIcon,containerClass}) {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-voilet-50 py-3 px-7  flex text-black ${containerClass} `}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
            {title}
          </div>
        </span>
        {rightIcon}
    </button>
  )
}
