import React from 'react'
import FollowUser from './FollowUser'

const WhoToFollow = () => {
  return (
    <div className="mt-3 rounded-2xl bg-cyan-800/20 pt-3">
      <h3 className=" px-3 pb-3 text-2xl font-bold">Who to follow</h3>
      <FollowUser />
      <FollowUser />
      <div
        className="cursor-pointer px-3 pt-2 pb-4 text-cyan-600 hover:rounded-b-2xl
      hover:bg-cyan-800/20"
      >
        Show more
      </div>
    </div>
  )
}

export default WhoToFollow
