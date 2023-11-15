import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { AuthResponse, LoginPayload } from '../../../types';
import { loginUser } from '../../../services/apiUsers';
import { useAuthStore } from '../../../stores/useAuthStore';

const useLoginUser = () => {
  const {
    mutate: login,
    isPending: isLoggingIn,
    isSuccess: isLoggedIn,
    data: loginResponse,
    error,
  } = useMutation<AuthResponse, Error, LoginPayload>({
    mutationFn: (user: LoginPayload) => loginUser(user),
    onError: (err) => toast.error(err.message),
    onSuccess: (data) => {
      useAuthStore.getState().loginUser(data.auth_token);
    },
  });

  return { login, isLoggingIn, isLoggedIn, error, loginResponse };
};

export default useLoginUser;
