import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import NavMenu from "../features/NavMenu";

function Product() {
  return (
    <Wrap>
      <NavMenu />
      <Router>
        {/* <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              custom here!
            </li>
          </ol>
        </nav> */}
        
      </Router>
    </Wrap>
  );
}

export default Product;

const Wrap = styled.section`
  nav{
    --bs-breadcrumb-divider: url('./images/right_menu.png');
  }
`