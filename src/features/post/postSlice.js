import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  posts: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchPost = createAsyncThunk('posts/fetchPost', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
})

const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPost.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
      state.error = ''
    })
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message
    })
  }
})

export default postSlice.reducer
