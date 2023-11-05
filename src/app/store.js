import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../features/blogsSlice'

export default configureStore({
  reducer: {
    blogR: blogsReducer,
  }
})