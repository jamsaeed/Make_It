import { useState } from 'react'
import CreateComic from './components/CreateComic'
import MainGallery from './components/MainGallery'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {


  return (
    <>
    
    <Routes>
      <Route path="/" element={<MainGallery/>}/>
      <Route path="/create-your-comic" element={<CreateComic/>}/>

    </Routes>
    </>
  )
}

export default App
