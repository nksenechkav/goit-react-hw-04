import { useState } from 'react'
import { useEffect } from 'react';
import SearchBar from '../searchBar/SearchBar'
import ImageGallery from '../imageGallery/ImageGallery'
import { fetchImagesWithQuery } from '../api/images-api';
import ErrorMessage from '../error/ErrorMessage'
import LoaderComponent from '../loader/LoaderComponent';
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';
import ImageModal from '../imageModal/ImageModal';
import Modal from "react-modal";
import './App.css'

Modal.setAppElement("#root");

  function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {
      if (!query) return;
    }, [query, page]);

    const fetchData = async (query, page) => {
      try {
        setQuery(query);
        setImages([]);
        setError(false);
        setLoading(true);
        setPage(1);
        const data = await fetchImagesWithQuery(query, page);
        if (data.results.length === 0) {
          return;
        }
        setImages((images) => [...images, ...data.results]);
        setTotalPages(data.total_pages);
        setShowBtn(data.total_pages && data.total_pages !== page);
      }
      catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };


  
    const onLoadMore = async () => {
      try {
        setPage((prevPage) => prevPage + 1);
        setLoading(true);
        const newData = await fetchImagesWithQuery(query, page+1);
        setImages((prevImgs) => [...prevImgs, ...newData.results]);
        setTotalPages(newData.total_pages);
        setShowBtn(newData.total_pages && newData.total_pages !== page+1);
        
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
      finally {
        setLoading(false);
      }
    }

    

  return (
    <div className='gallery-container'>
       <SearchBar onSearch={fetchData}/>
       {loading && <LoaderComponent />}
       {error && <ErrorMessage />}
       {images.length > 0 && <ImageGallery images={images}/>}
       <ImageModal/>
       {showBtn && page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />} 
      
    </div>
  )
}

export default App
