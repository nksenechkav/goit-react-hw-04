import css from './ImageGallery.module.scss';
import ImageCard from "../imageCard/ImageCard";


const ImageGallery = ({images}) => {
    
    return (
        <ul className={css["image-gallery"]}>
             {images.map((image, index) => {
                return (
                    <li key={`${image.id}-${index}`}>
                        <ImageCard image={image}/>
                    </li>
                );
            })}
        </ul>

    );
    
  }
  
  export default ImageGallery;