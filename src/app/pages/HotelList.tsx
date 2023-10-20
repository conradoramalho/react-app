import { HotelCard } from '../components/HotelCard';
import { Hotel } from '../components/HotelCard';
import styled from 'styled-components';
import { useHotelData } from '../hooks/network/useHotelData';

export function HotelList() {
  const { query } = useHotelData();

  if (query.isError) return <div>Error :/</div>;
  if (query.isLoading) return <div>Loading...</div>;

  return (
    <Container>
      {query.data?.hotels.map((hotel: Hotel) => (
        <Link href={`/hotel/${hotel.id}`}>
          <HotelCard key={hotel.id} hotel={hotel} />
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  gap: 50px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: inherit; /* no underline */
`;
