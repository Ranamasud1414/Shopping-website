import React from "react";

const SerItems = (props) => {
  const { img, title, prices, url, id } = props.item;

  return (
    <div className="col-md-3 ">
      <img src={img} className="img-fluid rounded-start" alt="..." />
      <div className="mb-2">
        <h5 className="card-title mt-1">{title}</h5>
        <p className="card-text">{prices}</p>
      </div>
      <a href={url} target={"_blank"}>
        <button type="button" className="btn btn-outline-info mb-2">
          Info
        </button>
      </a>
    </div>
  );
};

export default SerItems;
