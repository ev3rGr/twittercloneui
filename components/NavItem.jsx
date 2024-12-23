import React from 'react'

const NavItem = ({ icon, text }) => {
  const Icon = icon
  return (
    <a
      href="#"
      className=" mb-2 flex flex-row items-center p-3 py-2 hover:rounded-full hover:bg-gray-700 hover:bg-opacity-30  "
    >
      <div className="mr-4">
        <Icon />
      </div>

      <p className="pr-3 text-xl font-semibold">{text}</p>
    </a>
  )
}

export default NavItem
