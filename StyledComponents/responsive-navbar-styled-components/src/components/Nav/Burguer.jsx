import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
const StyledBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display : none;

  @media(max-width : 768px){
      display : flex;
      
  }

  div {
    width: 2rem;
    height: 0.5rem;
    border-radius: 10px;
    background-color: ${(props) => (props.open ? "#ccc" : "#333")};
    transform-origin: 1px;
    transition: all 0.3s;
    &:nth-child(1) {
      transform: ${(props) => (!props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        !props.open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? 1 : 0)};
    }
    &:nth-child(3) {
      transform: ${(props) => (!props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Burguer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      <RightNav open={open} />
    </>
  );
};

export default Burguer;
