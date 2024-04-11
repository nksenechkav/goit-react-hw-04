import { useState } from 'react'
import { useEffect } from 'react';
import SearchBar from '../searchBar/SearchBar'
import ImageGallery from '../imageGallery/ImageGallery'
import { fetchImagesWithQuery } from '../api/images-api';
import ErrorMessage from '../error/ErrorMessage'
import LoaderComponent from '../loader/LoaderComponent';
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';

import './App.css'


  function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);

    const onSubmit = (query) => {
       setImages([]);
       setTotalPages(null);
       setPage(1);
       setQuery(query);
    }
  
    const onLoadMore = () => {
      setPage((prevPage) => prevPage + 1);
    }
  
    useEffect(() => {
      if (!query) return;
      async function fetchImages (){
        try {
          setError(false);
          setLoading(true);
          const data = await fetchImagesWithQuery(query, page);
          if (data.results.length === 0) {
            return;
          }
          setTotalPages(data.total_pages);
          setImages((prevImages) => [...prevImages, ...data.results]);
          setShowBtn(data.total_pages && data.total_pages !== page);
        } catch (error) {
          setError(true);
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      }
      fetchImages();
    }, [query, page]);
  

  return (
    <div className='gallery-container'>
       <SearchBar onSearch={onSubmit}/>
       {loading && <LoaderComponent />}
       {error && <ErrorMessage />}
       {images.length > 0 && <ImageGallery images={images}/>}
       {showBtn && page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />} 
      
    </div>
  )
}

export default App
