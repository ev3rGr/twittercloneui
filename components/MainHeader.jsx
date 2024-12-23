import React from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'
const MainHeader = () => {
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between px-2 pb-4 pt-3 backdrop-blur-xl">
      <div className="ml-2 text-xl font-bold">Home</div>
      <div className="p-2 hover:cursor-pointer hover:rounded-full hover:bg-gray-400/20">
        <HiOutlineSparkles size={20} />
      </div>
    </div>
  )
}

export default MainHeader
