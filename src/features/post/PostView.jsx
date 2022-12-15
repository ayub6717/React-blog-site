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
      <h2>List of Posts</h2>
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
