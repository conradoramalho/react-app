import { useQuery } from '@tanstack/react-query';
import { Hotel } from '../../components/HotelCard';
import axios from 'axios';

export interface Hotels {
  hotels: Hotel[];
}

export function useHotelData() {
  const query = useQuery<Hotels, Error>({
    queryKey: ['hotels'],
    queryFn: () => axios.get('http://localhost:3000').then((resp) => resp.data),
  });

  return { query };
}
