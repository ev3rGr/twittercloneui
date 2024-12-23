import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
const Trend = ({ topic, content, twtNumber }) => {
  return (
    <div className="flex cursor-pointer flex-col px-3 py-2 hover:bg-cyan-800/20">
      <div className="flex flex-row items-center justify-between">
        <p className="text-gray-400">{topic} . Trending</p>
        <div
          className=" p-2 hover:rounded-full
         hover:bg-cyan-700 hover:bg-opacity-40 hover:text-cyan-500/75"
        >
          <BsThreeDots />
        </div>
      </div>
      <p className="py-1 font-bold text-gray-200">{content}</p>
      <p className="text-sm text-gray-400">{twtNumber} Tweets</p>
    </div>
  )
}

export default Trend
