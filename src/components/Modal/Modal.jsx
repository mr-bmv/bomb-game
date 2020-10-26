import React from 'react'
import { Spring } from 'react-spring/renderprops';
import { useGameContext } from '../../context/GameContext';
import { useModalContext } from '../../context/ModalContext';

// components
import { Loader } from '../Loader/Loader';
import { Spinner } from '../Spinner/Spinner';

// styles
import { Background, ModalContent, ModalWrapper, WinText } from './ModalElements';

//  message shown when user win the game
// could be closed by clicking in any place
const Modal = () => {

  const { showModal, toggleModal } = useModalContext();
  const { field } = useGameContext();

  const closeModal = () => {
    toggleModal()
  }

  return (
    <>
      {
        // modal would be shown ust when game over and user win
        showModal && (field.score === field.bomb)
          ?
          (
            <Background onClick={() => closeModal()}>
              <Spring
                from={{ opacity: 0, transform: `translateY(-300%)` }}
                to={{ opacity: 1, transform: `translateY(0%)` }}
                config={{ duration: 550 }}>
                {props => (
                  <ModalWrapper style={props}>
                    <Loader />
                    <Spinner />
                    <Loader />
                    <Spinner />
                    <ModalContent>
                      <WinText className="game-over" >Все бомбы найдены</WinText>
                    </ModalContent>
                  </ModalWrapper>
                )}
              </Spring>
            </Background>
          ) : null
      }
    </>
  )
}

export default Modal;