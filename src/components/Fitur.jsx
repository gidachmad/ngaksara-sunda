import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '@/utils/utils'

export default function Fitur({ img, title, text, path }) {
  return (
    <article className='bg-white flex flex-col lg:flex-row p-6 lg:p-10 w-4/5 lg:w-2/3 mx-auto rounded-lg shadow-lg justify-evenly'>
      <div className='basis-1/6 aspect-square p-6 lg:pb-0'>
        <img src={getImage(img)} alt={img} className=' h-full' />
      </div>
      <div className='basis-4/6 flex flex-col '>
        <h3 className='text-lg lg:text-2xl mb-4'>{title}</h3>
        <p className='text-md lg:text-xl mb-6'>{text}</p>
        <Link to={`/${path}`} className='button hover-transition mt-auto'>
          Lihat {title}
        </Link>
      </div>
    </article>
  )
}
