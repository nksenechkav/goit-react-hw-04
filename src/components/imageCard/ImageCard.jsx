import css from './ImageCard.module.scss';
import { useState } from 'react';
import ImageModal from '../imageModal/ImageModal';

const ImageCard = ({image: {urls, description, likes, author}}) => {
  const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true);
    };

    return (
      <div className={css["image-wrapper"]}>
        <a href={urls.regular} className={css["gallery-link"]}></a>
        <img className={css["image"]} src={urls.small} alt={description} width="24" onClick={openModal}/>
        <a/>
        {isOpen && ( 
        <ImageModal modal={urls.regular} description={description} likes={likes} author={author} isOpen={isOpen} setOpen={setIsOpen} />
      )}
      </div>
     
    );
  };
  
  export default ImageCard ;