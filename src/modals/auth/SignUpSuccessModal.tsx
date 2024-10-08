import styled from 'styled-components';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import useModalStore from '../../stores/useModalStore';
import { ButtonSizes } from '../../components/Button/types';

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

const SignUpSuccessModal = () => {
  const { openModal } = useModalStore();

  return (
    <Modal name="signupSuccess">
      <SuccessContainer>
        <SuccessTitle>
          Congratulations! You have successfully signed up for FlowrSpot!
        </SuccessTitle>
        <Button size={ButtonSizes.LARGE} onClick={() => openModal('login')}>
          OK
        </Button>
      </SuccessContainer>
    </Modal>
  );
};

export default SignUpSuccessModal;
