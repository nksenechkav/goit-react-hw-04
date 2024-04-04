// import { useState } from 'react'
import SearchBar from '../searchBar/SearchBar'
import './App.css'

function App() {

  const searchImages = () => {
    
  };

  return (
    <div className='gallery-container'>
       <SearchBar onSubmit={searchImages}/>
       {/* <ImageGallery images={filter} onFilter={setFilter}/> */}
    </div>
  )
}

export default App
