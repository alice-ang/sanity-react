import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: red;
  line-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  a {
    color: white;
    text-decoration: none;
  }
`;
export const Navbar = () => {
  return (
    <header>
      <div>
        <NavBar>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="project">Project</NavLink>
          <NavLink to="post">Blog</NavLink>
        </NavBar>
      </div>
    </header>
  );
};
