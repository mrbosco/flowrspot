import LoginModal from '../features/Auth/Login/LoginModal';
import SignUpModal from '../features/Auth/Signup/SignUpModal';
import SignUpSuccessModal from '../features/Auth/Signup/SignUpSuccessModal';

const ModalManager = () => {
  return (
    <>
      <SignUpModal />
      <LoginModal />
      <SignUpSuccessModal />
    </>
  );
};

export default ModalManager;
