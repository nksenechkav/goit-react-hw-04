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
        <img className={css["image"]} src={urls.small} alt={description} onClick={openModal}/>
        {isOpen && (
        <ImageModal modal={urls.regular} description={description} likes={likes} author={author} isOpen={isOpen} setOpen={setIsOpen}/>
       )}
      </div>
 
    );
  };
  
  export default ImageCard ;