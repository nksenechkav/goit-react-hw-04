import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import ImageModal from './components/imageModal/ImageModal.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ImageModal />
  </React.StrictMode>
)
