import Modal from '../../components/Modal';
import LoginForm from '../../features/Auth/LoginForm';

const LoginModal = () => {
  return (
    <Modal name="login">
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
