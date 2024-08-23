import Image from 'next/image'
import React from 'react'
import PostInfo from './PostInfo'
import PostInteraction from './PostInteraction'
import Comments from '../comments/Comments'

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
              src="https://images.pexels.com/photos/23193135/pexels-photo-23193135.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"          
              fill
              className="object-cover rounded-md"
              alt=""
            />
        </div>
        {/* <p>{post.desc}</p> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe sequi cupiditate numquam perferendis accusamus totam, autem dolorem enim vero cumque explicabo. Ex quidem deserunt minima numquam eaque modi repudiandae?</p>
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
      <PostInteraction />
      <Comments />
    </div>
  )
}

export default Post