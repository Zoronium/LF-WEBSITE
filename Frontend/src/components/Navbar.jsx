import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const NavBar = styled.div`
    height: 75px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;
  const HeaderLinks = styled.a`
    font-family: "Courier New", Courier, monospace;
    color: black;
    padding: 10px;
    cursor: pointer;
  `;
  const Logo = styled.div`
    width: 88px;
    height: 71px;
    background: black;
    cursor: pointer;
  `;

  return (
    <div>
      <NavBar>
        <Logo />
        <HeaderLinks>link 1</HeaderLinks>
        <HeaderLinks>link 1</HeaderLinks>
        <HeaderLinks>link 1</HeaderLinks>
      </NavBar>
    </div>
  );
};

export default Navbar;
