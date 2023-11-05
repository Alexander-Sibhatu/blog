import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
// import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import AddBlog from '../pages/AddBlog'
import NavBar from '../layouts/NavBar'


const Index = () => {
  return (
    <div className='index-page'>
         
        
            <BrowserRouter>
                <NavBar /> 

                <main>
                    <Routes>
                        <Route path='/' element={<Home /> } />
                        <Route path='/show-blogs' element={<Home /> } />
                        <Route path='/add-blog' element={<AddBlog /> } />
                        <Route path='*' element={<Error /> } />
                    </Routes>
                </main>

                <Footer />
            </BrowserRouter>

        

        
    </div>
  )
}

export default Index