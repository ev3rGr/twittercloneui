import React from 'react'
import Search from './Search'
import TrendsForYou from './TrendsForYou'
import WhoToFollow from './WhoToFollow'
const Trends = () => {
  return (
    <div className="mb-2 basis-2/5 px-3">
      <Search />
      <TrendsForYou />
      <WhoToFollow />
    </div>
  )
}

export default Trends
