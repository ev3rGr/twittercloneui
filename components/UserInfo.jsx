import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
const UserInfo = () => {
  return (
    <div className="mt-10 flex cursor-pointer items-center justify-between py-2 px-3 hover:rounded-full hover:bg-gray-700 hover:bg-opacity-30 ">
      <Image
        className="rounded-full"
        src={'/user image.jpg'}
        width={40}
        height={40}
      />

      <div>
        <div className="font-bold">oussama lahrizi</div>
        <div className="text-gray-400/75">@lahrizi_oussama</div>
      </div>
      <BsThreeDots size={20} />
    </div>
  )
}

export default UserInfo
