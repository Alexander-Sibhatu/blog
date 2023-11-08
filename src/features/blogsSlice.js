import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [
        {id: 1, title: 'alchemist', 
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod corporis numquam officia placeat rerum a quis neque commodi eveniet adipisci!'},
        {id: 2, title: 'Titanic', 
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla facere tempore accusamus deleniti unde qui beatae. Sint, quibusdam dolore!'}      
    ]
}

const blogsSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {
        displayBlogs: (state) => state,
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
        },
        deleteBlog: (state, action) => {
            const  id  = action.payload;
            state.blogs = state.blogs.filter((blog) => blog.id !== id);
        }
    }
})

export const {displayBlogs, addBlog, deleteBlog } = blogsSlice.actions;
export default blogsSlice.reducer