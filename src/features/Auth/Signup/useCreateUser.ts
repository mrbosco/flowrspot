import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { AuthResponse, SignupPayload } from '../../../types';
import { createUser } from '../../../services/apiUsers';

const useCreateUser = () => {
  const {
    mutate: signupUser,
    isPending: isCreating,
    isSuccess: isCreated,
    data: userResponse,
    error,
  } = useMutation<AuthResponse, Error, SignupPayload>({
    mutationFn: (user: SignupPayload) => createUser(user),
    onError: (err) => toast.error(err.message),
  });

  return { signupUser, isCreating, isCreated, error, userResponse };
};

export default useCreateUser;
