import React from "react";
import MoreItemSingle from "./More-Item";
import "./MoreItems.css";
import { MoreItemdata } from "./Single-items";

const MoreItems = () => {
  return (
    <div>
      <div className="moreitemtitle">Best Sale</div>
      <div className="container mt-5 mb-5">
        <div className="row  ">
          {MoreItemdata.map((item, id) => {
            return <MoreItemSingle item={item} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MoreItems;
