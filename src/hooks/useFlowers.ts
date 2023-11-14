import { useQuery } from '@tanstack/react-query';
import { fetchFlowers } from '../services/apiFlowers';

const useFlowers = () => {
  const {
    data: flowers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['flowers'],
    queryFn: fetchFlowers,
  });

  return { flowers, isLoading, error };
};

export default useFlowers;
