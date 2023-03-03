import React from "react";
import vdo from "../assets/video/rolex.mp4";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div>
      <div className="container1">
        <video loop muted autoPlay>
          <source src={vdo} type="video/mp4" />
        </video>
        <h2 style={{ color: "white" }} className="text">
          Welcome to AliBaba
        </h2>
        {/* <li className="nav-item " style={{ fontSize: "20px", fontWeight: "500", color: "white" }}> */}
        <Link className="nav-link heroshop active position-absolute" aria-current="page" to="/shop">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Video;
