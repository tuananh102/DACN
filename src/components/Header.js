import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <div>
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </div>
        <div>
          <img src="/images/search-icon.svg" alt="" />
          <span>Search</span>
        </div>
        <div>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>Watchlist</span>
        </div>
        <div>
          <img src="/images/original-icon.svg" alt="" />
          <span>Original</span>
        </div>
        <div>
          <img src="/images/movie-icon.svg" alt="" />
          <span>Movies</span>
        </div>
        <div>
          <img src="/images/series-icon.svg" alt="" />
          <span>Series</span>
        </div>
      </NavMenu>
      <UserImg src="/images/userimg.jpg" alt="" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  div {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    align-items: center;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: scaleX(0);
        opacity: 0;
      }
     
      }
      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
    }
  }
`;
const UserImg = styled.img`
  width: auto;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
