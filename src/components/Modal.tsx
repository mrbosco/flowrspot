/// <reference types="vite-plugin-svgr/client" />
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import styled from 'styled-components';

import useModalStore from '../stores/useModalStore.js';
import useOutsideClick from '../hooks/useOutsideClick';

import CloseIcon from '../assets/close-icon.svg?react';

const StyledModal = styled.div`
  position: fixed;
  width: 27.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.05);
  padding: 1.87rem;
  transition: all 0.5s;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.1rem;
  border-radius: 5px;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 0.5rem;
  right: 1.2rem;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

type ModalProps = {
  name: string;
  children: ReactNode;
};

const Modal = ({ children, name }: ModalProps) => {
  const modals = useModalStore((state) => state.modals);
  const closeModal = useModalStore((state) => state.closeModal);
  const ref = useOutsideClick(() => closeModal(name));

  if (!modals[name]) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={() => closeModal(name)}>
          <CloseIcon />
        </Button>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
};

export default Modal;
