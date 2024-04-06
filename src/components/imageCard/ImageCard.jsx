import css from './ImageCard.module.scss';

const ImageCard = ({src, alt, likes}) => {
    return (
      <div className={css["image-wrapper"]}>
        <img className={css["image"]} src={src} alt={alt} />
        <p>likes:{likes}</p>
      </div>
    );
  };
  
  export default ImageCard ;