import React from "react";
import "../Fivesection/fivesection.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
export const Fivesection = () => {
  return (
    <section className="location">
      <div className="contactUs">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="form">
        <h2><em>Contact Us</em> &amp; Get In <span>Touch</span></h2>
          <form action="">
            <div className="input">
              <input type="text" placeholder="Your Name..." />
              <input type="text" placeholder="Your Surname..." />
            </div>
            <div className="input">
              <input type="text" placeholder="Your E-mail..." />
              <input type="text" placeholder="Subject..." />
            </div>
            <textarea name="" placeholder="Your Message" id=""></textarea>
            <a href="">Send Message Now</a>
          </form>
          <div className="info">
            <div className="phone">
              <FaPhoneAlt />
              <span>010-020-0340</span>
            </div>
            <div className="phone">
            <MdEmail />
              <span>info@company.com</span>
            </div>
            <div className="phone">
            <FaLocationPin />
              <span>Sunny Isles Beach, Fl 33160, United States</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
