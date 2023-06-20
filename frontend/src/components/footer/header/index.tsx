import React from "react";

import logo from "../../assets/logo.svg";
import { HeaderContainer, LogoeName, Menu } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoeName>
        <img src={logo} alt="logo" />
        <h1>JC Society</h1>
      </LogoeName>
      <Menu>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Sobre o Time</a>
          </li>          
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>

      </Menu>
    </HeaderContainer>
  );
};

export default Header;
