import { useQuery } from '@tanstack/react-query';
import { fetchFlowers } from '../../services/apiFlowers';
import { FlowerListResponse } from '../../types/api/responseTypes';

const useFlowers = () => {
  const { data, isLoading, error } = useQuery<FlowerListResponse>({
    queryKey: ['flowers'],
    queryFn: fetchFlowers,
  });

  return { data, isLoading, error };
};

export default useFlowers;
