import React from "react";
import "../PuppyParty/PuppyParty.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />

      <section className="mt-100 puppy-party-section pt-md-4 pt-2 pb-md-3 pb-3">
        <div className="container">
          <div className="row align-items-stretch g-4">
 
            <div className="col-lg-8 col-md-7 col-12">
              <div className="video-wrapper">
                <video
                  className="w-100 rounded-4"
                  src="/assets/video/puppy-party.MP4"
                  controls
                autoPlay
                  muted
                />
              </div>
            </div>
 
            <div className="col-lg-4 col-md-5 col-12">
              <div className="contact-card ">
                <h5 className="fw-bold mb-3">Contact Details</h5>

                <div className="contact-row">
                  <span className="label">Email</span>
                  <span className="value">care@woofiedo.com</span>
                </div>

                <div className="contact-row">
                  <span className="label">Phone</span>
                  <span className="value">8860054000</span>
                </div>

                <a href="tel:8860054000" className="contact-btn">
                  Call Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
