"use client";
import React from 'react'
import '../PetInsurance/PetInsurance.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

const Page = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="insurance-hero">
        <img
          src="/assets/img/pet insurance.png"
          alt="Pet Insurance"
          className="img-fluid w-100"
        />
        <div className="hero-overlay">
          <h1>Pet Insurance for Your Dog</h1>
          <p>Secure your dog’s health with the right insurance plan</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container py-5">
        <div className="row align-items-center g-4">

          {/* Left Content */}
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="fw-bold mb-2">
              Insurance plans that suit your dog’s well-being
            </h2>

            <ul className="insurance-list mt-3">
              <li>Use any vet, anywhere</li>
              <li>Quick claim process</li>
              <li>Affordable monthly plans</li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="contact-card">
              <h5 className="fw-bold mb-3">Contact Details</h5>

              <div className="d-flex gap-2 mb-2">
                <span className="fw-bold">Email:</span>
                <span>care@woofiedo.com</span>
              </div>

              <div className="d-flex gap-2">
                <span className="fw-bold">Phone:</span>
                <span>8860054000</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Page
