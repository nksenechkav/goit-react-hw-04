import { useState } from 'react'
// import { useEffect } from 'react';
import SearchBar from '../searchBar/SearchBar'
import ImageGallery from '../imageGallery/ImageGallery'
import { fetchImagesWithQuery } from '../api/ImagesApi';

import './App.css'

  function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (query) => {
      try {
        setImages([]);
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithQuery(query);
        setImages(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };


  // useEffect(() => {
  //   async function fetchImages() {
  //     try {
  //       setLoading(true);
	// 			const data = await fetchImagesWithQuery("react");
  //       setImages(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchImages();
  // }, []);


  return (
    <div className='gallery-container'>
       <SearchBar onSearch={handleSearch}/>
       {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery images={images} />}
    </div>
  )
}

export default App
