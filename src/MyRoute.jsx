import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './layout/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Calhook from './hooks/Calhook'

const MyRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path = '/' element = {<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {/* Hooks */}
        <Route path='/calhook' element={<Calhook/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoute