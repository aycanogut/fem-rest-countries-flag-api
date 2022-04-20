import React, { ReactNode } from 'react'
import ReactModal from 'react-modal'

interface IModalProps {
  children: ReactNode
  isOpen: boolean
}

const Modal: React.FC<IModalProps> = ({ isOpen, children }) => {
  return <ReactModal isOpen={isOpen}>{children}</ReactModal>
}

export default Modal
