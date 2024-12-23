import React from 'react'
import MainHeader from './MainHeader'
import PostFeed from './PostFeed'
const Main = () => {
  return (
    <div className="flex basis-3/5 flex-col  border-r border-gray-600 border-opacity-50 ">
      <MainHeader />
      <PostFeed />
    </div>
  )
}

export default Main
