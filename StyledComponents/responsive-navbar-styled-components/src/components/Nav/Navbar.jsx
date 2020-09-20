import React from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import Burguer from './Burguer'
const Nav = styled.nav`
  box-sizing : border-box;
  max-width : 100%;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">NavLogo</div>
  
      <Burguer/>
    </Nav>
  );
};

export default Navbar;
