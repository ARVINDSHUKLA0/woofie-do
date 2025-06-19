"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import '../Contact/Contact.css'
import Footer from '@/components/Footer'; 
import Link from 'next/link';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const EnquirySend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4b4byfv", "template_mnohi9v", e.target, "lqLmmKH0FVHz2HUyz")
      .then(
        () => {
          toast.success("Enquiry sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send enquiry: " + error.text);
        }
      );
  };

  return (
    <>
      <Navbar />

      <section className='conatct-banner-bg text-end'>
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
                className='w-100 py-2 rounded-5 font-size-small mb-3'
                type="text"
                name="name"
                placeholder="Name*"
                required
              />
              <input
                className='w-100 py-2 rounded-5 font-size-small ms-sm-1 mb-3'
                type="email"
                name="email"
                placeholder="Email*"
                required
              />
              <input
                className='w-100 py-2 rounded-5 font-size-small ms-sm-2 mb-3'
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
              />
            </div>

            <input
              className='w-100 py-2 rounded-5 font-size-small mb-3'
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20103.25243905627!2d77.36506861405148!3d28.612882770615602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8e9e95e497%3A0x59e8df2ffed4a0e1!2sThink%20Cmyk%20Studios!5e1!3m2!1sen!2sin!4v1740561737620!5m2!1sen!2sin"
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
