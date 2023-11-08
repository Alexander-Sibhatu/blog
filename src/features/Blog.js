import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog } from './blogsSlice';

const Blogs = () => {
    const {blogs} = useSelector((state) => state.blogR);
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteBlog(id));
    }

  return (
    <div className='blogs'>
        {
            blogs.map((blog) => {
                const {id, title, body } = blog;
                
                return(
                        <div className='blog' key={id}>
                            <h1 className='title'>{title}</h1>
                            <div>{body}</div>
                            <button onClick={() => handleDelete(id)} className='btn'>Delete
                            </button>
                        </div>
                )
            })
            }
    </div>
  )
}

export default Blogs

