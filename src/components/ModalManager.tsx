import LoginModal from '../features/Auth/Login/LoginModal';
import SignUpModal from '../features/Auth/Signup/SignUpModal';

const ModalManager = () => {
  return (
    <>
      <SignUpModal />
      <LoginModal />
    </>
  );
};

export default ModalManager;
