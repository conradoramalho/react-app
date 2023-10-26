import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { HotelList } from './pages/HotelList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HotelDetails } from './pages/HotelDetails';
import { Layout } from './components/Layout';
import { CreateHotel } from './pages/CreateHotel';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HotelList />,
      },
      {
        path: '/hotel/:hotelId',
        element: <HotelDetails />,
      },
      {
        path: '/hotel/new',
        element: <CreateHotel />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
      staleTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
