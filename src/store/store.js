import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../components/PostSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})