import React from "react";
import m1 from "../../m1.jpg";
import m2 from "../../m2.jpg";

import m3 from "../../m3.jpg";
import m4 from "../../m4.jpg";
import m5 from "../../m5.jpg";
import m6 from "../../m6.jpg";

const Movis = () => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold	">All New Movies</h1>
      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={m1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Stranger Things</h2>
            <p>Ratings 10</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={m2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Money Heist</h2>

            <p>Ratings 10</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={m3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lucifer</h2>
            <p>Ratings 10</p>{" "}
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={m4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Squid Game!</h2>
            <p>Ratings 10</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={m5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bog Bang Theory </h2>
            <p>Ratings 10</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={m6} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Iron Man</h2>
            <p>Ratings 10</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movis;
