/// <reference types="vite-plugin-svgr/client" />
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import styled from 'styled-components';

import useModalStore from '../stores/useModalStore';
import useOutsideClick from '../hooks/useOutsideClick';

import CloseIcon from '../assets/close-icon.svg?react';

const StyledModal = styled.div`
  ${({ theme }) => {
    const {
      minimumModalSize,
      borderRadiusSmall,
      spacingS,
      breakpointTablet,
      colorWhite,
      modalShadow,
    } = theme;
    return `
      position: fixed;
      min-width: ${minimumModalSize};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: ${borderRadiusSmall};
      background: ${colorWhite};
      box-shadow: ${modalShadow};
      padding: ${spacingS};
      transition: all 0.5s;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: ${breakpointTablet}) {
        min-width: unset;
        width: 95%;
      }
    `;
  }}
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

const CloseButton = styled.button`
  ${({ theme }) => {
    const {
      spacingXxxs,
      borderRadiusSmall,
      spacingXxs,
      spacingDefault,
      colorGray25,
      spacingS,
    } = theme;
    return `
      background: none;
      border: none;
      padding: ${spacingXxxs};
      border-radius: ${borderRadiusSmall};
      transform: translateX(0.8rem);
      transition: all 0.2s;
      position: absolute;
      top: ${spacingXxs};
      right: ${spacingDefault};

      &:hover {
        background-color: ${colorGray25};
        cursor: pointer;
      }

      & svg {
        width: ${spacingS};
        height: ${spacingS};
      }
    `;
  }}
`;

type ModalProps = {
  name: string;
  children: ReactNode;
};

const Modal = ({ children, name }: ModalProps) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const ref = useOutsideClick(() => closeModal(name));

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <CloseButton onClick={() => closeModal(name)}>
          <CloseIcon />
        </CloseButton>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
};

export default Modal;
