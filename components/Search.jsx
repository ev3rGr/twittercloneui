import React from 'react'
import { FiSearch } from 'react-icons/fi'
const Search = () => {
  return (
    <div className=" sticky top-0 z-10 py-1 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FiSearch />
      </div>
      <input
        type="text"
        className="w-full rounded-full bg-cyan-800/20 p-3 pl-10 focus:border  focus:border-cyan-700 focus:outline-none  dark:text-white"
        placeholder="Search Twitter"
      />
    </div>
  )
}

export default Search
