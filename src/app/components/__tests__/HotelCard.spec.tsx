import { render } from '@testing-library/react';
import { HOTEL_DATA } from '../../pages/__tests__/mocks/HotelList.mock';
import { HotelCard } from '../HotelCard';

describe(HotelCard, () => {
  it('render correctly the hotel Card', () => {
    const { getByText } = render(<HotelCard hotel={HOTEL_DATA} />);

    expect(getByText(HOTEL_DATA.name)).toBeVisible();
  });
});
