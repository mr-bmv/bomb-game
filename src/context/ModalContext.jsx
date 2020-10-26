import React, { useContext, useState } from 'react'

const ModalContext = React.createContext()

export const useModalContext = () => {
    return useContext(ModalContext)
}

const ModalProvider = ({ children }) => {


    const [showModal, setShowModal] = useState(true);

    const toggleModal = () => {
        setShowModal((showModal) => !showModal)
    }

    const resetModal = () => {
        setShowModal(true)
    }

    return (
        <div>
            <ModalContext.Provider value={{
                showModal,
                toggleModal,
                resetModal
            }}>
                {children}
            </ModalContext.Provider>
        </div>
    )
}

export default ModalProvider;