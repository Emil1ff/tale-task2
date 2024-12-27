import React from "react";
import "./onesection.css";

export const Onesection = () => {
  return (
    <section className="tale">
      <div className="containerr checks">
        <div className="check">
          <h6>SEO DIGITAL AGENCY</h6>
          <h4>
            Dive <em>Into The SEO</em> World <span>With Tale</span>
          </h4>
          <p>
            Tale is the best SEO agency website template using Bootstrap v5.2.2
            CSS for your company. It is a free download provided by TemplateMo.
            There are 3 HTML pages, <a href="index.html">Home</a>,{" "}
            <a href="about.html">About</a>, and <a href="faqs.html">FAQ</a>.
          </p>
          <div className="btns">
            <a className="btn" href="">
              Discover More
            </a>
            <span>or</span>
            <a className="btn2" href="">
              Check Our FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
