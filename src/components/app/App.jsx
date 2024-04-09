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
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    const handleSearch = async query => {
      try {
        setQuery(query);
        setImages([]);
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithQuery(query, page);
        setImages(data.results);
        setShowBtn(data.total_pages && data.total_pages !== page);
        console.log(data.total_pages)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };


    useEffect(() => {
      if (!query || page > totalPages) return;
      fetchImages();
    }, [query, page]);
  
  
    const fetchImages = async () => {
      setLoading(true);
      const data = await fetchImagesWithQuery(query, page);
      setImages([...images, ...data.results]);
      setPage(page + 1);
      setTotalPages(data.total_pages);
      setShowBtn(data.total_pages && data.total_pages !== page);
      setLoading(false);
    };
  

    const handleLoadMore = () => {
      fetchImages();
    };
  
  return (
    <div className='gallery-container'>
       <SearchBar onSearch={handleSearch}/>
       {loading && <LoaderComponent />}
       {error && <ErrorMessage />}
       {images.length > 0 && <ImageGallery images={images} />}
       {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  )
}

export default App
