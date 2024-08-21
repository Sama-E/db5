import React from 'react'
import StoryLists from './StoryLists'

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
        <div className="flex gap-8 w-max">
        {/* <StoryList stories={stories} userId={currentUserId}/> */}
        <StoryLists />
        </div>
    </div>
  )
}

export default Stories