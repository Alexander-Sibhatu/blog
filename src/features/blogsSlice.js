import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [
        {id: 1, title: 'alchemist', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, maxime.'},
        {id: 2, title: 'Titanic', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, tenetur?'}
        
    ]
}

const blogsSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {
        displayBlogs: (state) => state,
    }
})

export const {displayBlogs, addBlog, deleteBlog } = blogsSlice.actions;
export default blogsSlice.reducer