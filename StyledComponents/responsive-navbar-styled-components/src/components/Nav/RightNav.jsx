import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  box-sizing : border-box;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    margin-top : 0px!important;
    flex-flow: column nowrap;
    background-color : #0D2538;
    position : fixed;
    top : 0px;
    right : 0;
    height : 100vh;
    width : 300px;
    padding-top : 3.5rem;
    transform :${props => props.open ? 'translateX(100%)' : 'translateX(0)'};
    transition : transform 0.3s ease-in-out;
    li{
        color : #fff;
    }
  }
`;

const RightNav = ({open}) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About US</li>
      <li>Contact</li>
      <li>Nice</li>
      <li>Carrers</li>
    </Ul>
  );
};

export default RightNav;
