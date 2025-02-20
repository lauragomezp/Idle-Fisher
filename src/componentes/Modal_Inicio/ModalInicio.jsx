import React from 'react';
import './ModalInicio.css';

const ModalInicio = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-inicio-overlay">
      <div className="modal-inicio-content">
        {children}
      </div>
    </div>
  );
};

export default ModalInicio;
