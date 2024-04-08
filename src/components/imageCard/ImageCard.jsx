import css from './ImageCard.module.scss';
import { useState } from 'react';
import ImageModal from '../imageModal/ImageModal';


const ImageCard = ({src, alt, modal, description, likes, author}) => {
  const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true);
    };

    return (
      <div className={css["image-wrapper"]}>
        <a href={modal} className={css["gallery-link"]}></a>
        <img className={css["image"]} src={src} alt={alt} width="24" onClick={openModal}/>
        <a/>
        {isOpen && ( 
        <ImageModal modal={modal} description={description} likes={likes} author={author} isOpen={isOpen} setOpen={setIsOpen} />
      )}
      </div>
     
    );
  };
  
  export default ImageCard ;