import cancelMOdal from '../../assets/cancelModal.svg'
import './modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-overlay" onClick={handleClose} />
      <div className="modal-body">
        <div>{children}</div>
        <button className="modal-close" onClick={handleClose}>
          <img src={cancelMOdal} alt="Кнопка закрыть" />
        </button>
      </div>
    </div>
  )
}

export default Modal
