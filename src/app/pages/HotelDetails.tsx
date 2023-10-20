import { useParams } from 'react-router-dom';
import { useHotelData } from '../hooks/network/useHotelData';
import { HotelCard } from '../components/HotelCard';

export function HotelDetails() {
  const { hotelId } = useParams();
  const { query } = useHotelData();

  const hotel = query?.data?.hotels.find((x) => x.id === hotelId);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div>
      <HotelCard hotel={hotel} />
    </div>
  );
}
