import Image from 'next/image'
import React from 'react'

const StoryLists = () => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer relative">
        <Image
            // src={img?.secure_url || user?.imageUrl || "/noAvatar.png"}
            src={"/noAvatar.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
            // onClick={() => open()}
        />
        {/* {img ? (
        <form action={add}>
            <button className="text-xs bg-blue-500 p-1 rounded-md text-white">
            Send
            </button>
        </form>
        ) : (
        <span className="font-medium">Add a Story</span>
        )} */}
        {/* <div className="absolute text-6xl text-gray-200 top-1">+</div> */}
    </div>
  )
}

export default StoryLists