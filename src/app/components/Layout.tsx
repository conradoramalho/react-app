import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LINKS = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About US', path: '/about' },
  { id: 3, title: 'Register new Hotel', path: '/hotel/new' },
];

export function Layout() {
  return (
    <div>
      <Navbar>
        <List>
          {LINKS.map((link) => (
            <Item key={link.id}>
              <a href={link.path}>{link.title}</a>
            </Item>
          ))}
        </List>
      </Navbar>
      <Outlet />
      <footer>
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Register new Hotel</li>
        </ul>
      </footer>
    </div>
  );
}

const Navbar = styled.header`
  background-color: #e5e5e5;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 20px 50px;
`;

const Item = styled.li`
  display: grid;
`;
