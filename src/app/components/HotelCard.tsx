import styled from 'styled-components';

export interface Hotel {
  address1: string;
  countryCode: string;
  shortDescription: string;
  city: string;
  id: string;
  name: string;
  hotelRating: number;
  thumbNailUrl: string;
}

interface Props {
  hotel: Hotel;
}

export function HotelCard(props: Props) {
  const { hotel } = props;

  return (
    <Container>
      <Image
        src={`https://github.com/Lemoncode/simple-hotels-mock-rest-api/blob/master/public${hotel.thumbNailUrl}?raw=true`}
        alt=""
      />
      <Name>{hotel.name}</Name>
      <Description>{hotel.shortDescription}</Description>
      <p>{hotel.adress1}</p>
      <p>{hotel.city}</p>
      <p>{hotel.countryCode}</p>
      <p>{hotel.hotelRating}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Image = styled.img`
  height: 200px;
  margin: 0 0 10px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 25px;
  color: #595959;
  margin: 0;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const Description = styled.p`
  font-size: 13px;
  font-style: italic;
`;
