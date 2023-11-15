import styled from 'styled-components';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button/Button';
import useModalStore from '../../../stores/useModalStore';

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SuccessTitle = styled.h3`
  color: #334144;
  text-align: center;
  margin-bottom: 0.88rem;
`;

const LoginSuccessModal = () => {
  const { openModal } = useModalStore();

  return (
    <Modal name="loginSuccess">
      <SuccessContainer>
        <SuccessTitle>
          Congratulations! You have successfully logged into FlowrSpot!
        </SuccessTitle>
        <Button size="big" onClick={() => openModal('login')}>
          OK
        </Button>
      </SuccessContainer>
    </Modal>
  );
};

export default LoginSuccessModal;
