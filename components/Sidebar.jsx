import React from 'react'
import NavItem from './NavItem'
import Button from './Button'
import UserInfo from './UserInfo'
import { BsTwitter, BsBookmark, BsThreeDots } from 'react-icons/bs'
import { RiHome7Fill, RiFileList2Line } from 'react-icons/ri'
import { HiHashtag } from 'react-icons/hi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiMail } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className="sticky top-0 mb-1 flex h-screen basis-1/4 flex-col border-r border-gray-600 border-opacity-50 pr-3 text-gray-200">
      <div className="mb-2 cursor-pointer p-3">
        <BsTwitter size={30} />
      </div>

      <NavItem icon={() => <RiHome7Fill size={30} />} text="Home" />
      <NavItem icon={() => <HiHashtag size={30} />} text="Explore" />
      <NavItem
        icon={() => <IoMdNotificationsOutline size={30} />}
        text="Notifications"
      />
      <NavItem icon={() => <FiMail size={30} />} text="Messages" />
      <NavItem icon={() => <BsBookmark size={30} />} text="Bookmarks" />
      <NavItem icon={() => <RiFileList2Line size={30} />} text="Lists" />
      <NavItem icon={() => <AiOutlineUser size={30} />} text="Profile" />
      <NavItem icon={() => <BsThreeDots size={30} />} text="More" />
      <Button text={'Tweet'} />

      <UserInfo />
    </div>
  )
}

export default Sidebar
