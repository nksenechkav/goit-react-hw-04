import css from './ImageCard.module.scss';

const ImageCard = () => {
    return (
      <div className={css["image-wrapper"]}>
        <img className={css["image"]} src="" alt="" />
      </div>
    );
  };
  
  export default ImageCard ;