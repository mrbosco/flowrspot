import { useQuery } from '@tanstack/react-query';
import { User } from '../../types';
import { getAuthenticatedUser, refreshToken } from '../../services/apiUsers';

const useUserInfo = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      const { user } = await getAuthenticatedUser();
      const { id, first_name, last_name } = user;
      return { id, first_name, last_name };
    },
    retry: (failureCount, error) => {
      if (error && failureCount < 2) {
        refreshToken();
        return true;
      }
      return false;
    },
  });

  return { user, isLoading, error };
};

export default useUserInfo;
