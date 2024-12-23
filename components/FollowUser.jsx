import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const FollowUser = () => {
  return (
    <div className="flex flex-row items-center justify-between p-3 hover:cursor-pointer hover:bg-cyan-800/20">
      <div className="flex flex-row">
        <Image
          className="rounded-full"
          src={'/user image.jpg'}
          width={50}
          height={50}
        />
        <div className="ml-3 flex flex-col  ">
          <p className=" font-bold  hover:underline ">Oussama Lahrizi</p>
          <p className="text-gray-400">@lahrizi_oussama</p>
        </div>
      </div>

      <div className="rounded-full bg-white py-1 px-4 font-bold text-black hover:bg-white/80 ">
        Follow
      </div>
    </div>
  )
}

export default FollowUser
