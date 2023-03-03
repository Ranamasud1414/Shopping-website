import React from "react";

import MoreItems from "./MoreItems/MoreItems";

import Services from "./Services/Services";
import Jumptron from "./Jumptron";
import Video from "./Video";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Video />
      <Services />
      <Carousel />
      <MoreItems />
      <Jumptron />
    </div>
  );
};

export default Home;
