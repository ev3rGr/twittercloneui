import Image from 'next/image'
import React from 'react'

import { AiOutlineGif } from 'react-icons/ai'
import { FiSmile, FiImage } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const PostFeed = () => {
  return (
    <div className="flex border-b border-gray-500 border-opacity-50 p-4  ">
      <div className="mr-5">
        <Image
          className="rounded-full"
          src={'/user image.jpg'}
          width={50}
          height={50}
        />
      </div>
      <div className="flex w-full flex-col">
        <input
          placeholder="What's happening?"
          className=" bg-default-color py-2 text-2xl opacity-70 outline-none focus:opacity-100"
        />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex basis-1/3 items-center justify-between ">
            <a href="#" className="p-2 hover:rounded-full hover:bg-cyan-600/10">
              <FiImage color="#1D9BF0" size={20} />
            </a>
            <a href="#" className="p-2 hover:rounded-full hover:bg-cyan-600/10">
              <AiOutlineGif color="#1D9BF0" size={20} />
            </a>
            <a href="#" className="p-2 hover:rounded-full hover:bg-cyan-600/10">
              <FiSmile color="#1D9BF0" size={20} />
            </a>
            <a href="#" className="p-2 hover:rounded-full hover:bg-cyan-600/10">
              <HiOutlineLocationMarker color="#1D9BF0" size={20} />
            </a>
          </div>
          <a
            href="#"
            className="rounded-full bg-cyan-500 px-4 py-1 font-bold opacity-40 "
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostFeed
