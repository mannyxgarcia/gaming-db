import React from 'react'

const Modal = ({ open, children, onClose }) => {
  if(!open) return null
  
  return (
    <>
      <div className="modal-overlay" onClick={() => onClose()}/>
      <div className="modal">
        {children}
      </div>
    </>
  )
}

export default Modal
