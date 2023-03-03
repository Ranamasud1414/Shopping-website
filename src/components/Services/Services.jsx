import React from "react";
import SerItems from "./SerItems";

import ServiceItem from "./Services-items";

const Services = () => {
  return (
    <>
      <div className="card mb-3 mt-5 mx-5" style={{ maxWidth: "100%", border: "none", borderRadius: "23px 0 23px 0" }}>
        <div className="row g-0">
          {ServiceItem.map((item) => {
            return <SerItems item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
