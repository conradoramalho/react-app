import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Hotel } from '../../components/HotelCard';
import axios from 'axios';

export interface Hotels {
  hotels: Hotel[];
}

export function useHotelData() {
  const queryClient = useQueryClient();

  const query = useQuery<Hotels, Error>({
    queryKey: ['hotels'],
    queryFn: () => axios.get('http://localhost:3000').then((resp) => resp.data),
  });

  const mutation = useMutation({
    mutationFn: (data: Hotel) =>
      axios.post('http://localhost:3000', data).then((resp) => resp.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return { query, mutation };
}
