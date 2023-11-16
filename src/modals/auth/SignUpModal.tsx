import Modal from '../../components/Modal';
import SignUpForm from '../../features/Auth/SignUpForm';

const SignUpModal: React.FC = () => {
  return (
    <Modal name="signup">
      <SignUpForm />
    </Modal>
  );
};

export default SignUpModal;
