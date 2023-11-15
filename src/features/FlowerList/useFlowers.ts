import { useQuery } from '@tanstack/react-query';
import { fetchFlowers } from '../../services/apiFlowers';
import { Flower } from '../../types';

const useFlowers = () => {
  const {
    data: flowers,
    isLoading,
    error,
  } = useQuery<Flower[]>({
    queryKey: ['flowers'],
    queryFn: fetchFlowers,
  });

  return { flowers, isLoading, error };
};

export default useFlowers;
