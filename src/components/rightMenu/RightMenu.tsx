import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import Ad from '../ads/Ad'

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null} */}
      <>
        <UserInfoCard />
        <UserMediaCard />
      </>
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  )
}

export default RightMenu