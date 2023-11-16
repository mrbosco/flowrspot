import { create } from 'zustand';
import { produce, Draft } from 'immer';
import { ModalActions, ModalState } from '../types/storeTypes';

const useModalStore = create<ModalState & ModalActions>((set) => ({
  modals: {},

  openModal: (name: string) =>
    set((state) =>
      produce(state, (draftState: Draft<ModalState>) => {
        Object.keys(draftState.modals).forEach((modal) => {
          draftState.modals[modal] = false;
        });
        draftState.modals[name] = true;
      })
    ),

  closeModal: (name: string) =>
    set((state) =>
      produce(state, (draftState: Draft<ModalState>) => {
        draftState.modals[name] = false;
      })
    ),

  closeAllModals: () =>
    set((state) =>
      produce(state, (draftState: Draft<ModalState>) => {
        Object.keys(draftState.modals).forEach((modal) => {
          draftState.modals[modal] = false;
        });
      })
    ),
}));

export default useModalStore;
