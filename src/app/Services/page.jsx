import React from 'react'
import '../Services/Services.css'
import Navbar from '@/Components/Navbar'
import Link from 'next/link'
import Footer from '@/Components/Footer'
const page = () => {
  return (
    <>
      <Navbar />
      <section className='serives-banner-bg text-end mt-100'>
        <div className="">
          <span className='text-capitalize'>
            <Link href="/" className='text-decoration-none-one'>home</Link>
          </span>
          <span>/</span> <span className='text-capitalize'>Service </span>
          <h2 className='text-capitalize fw-bold'>Service</h2>
        </div>
      </section>


      <section className='my-5'>
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <div className='custom-height-imges-serives'>
                <img className='img-fluid rounded-4' src="/assets/img/pet boarding and creche.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end mb-3">
              <div>
                  <h2 className='m-0 pb-3 fw-bold'>Pet Boarding & Creche</h2>
                <p>Whether you’re heading to work or away on vacation, Woofiedo ensures your pet is cared for in a safe, comfortable, and joyful environment. Our boarding and creche facilities are designed to reduce stress and encourage happiness through routine, play, and affection. Every pet is supervised by trained caregivers who understand their emotional and physical needs. What your pet enjoys: - Cozy, hygienic boarding spaces - Structured daily schedules - Supervised playtime and relaxation - Safe socialization based on temperament - Regular feeding and well-being checks Perfect for short stays, long holidays, or daily daycare.</p>
              </div>
            </div>
          </div>
          <div className="row m-0 my-sm-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 ">
              <div>
                <h2 className='m-0 pb-3 fw-bold'>Grooming</h2>
                <p>At Woofiedo, grooming is more than appearance — it’s about health, comfort, and confidence. Our groomers handle every pet with patience and care, ensuring a calm and positive experience. We use only high-quality, pet-safe products and customize grooming based on breed, coat type, and temperament.Grooming services include: - Bathing and blow-drying - Hair trimming and styling - Nail clipping and paw care - Ear and eye cleaning - Breed-specific grooming options Your pet leaves feeling fresh, happy, and pampered.</p>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
              <div className='custom-height-imges-serives'>
                <img className='img-fluid rounded-4' src="/assets/img/pet grooming.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row m-0 my-sm-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className='custom-height-imges-serives'>
                <img className='img-fluid rounded-4' src="/assets/img/pet transport.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end">
              <div>
                <h2 className='m-0 pb-3 fw-bold'>Pet Transportation</h2>
                <p>Need help moving your pet across town or across the state? Woofiedo provides reliable, stress-free transportation with your pet’s comfort as our top priority. Our vehicles are designed for pet safety and cleanliness, and our handlers are trained to ensure calm, smooth journeys. Transportation features: - Secure, well-ventilated vehicles - Experienced pet handlers - Local and longdistance travel - Door-to-door pick-up and drop-off Wherever your pet needs to go, we’ll get them there safely.</p>

              </div>
            </div>
          </div>
          <div className="row m-0 my-sm-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 ">
              <div>
                <h2 className='m-0 pb-3 fw-bold'>Behaviour Training</h2>
                <p>Every pet is unique — and so is their learning journey. Woofiedo’s behaviour training focuses on positive reinforcement to help pets grow confident, well-mannered, and happy. Our trainers work closely with both pets and parents to ensure lasting results and stronger relationships. Training programs include: - Puppy training and early socialization - Basic obedience training - Behaviour correction - One-on-one personalized sessions Training that’s effective, gentle, and rewarding.</p>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
              <div className='custom-height-imges-serives ServicesImg'>
                <img className='img-fluid rounded-4 ' src="/assets/img/pet behaviour training.png" alt="" />
              </div>
            </div>
          </div>
           <div className="row m-0 my-sm-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className='custom-height-imges-serives'>
                <img className='img-fluid rounded-4' src="/assets/img/pet relocationn.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end">
              <div>
                <h2 className='m-0 pb-3 fw-bold'>Pet Relocation</h2>
                <p>Relocating with a pet can be overwhelming — but it doesn’t have to be. Woofiedo manages every step of the relocation process, so you can focus on your move while we take care of your pet. From paperwork to safe arrival, we ensure a smooth and stress-free experience. Relocation services include: - Documentation and compliance support - Veterinary coordination - Travel planning and crate preparation - Domestic and international relocation Your pet’s journey is in trusted hands</p>

              </div>
            </div>
          </div>
        </div>
      </section>

    

      
      <section className='my-5'>
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <div>
                <h2 className='m-0 pb-3 fw-bold'>Pet Insurance</h2>
                <p>Unexpected medical needs shouldn’t stand in the way of quality care. Woofiedo helps you choose reliable pet insurance plans that protect your pet’s health and your finances. We guide you through policy options and support you throughout the claims process. Insurance benefits include: - Coverage for medical emergencies - Flexible and affordable plans - Expert policy guidance - Claims and documentation assistance Because your pet deserves care without compromise</p>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <div className='custom-height-imges-serives'>
                <img className='img-fluid rounded-4' src="/assets/img/pet insurance.png" alt="" />
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