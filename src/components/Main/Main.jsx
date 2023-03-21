import { useState } from 'react'
import Button from '../Button/Button'
import ModalButton from '../ModalButton/ModalButton'
import Modal from '../Modal/Modal'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './main.css'
import plus from '../../assets/plus.svg'
import warning from '../../assets/warning.svg'
import MyTable from '../Table/MyTable'
import ArrowInput from '../ArrowInput/ArrowInput';
import ArrowInputColor from '../ArrowInput/ArrowInputColor';

const Main = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='main'>
      <div style={{ marginBottom: '35px', position: 'relative' }} onClick={handleOpenModal}>
        <Button
          text="Создать свой магазин"
          svg={plus}
          color="#2ecc71"
        />
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <h2 className='modal_title'>Создать магазин</h2>
        <div className='modal_inputs'>
          <div className='modal_input'>
            <span className='modal_inputs--title'>Шаблон</span>
            {/* <input type="text" /> */}
            <ArrowInput />
          </div>
          <div className='modal_input'>
            <span className='modal_inputs--title'>Цветовая схема</span>
            {/* <input type="text" /> */}
            <ArrowInputColor />

          </div>
        </div>
        <div className='modal_input'>
          <span className='modal_inputs--title'>Домен</span>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Например: ivangrozniy"
              aria-label="Например: ivangrozniy"
              aria-describedby="basic-addon2"
              id='basic-addon3'
            />
            <InputGroup.Text id="basic-addon2">.work5.ru</InputGroup.Text>
          </InputGroup>
        </div>
        <div className='modal_warning'>
          <img className='modal_warning--img' src={warning} alt="warning" />
          <span className='modal_warning--text'>В названии домена разрешены латиница и “-”, запрещается использовать словосочетание Work 5. После создания магазина Вы сможете прикрутить свой домен (например ivangrozniy.ru). Подробнее по ссылке</span>
        </div>
        <div className='modal_buttons'>
          <ModalButton
            text="Отмена"
            color="#B1B1B1"
          />
          <ModalButton
            text="Создать"
            color="#2ecc71"
          />
        </div>
      </Modal>
      <span className='main_title'>Управление магазинами</span>
      <MyTable />
    </div>
  )
}

export default Main
