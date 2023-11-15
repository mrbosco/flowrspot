import styled from 'styled-components';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button/Button';
import useModalStore from '../../../stores/useModalStore';

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SuccessTitle = styled.h3`
  color: #334144;
  text-align: center;
  margin-bottom: 0.88rem;
  margin-top: 2rem;
`;

const LoginSuccessModal = () => {
  const { openModal, closeModal } = useModalStore();

  return (
    <Modal name="loginSuccess">
      <SuccessContainer>
        <SuccessTitle>
          Congratulations! You have successfully logged into FlowrSpot!
        </SuccessTitle>
        <ButtonContainer>
          <Button size="big" onClick={() => closeModal('loginSuccess')}>
            OK
          </Button>
          <Button size="big" onClick={() => openModal('user')}>
            PROFILE
          </Button>
        </ButtonContainer>
      </SuccessContainer>
    </Modal>
  );
};

export default LoginSuccessModal;
