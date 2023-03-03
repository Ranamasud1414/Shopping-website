import React from "react";

const MoreItemSingle = (props) => {
  const { img, title, url, price } = props.item;
  return (
    <div className="col  d-flex justify-content-center">
      <div className="card card1" style={{ width: "17rem", height: "26rem" }}>
        <img src={img} className="card-img-top  moreimg " alt="..." />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text" style={{ color: "yellow" }}>
            {!price ? "No Price" : price}
          </p>
          <a target={"_blank"} href={!url ? "No link" : url}>
            <button className="btn btn-outline-info">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreItemSingle;
