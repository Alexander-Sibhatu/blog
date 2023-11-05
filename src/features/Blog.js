import React from 'react'
import { useSelector } from 'react-redux'

const Blog = () => {
    const {blogs} = useSelector((state) => state.blogR);
    console.log(blogs);
  return (
    <div>
        {
            blogs.map((blog) => {
                const {id, title, body} = blog;
                return(
                    <div key={id}>
                        <h1>{title}</h1>
                        <div>{body}</div>
                    </div>
                    )
                })
        }
    </div>
  )
}

export default Blog