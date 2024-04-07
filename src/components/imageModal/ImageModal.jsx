import css from './ImageModal.module.scss';
import Modal from 'react-modal';

const ImageModal = ({ modal, description, likes, author, isOpen, setOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}> 
      <div className={css["modal-window"]}>
        <img className={css["modal-image"]} src={modal} alt={description}/>
            <div className={css["modal-text"]}> 
                    <div className={css["modal-elemet"]}><p>Likes</p><span>{likes}</span></div>
                    <div className={css["modal-elemet"]}><p>Description</p><span>{description}</span></div>
                    <div className={css["modal-elemet"]}><p>Author</p><span>{author}</span></div>
            </div>
        </div>
    </Modal>
  );
}

export default ImageModal;