import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <div>
      <div className="carouseltitle">Newly Added</div>
      <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide mt-5 w-100 mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/x/t/p/xl-546545485-try-this-original-imaghpyxt9kufgza.jpeg?q=70" className="ci" alt="..." />
            <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/5/2/m/s-fgds-try-this-original-imaghev97nvyexgx.jpeg?q=70" className="ci" alt="..." />
            <img src="https://rukminim1.flixcart.com/image/832/832/l5h2xe80/shirt/7/s/h/xs-juhg-try-this-original-imagg4wyccyjm3jf.jpeg?q=70" className="ci" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/image/832/832/kyrlifk0/shirt/p/m/b/s-newspepar-prinza-original-imagaxdf8gehbjgf.jpeg?q=70" className="ci" alt="..." />
            <img src="https://rukminim1.flixcart.com/image/832/832/kyrlifk0/shirt/8/0/z/s-newspepar-prinza-original-imagaxdfwfrvapek.jpeg?q=70" className="ci" alt="..." />
            <img src="https://rukminim1.flixcart.com/image/832/832/kyrlifk0/shirt/z/a/z/xl-newspepar-prinza-original-imagaxdfveecqkcd.jpeg?q=70" className="ci" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/image/832/832/l1v1uvk0/shirt/6/b/j/xl-gos-try-this-original-imagdbs6gv52fhvh.jpeg?q=70" className="ci" alt="..." />
            <img src="https://rukminim1.flixcart.com/image/832/832/kyg5zm80/shirt/f/i/f/l-ghs-try-this-original-imagazbnehxhgkhh.jpeg?q=70" className="ci" alt="..." />
            <img src="https://rukminim1.flixcart.com/image/832/832/kyg5zm80/shirt/u/k/n/s-ghs-try-this-original-imagazbnnffccqv8.jpeg?q=70" className="ci" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
