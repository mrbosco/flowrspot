import useModalStore from '../stores/useModalStore';
import { MODAL_COMPONENTS } from './modalConfig';

const ModalManager = () => {
  const { modals } = useModalStore();

  return (
    <>
      {Object.entries(modals).map(([key, isOpen]) => {
        const ModalComponent = MODAL_COMPONENTS[key];
        return isOpen && ModalComponent ? <ModalComponent key={key} /> : null;
      })}
    </>
  );
};

export default ModalManager;
