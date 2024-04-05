import css from './ImageGallery.module.scss';
import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({images}) => {

    return (
        <ul className={css["image-gallery"]}>
            <li>
                    <ImageCard/>
                </li>
        </ul>

    );
  }
  export default ImageGallery;