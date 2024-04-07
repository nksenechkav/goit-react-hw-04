import css from './ImageGallery.module.scss';
import ImageCard from "../imageCard/ImageCard";


const ImageGallery = ({images}) => {
    
    return (
        <ul className={css["image-gallery"]}>
             {images.map((image) => {
                return (
                    <li key={image.id}>
                        <ImageCard
                        id={image.id}
                        src={image.urls.small}
                        modal={image.urls.regular}
                        alt={image.alt_description}
                        description={image.description}
                        likes={image.likes}
                        author={image.user.name}
                        />
                    </li>
                );
            })}
        </ul>

    );
    
  }
  
  export default ImageGallery;