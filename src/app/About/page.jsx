"use client"
import Navbar from '@/Components/Navbar'
import '../About/about.css'
import React from 'react'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <section className='position-relative'>
        <div className='about-imges-height'>
          <img className='img-fluid w-100' src="/assets/img/about-bg-img.PNG" alt="" />
        </div>

        <div className='custom-postion-about'>
          <h2 className='fw-bold text-capitalize custom-font-size-banner '>Welcome to <span style={{ color: "#F38020" }}>woofie-do</span></h2>
        </div>
      </section>

      <section className='py-md-5 py-4'>
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <h2 className='fw-bold fs-18'>A One-Stop Solution for Pet Parents</h2>
                <p className='fs-14 p-0'>Woofie Do is more than a pet care service—it’s a dependable ecosystem built for
                  modern pet parents. Designed around trust, comfort, and convenience, Woofie Do
                  brings together essential services that support pets through every stage of their
                  routine and lifestyle. From daily care to travel and transitions, every offering is
                  thoughtfully curated to ensure pets feel safe, relaxed, and cared for.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <h2 className='fw-bold fs-18'>Comfort-First Pet Boarding & Creche </h2>
                <p className='fs-14 p-0'>Whether it’s a short stay or daily care, Woofie Do provides safe and nurturing pet
                  boarding and creche services designed to feel like a second home. Pets enjoy
                  structured routines, supervised play, rest time, and attentive care in a calm
                  environment. Ideal for working pet parents, our creche ensures pets stay engaged,
                  social, and stress-free throughout the day.
                  .
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <h2 className='fw-bold fs-18'>Behavioural Training at Creche</h2>
                <p className='fs-14 p-0'>Learning happens best in the right environment. Woofie Do offers behavioural training
                  integrated within the creche setup, allowing pets to learn naturally through routine,
                  social interaction, and guided reinforcement. Trained professionals focus on building
                  positive behaviour, confidence, and adaptability—especially for young pets and
                  first-time learners—without pressure or force.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <h2 className='fw-bold fs-18'>Safe & Reliable Pet Transportation</h2>
                <p className='fs-14 p-0'>Moving pets requires care, patience, and planning. Woofie Do’s pet transportation
                  services are designed to ensure smooth, comfortable, and secure travel for
                  pets—whether it’s a short city transfer or scheduled movement. With pet-friendly
                  handling and attention to comfort, every journey is managed with your pet’s wellbeing
                  in mind</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <h2 className='fw-bold fs-18'>Hassle-Free Pet Relocation (Domestic & International)</h2>
                <p className='fs-14 p-0'>Relocating with a pet can be overwhelming, but Woofie Do makes it simple. Our pet
                  relocation services handle the complex logistics involved in domestic and
                  international moves, ensuring pets transition safely and comfortably. From planning
                  and coordination to travel readiness, every step is managed with care so pets arrive
                  stress-free in their new home.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <h2 className='fw-bold fs-18'>Pet Insurance for Added Peace of Mind</h2>
                <p className='fs-14 p-0'>Unexpected situations can arise at any time. Woofie Do offers pet insurance solutions
                  that help pet parents stay prepared for the unforeseen. With coverage options
                  designed to support long-term pet care, insurance adds an extra layer of security—so
                  you can focus on your pet’s happiness without constant worry</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer/>

    </>
  )
}

export default page