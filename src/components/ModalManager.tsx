import LoginModal from '../features/Auth/Login/LoginModal';
import LoginSuccessModal from '../features/Auth/Login/LoginSuccessModal';
import SignUpModal from '../features/Auth/Signup/SignUpModal';
import SignUpSuccessModal from '../features/Auth/Signup/SignUpSuccessModal';

const ModalManager = () => {
  return (
    <>
      <SignUpModal />
      <LoginModal />
      <SignUpSuccessModal />
      <LoginSuccessModal />
    </>
  );
};

export default ModalManager;
