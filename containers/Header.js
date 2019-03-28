import Link from 'next/link';
import styled from 'styled-components';

const AppNav = styled.div`
  padding: 0 20px;
  background: #eee;
  text-align: center;
  a {
    display: inline-block;
    padding: 12px;
    color: #456;
    text-decoration: none;
  }
  .active {
    color: #d3a;
    font-weight: 700;
    border-bottom: 3px solid #ccc;
  }
`;

const Header = () => (
  <AppNav>
    <nav className="app-navigation">
      <Link href="/">
        <a>Home 012345</a>
      </Link>
      <Link href="/about">
        <a className="active">About</a>
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
