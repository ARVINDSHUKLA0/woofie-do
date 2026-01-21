
"use client";

import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../PetRelocation/PetRelocation.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const formRef = useRef(null);

  // ✅ EmailJS init
  useEffect(() => {
    emailjs.init("CDbRZrcgQmiWf9ex9"); // PUBLIC KEY
  }, []);

  // ✅ build details dynamically
  const buildDetails = (data) => {
    let details = "";

    if (data.moving_from) details += `Moving From: ${data.moving_from}\n`;
    if (data.moving_to) details += `Moving To: ${data.moving_to}\n`;
    if (data.phone) details += `Phone: ${data.phone}\n`;
    if (data.pet_type) details += `Pet Type: ${data.pet_type}\n`;

    return details.trim();
  };

  // ✅ send email
  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const dataObj = Object.fromEntries(formData.entries());

    // ❌ validation
    if (
      !dataObj.moving_from ||
      !dataObj.moving_to ||
      !dataObj.phone ||
      !dataObj.pet_type
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    const details = buildDetails(dataObj);

    emailjs
      .send(
        "service_yae6dcr",      // SERVICE ID
        "template_s4hyifc",     // ONE COMMON TEMPLATE
        {
          name: "Pet Relocation User",
          service: "Pet Relocation",
          details,
        }
      )
      .then(() => {
        toast.success("Request sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Email failed");
      });
  };

  return (
    <>
      <Navbar />

      <section className="relocation-section">
        <div className="appointmentBackground">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="relocation-form"
          >
            {/* hidden service name */}
            <input type="hidden" name="service" value="Pet Relocation" />

            <div className="LeftSildeBg">
              <div className="customBgImgWarpper">
                <h2 className="heading text-dark fw-bold">
                  woofie-do pet relocation
                </h2>

                <p className="subText text-dark fw-bold">
                  Domestic & international pet transport service
                </p>

                <div className="form-row">
                  <div className="field">
                    <label>Moving from</label>
                    <input
                      type="text"
                      name="moving_from"
                      placeholder="City"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Moving to</label>
                    <input
                      type="text"
                      name="moving_to"
                      placeholder="City"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>Contact number</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+91"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Pet type</label>
                    <select name="pet_type" required>
                      <option value="">Select pet</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                    Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={1500} theme="colored" />
      <Footer />
    </>
  );
};

export default Page;
