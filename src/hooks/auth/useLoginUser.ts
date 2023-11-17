import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { loginUser } from '../../services/apiUsers';
import { useAuthStore } from '../../stores/useAuthStore';
import { CustomizedAuthResponse } from '../../types/api/responseTypes';
import { LoginPayload } from '../../types/api/payloadTypes';

const useLoginUser = () => {
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending: isLoggingIn,
    isSuccess: isLoggedIn,
    data: loginResponse,
    error,
  } = useMutation<CustomizedAuthResponse, Error, LoginPayload>({
    mutationFn: (user: LoginPayload) => loginUser(user),
    onError: (err) => toast.error(err.message),
    onSuccess: (data) => {
      useAuthStore.getState().loginUser(data.auth_token, data.email);
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
  });

  return { login, isLoggingIn, isLoggedIn, error, loginResponse };
};

export default useLoginUser;
