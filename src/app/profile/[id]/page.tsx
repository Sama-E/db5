import LeftMenu from '@/components/leftMenu/LeftMenu'
import Feed from '@/components/posts/Feed'
import RightMenu from '@/components/rightMenu/RightMenu'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        {/* <LeftMenu type="profile" /> */}
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                // src={user.cover || "/noCover.png"}
                src={"/noCover.png"}
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                // src={user.avatar || "/noAvatar.png"}
                src={"/noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {/* {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username} */}
                Name
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                {/* <span className="font-medium">{user._count.posts}</span> */}
                <span className="font-medium">25</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                {/* <span className="font-medium">{user._count.followers}</span> */}
                <span className="font-medium">10</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                {/* <span className="font-medium">{user._count.followings}</span> */}
                <span className="font-medium">10</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          {/* <Feed username={user.username}/> */}
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        {/* <RightMenu user={user} /> */}
        <RightMenu />
      </div>
    </div>
  )
}

export default ProfilePage