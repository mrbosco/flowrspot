import LoginModal from './auth/LoginModal';
import LoginSuccessModal from './auth/LoginSuccessModal';
import SignUpModal from './auth/SignUpModal';
import SignUpSuccessModal from './auth/SignUpSuccessModal';
import UserModal from './auth/UserModal';

interface ModalComponents {
  [key: string]: React.FC;
}

export const MODAL_COMPONENTS: ModalComponents = {
  signup: SignUpModal,
  login: LoginModal,
  signupSuccess: SignUpSuccessModal,
  loginSuccess: LoginSuccessModal,
  user: UserModal,
};
