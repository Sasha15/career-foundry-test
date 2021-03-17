import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../../hooks/usePortal';
import './modal.scss'

const Modal = ({ id, children }) => {
    const target = usePortal(id);
    return createPortal(
      children,
      target,
    );
};

export default Modal;