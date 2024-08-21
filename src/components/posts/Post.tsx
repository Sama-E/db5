import Image from 'next/image'
import React from 'react'
import PostInfo from './PostInfo'

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            // src={post.user.avatar || "/noAvatar.png"}
            src={"/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {/* {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username} */}
              Name
          </span>
        </div>
        {/* {userId === post.user.id && <PostInfo postId={post.id} />} */}
        <PostInfo />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {/* {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
        )} */}
        <div className="w-full min-h-96 relative">
            <Image
                src={""}
                fill
                className="object-cover rounded-md"
                alt=""
            />
        </div>
        {/* <p>{post.desc}</p> */}
        <p>DESC</p>
      </div>
      {/* INTERACTION */}
      {/* <Suspense fallback="Loading...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        />
      </Suspense>
      <Suspense fallback="Loading...">
        <Comments postId={post.id} />
      </Suspense> */}
    </div>
  )
}

export default Post