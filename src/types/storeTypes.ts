export interface AuthActions {
  loginUser: (token: string, email: string) => void;
  refreshToken: (newToken: string) => void;
  logoutUser: () => void;
}

export interface AuthState extends AuthActions {
  isLoggedIn: boolean;
  token: string | null;
  email: string;
}

export interface ModalState {
  modals: Record<string, boolean>;
}

export interface ModalActions {
  openModal: (name: string) => void;
  closeModal: (name: string) => void;
  closeAllModals: () => void;
}
