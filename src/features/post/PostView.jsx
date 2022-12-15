import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost } from './postSlice'

export const PostView = () => {
  const post = useSelector(state => state.post)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPost())
  }, [])
  return (
    <div>
      <h1 className="font-bold underline text-[22px] mt-[30px] text-[#358ea0]">
      List of Posts
    </h1>
      {post.loading && <div>Loading...</div>}
      {!post.loading && post.error ? <div>Error: {post.error}</div> : null}
      {!post.loading && post.posts.length ? (
        <ul>
          {post.posts.slice(0,9).map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
