import styled from 'styled-components';

const Header = styled.header`
  background-color: #fff;
  padding: 1rem;
  max-width: 1200px;
  margin: 1rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  h1 {
    font-size: 1.4rem;
  }

  img {
    width: 2rem;
  }

  nav {
    color: #007bff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    .links,
    div > * {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (min-width: 1000px) {
    margin: 2rem auto 0;
    font-size: 1.1rem;
  }
`;

export default Header;
