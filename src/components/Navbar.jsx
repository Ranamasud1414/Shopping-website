import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg z-3 ">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex" style={{ color: "white", fontWeight: "500", fontSize: "30px" }} to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ fontSize: "20px", fontWeight: "500", color: "white" }}>
                <Link className="nav-link active " style={{ color: "white" }} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item " style={{ fontSize: "20px", fontWeight: "500", color: "white" }}>
                <Link className="nav-link active" style={{ color: "white" }} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-5">
              <li className="nav-item " style={{ fontSize: "20px", fontWeight: "500", color: "white" }}>
                <Link className="nav-link active" style={{ color: "yellow", fontFamily: "fantasy", fontSize: "25px" }} aria-current="page" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " style={{ color: "white" }} to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
