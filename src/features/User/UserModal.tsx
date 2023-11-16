import styled from 'styled-components';

import Modal from '../../components/Modal';
import Button from '../../components/Button/Button';
import { useAuthStore } from '../../stores/useAuthStore';
import useModalStore from '../../stores/useModalStore';
import useUserInfo from './useUserInfo';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.56rem;
  padding: 2rem 4.95rem;
  width: 36.875rem;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.82rem;
`;

const ProfilePicture = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;

const UserTitle = styled.h2`
  font-size: 1.5625rem;
  font-weight: 300;
`;

const UserSightings = styled.span`
  color: #949ea0;
  font-size: 0.8125rem;
  font-weight: 400;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.94rem;
`;

const ModalRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UserProperty = styled.span`
  color: #949ea0;
  font-size: 0.625rem;
`;

const UserValue = styled.span`
  color: #334144;
  font-size: 1.125rem;
`;

const UserModal = () => {
  const { user } = useUserInfo();
  const { closeAllModals } = useModalStore();
  const { email, logoutUser } = useAuthStore();

  return (
    <Modal name="user">
      <ModalContainer>
        <ModalHeader>
          <ProfilePicture src="./avatars/profile-holder.png" />
          <div>
            <UserTitle>
              {user?.first_name} {user?.last_name}
            </UserTitle>
            <UserSightings>47 sightings</UserSightings>
          </div>
        </ModalHeader>
        <ModalBody>
          <ModalRow>
            <UserProperty>First Name</UserProperty>
            <UserValue>{user?.first_name}</UserValue>
          </ModalRow>
          <ModalRow>
            <UserProperty>Last Name</UserProperty>
            <UserValue>{user?.last_name}</UserValue>
          </ModalRow>
          <ModalRow>
            <UserProperty>Date of Birth</UserProperty>
            <UserValue>May 20, 1980</UserValue>
          </ModalRow>
          <ModalRow>
            <UserProperty>Email Address</UserProperty>
            <UserValue>{email}</UserValue>
          </ModalRow>
        </ModalBody>
        <Button
          size="big"
          onClick={() => {
            logoutUser();
            closeAllModals();
          }}
        >
          Logout
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default UserModal;
