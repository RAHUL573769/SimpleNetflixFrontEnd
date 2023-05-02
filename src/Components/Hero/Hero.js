import React from "react";
import netflix from "../Images/netflix.jpg";
import ne1 from "../../ne1.PNG";
import ne2 from "../../ne2.PNG";
import ne23 from "../../ne3.PNG";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="mb-5">
              Plans now start at USD2.99/month. Ready to watch? Enter your email
              to create or restart your membership.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={netflix} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={ne1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Enjoy on your TV</h1>
            <p className="py-6">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={ne2} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Watch everywhere</h1>
            <p className="py-6">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
