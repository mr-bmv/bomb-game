import React from 'react'
import styled from 'styled-components';
import { useGameContext } from '../../context/GameContext';
import { useModalContext } from '../../context/ModalContext';
import { Loader } from '../Loader/Loader';
import { Spinner } from '../Spinner/Spinner';

import './Modal.css'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  // width: 300px;
  // height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  // display: flex;
  // flex-direction: column;
  grid-column: 2 /4;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;

const Modal = () => {

  const { showModal, toggleModal } = useModalContext();
  const { field } = useGameContext();

  const closeModal = () => {
    toggleModal()
  }

  return (
    <>
      {
        showModal && (field.score === field.bomb) ?
          (
            <Background onClick={() => closeModal()}>
              <ModalWrapper>
                <Loader />
                <Spinner />
                <Loader />
                <Spinner />
                <ModalContent>
                  <div className="game-over">Все бомбы найдены</div>
                </ModalContent>
              </ModalWrapper>
            </Background>
          ) : null
      }
    </>
  )
}

export default Modal;