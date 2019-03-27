import Link from 'next/link';
import styled from 'styled-components';

const AppNav = styled.div`
  padding: 8px 0;
  background: #eee;
  a {
    padding: 0 8px;
  }
`;

const Header = () => (
  <AppNav>
    <nav className="app-navigation">
      <Link href="/">
        <a>Home 012345</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/about">
        <a>ds</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </AppNav>
);

export default Header;
