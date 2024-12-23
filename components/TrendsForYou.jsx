import React from 'react'
import Trend from './Trend'
import { FiSettings } from 'react-icons/fi'

const TrendsForYou = () => {
  return (
    <div className="mt-3 rounded-2xl bg-cyan-800/20 pt-3">
      <div className="flex flex-row items-center justify-between px-3 pb-3">
        <h3 className=" text-2xl font-bold">Trends for you</h3>
        <div className="cursor-pointer p-2 hover:rounded-full hover:bg-gray-700/50">
          <FiSettings size={20} />
        </div>
      </div>

      <Trend topic={'Politics'} content="Ukraine" twtNumber={2000} />
      <Trend topic={'Politics'} content="Ukraine" twtNumber={2000} />
      <Trend topic={'Politics'} content="Ukraine" twtNumber={2000} />
      <Trend topic={'Politics'} content="Ukraine" twtNumber={2000} />
      <div
        className="cursor-pointer px-3 pt-2 pb-4 text-cyan-600 hover:rounded-b-2xl
      hover:bg-cyan-800/20"
      >
        Show more
      </div>
    </div>
  )
}

export default TrendsForYou
