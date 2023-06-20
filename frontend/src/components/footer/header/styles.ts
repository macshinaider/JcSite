import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 0;
  justify-content: space-between;
  background-color: lightgray;
`;

export const LogoeName = styled.div`
  font-size: 1.5;
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Menu = styled.nav`
  display: flex;
  

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 20px;
    padding: 20px;
    margin-right: 10px;
    padding-right: 10px;
  }

  li {
    margin-right: 10px;
    padding-right: 10px;
    font-size: 26px;
    
  }

  a {
    text-decoration: none;
  }
`;
