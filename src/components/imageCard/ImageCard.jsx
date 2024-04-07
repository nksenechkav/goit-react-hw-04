import css from './ImageCard.module.scss';

const ImageCard = ({src, alt, likes, modal, description, author}) => {
    return (
      <div className={css["image-wrapper"]}>
        <a href={modal} className={css["gallery-link"]}></a>
        <img className={css["image"]} src={src} alt={alt} width="24"/>
        <a/>
        <div className={css["modal-text"]}> 
              <div className={css["modal-elemet"]}><p>Likes</p><span>{likes}</span></div>
              <div className={css["modal-elemet"]}><p>Description</p><span>{description}</span></div>
              <div className={css["modal-elemet"]}><p>Author</p><span>{author}</span></div>
        </div>
      </div>
    );
  };
  
  export default ImageCard ;