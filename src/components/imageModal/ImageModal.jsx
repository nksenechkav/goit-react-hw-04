import css from './ImageModal.module.scss';
import Modal from 'react-modal';
import { AiTwotoneLike } from "react-icons/ai";

Modal.setAppElement("#root");

const customStyles = {
 
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "hidden",
    objectFit: "contain",
    border: "none",
    borderRadius: "5px",
    padding: "0",
    margin: "20px", 
  },
};

const ImageModal = ({ modal, description, likes, author, isOpen, setOpen }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
      style={customStyles}> 
      <div className={css["modal-window"]}>
        <div className={css["modal-image"]}>
        <img src={modal} alt={description}/>
        </div>
            <div className={css["modal-text"]}> 
                    <div className={css["modal-element"]}><p><AiTwotoneLike /></p><span>{likes}</span></div>
                    <div className={css["modal-element"]}><span>{description}</span></div>
                    <div className={css["modal-element"]}><span>{author}</span></div>
            </div>
      </div>
    </Modal>
  );
}

export default ImageModal;