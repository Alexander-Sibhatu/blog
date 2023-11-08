import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBlog } from '../features/blogsSlice';

const AddBlog = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {id: uuidv4(), title, body}
    dispatch(addBlog(newBlog))
    setBody('');
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className='add_Blog'>
      <h2>Write your own blog</h2>
      <input type='text' className='title' placeholder='Enter title' 
        onChange={(event) => {
          setTitle(event.target.value)
        }} value={title}>
      </input>
      <textarea type='text' className='body' placeholder='Write your blog' 
        onChange={(event) => {
          setBody(event.target.value)
        }} value={body}>
      </textarea>
      <button type='submit' className='btn'>Submit</button>
    </form>
  )

}
export default AddBlog