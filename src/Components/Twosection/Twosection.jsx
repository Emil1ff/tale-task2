import React from "react";
import "./twosection.css";

export const Twosection = () => {
  return (
    <section className="twosection">
      <div className="services">
        <div className="title">
          <h2>
            We Provide <em>Different Services</em> &amp;
            <span>Features</span> For Your Agency
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
            eiusmod.
          </p>
        </div>
        <div className="cards">
          <div className="cardd">
            <div className="icon">
              <img
                src="	https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-01.jpg"
                alt=""
              />
            </div>
            <h4>Discover More on current SEO Trends</h4>
          </div>
          <div className="cardd">
            <div className="icon">
              <img
                src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-02.jpg"
                alt=""
              />
            </div>
            <h4>Discover More on current SEO Trends</h4>
          </div>
          <div className="cardd">
            <div className="icon">
              <img
                src="	https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-03.jpg"
                alt=""
              />
            </div>
            <h4>Discover More on current SEO Trends</h4>
          </div>
          <div className="cardd">
            <div className="icon">
              <img
                src="	https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-04.jpg"
                alt=""
              />
            </div>
            <h4>Discover More on current SEO Trends</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
