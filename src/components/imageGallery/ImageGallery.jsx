import css from './ImageGallery.module.scss';
import ImageCard from "../imageCard/ImageCard";


const ImageGallery = ({images}) => {
    
    return (
        <ul className={css["image-gallery"]}>
             {images.map((image) => {
                return (
                    <li key={image.id}>
                        <ImageCard
                        id={image.cover_photo.id}
                        src={image.cover_photo.urls.small}
                        modal={image.cover_photo.urls.regular}
                        alt={image.cover_photo.alt_description}
                        description={image.cover_photo.description}
                        likes={image.cover_photo.likes}
                        author={image.cover_photo.user.name}
                        />
                    </li>
                );
            })}
        </ul>

    );
    
  }
  
  export default ImageGallery;