import { render, screen } from '@testing-library/react';
import { HotelList } from '../HotelList';
import { HOTEL_DATA } from './mocks/HotelList.mock';

vi.mock('../../hooks/network/useHotelData', async () => {
  const actual = await vi.importActual<
    typeof import('../../hooks/network/useHotelData')
  >('../../hooks/network/useHotelData');

  return {
    ...actual,
    useHotelData: () => ({
      query: { data: { hotels: [HOTEL_DATA] } },
    }),
  };
});

describe(HotelList, () => {
  it('render correctly the hotel list', () => {
    const { getByText } = render(<HotelList />);

    expect(getByText(HOTEL_DATA.name)).toBeVisible();
  });
});
