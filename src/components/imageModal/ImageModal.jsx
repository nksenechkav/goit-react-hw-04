import css from './ImageModal.module.scss';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    width: 'fit-content',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ modal, description, likes, author, isOpen, setOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
      style={customStyles}> 
      <div className={css["modal-window"]}>
        <img className={css["modal-image"]} src={modal} alt={description}/>
            <div className={css["modal-text"]}> 
                    <div className={css["modal-element"]}><p>Likes:</p><span>{likes}</span></div>
                    <div className={css["modal-element"]}><p>Description:</p><span>{description}</span></div>
                    <div className={css["modal-element"]}><p>Author:</p><span>{author}</span></div>
            </div>
      </div>
    </Modal>
  );
}

export default ImageModal;