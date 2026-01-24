"use client";

import React, { useEffect } from 'react';
import '../Contact/Contact.css'
import Link from 'next/link';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const Page = () => {
  useEffect(() => {
    emailjs.init("CDbRZrcgQmiWf9ex9"); // PUBLIC KEY
  }, []);

  const EnquirySend = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());

    const details = `
        Name: ${dataObj.name}
        Email: ${dataObj.email}
        Phone: ${dataObj.phone}
        Address: ${dataObj.address}
        Message: ${dataObj.message}
    `.trim();

    emailjs
      .send(
        "service_yae6dcr",      // SERVICE ID
        "template_s4hyifc",     // ONE COMMON TEMPLATE
        {
          name: dataObj.email,
          service: "Contact Enquiry",
          details: details,
        }
      )
      .then(() => {
        toast.success("Enquiry sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Email failed");
      });
  };

  return (
    <>
      <Navbar />

      <section className='conatct-banner-bg text-end mt-5'>
        <div>
          <span className='text-capitalize'>
            <Link href="/" className='text-decoration-none-one'>
              home
            </Link>
          </span>{" "}
          <span>/</span>{" "}
          <span className='text-capitalize'>contact us</span>
          <h2 className='text-capitalize fw-bold'>contact us</h2>
        </div>
      </section>

      <section className='d-sm-flex d-block'>
        <div className='custom-width-contact-one px-sm-4 mt-50'>
          <h2 className='text-capitalize fw-bold'>Dog walking services</h2>
          <p>Your email address will not be published. Required fields are marked *</p>

          <form className='w-100' onSubmit={EnquirySend}>
            <div className='d-sm-flex d-block justify-content-between my-4'>
              <input
                className='w-100 py-2 rounded-5 font-size-small mb-3 input-conact'
                type="text"
                name="name"
                placeholder="Name*"
                required
              />
              <input
                className='w-100 py-2 rounded-5 font-size-small ms-sm-1 mb-3 input-conact '
                type="email"
                name="email"
                placeholder="Email*"
                required
              />
              <input
                className='w-100 py-2 rounded-5 font-size-small ms-sm-2 mb-3 input-conact'
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
              />
            </div>

            <input
              className='w-100 py-2 rounded-5 font-size-small mb-3 input-conact'
              type="text"
              name="address"
              placeholder="Address*"
              required
            />

            <textarea
              className='w-100 rounded-5 my-3 font-size-small form-padding-inner'
              name="message"
              rows={7}
              placeholder="Your Message*"
              required
            ></textarea>

            <button type="submit" className='main-bg border-0 px-3 py-1 mb-5 text-white rounded-5'>
              Submit Now
            </button>
          </form>
        </div>

        <div className="container-fluid my-50 custom-width-contact-two">
          <iframe
            title="Office Location"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=C%20Block%20D%2C%20D-25%2C%20Sector%2026%2C%20Noida%2C%20Uttar%20Pradesh%20201301&output=embed"
          ></iframe>

        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Footer />
    </>
  );
};

export default Page;

