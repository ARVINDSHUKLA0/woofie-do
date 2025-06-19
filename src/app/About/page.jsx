"use client"
import Navbar from '@/Components/Navbar'
import '../About/about.css'
import React from 'react'
import Link from 'next/link'
import BlogData from '@/Data/BlogData'
import ReviewSlider from '@/Components/ReviewSlider'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <section className='about-banner-bg text-end'>
        <div className="">
          <span className='text-capitalize'>
            <Link href="/" className='text-decoration-none-one'>home</Link>
          </span>
          <span>/</span> <span className='text-capitalize'>about us </span>
          <h2 className='text-capitalize fw-bold'>about us</h2>
        </div>
      </section>

      <section className='container py-5 overflow-hidden'>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <img className='img-fluid' src="/assets/img/Home1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 find-dog-img-bg">
            <div className='d-flex'>
              <div className='d-lg-block d-none'>
                <img src="/assets/img/findDogImg.png" width={120} alt="" />
              </div>
              <div className='my-md-5'>
                <h2>About Woofie Do: Your Partner in Pet Care</h2>
                <p>At Woofie Do, we believe that pets are cherished members of the family, and they deserve nothing less than exceptional care. Our clinic was founded on a passion for animals and a commitment to providing comprehensive, compassionate, and cutting-edge veterinary services to the [Your City/Community Name, e.g., Delhi NCR] area and beyond.</p>

                <div className='d-md-flex d-block py-md-4'>
                  <div>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Vaccination</span>
                    </p>
                    <p className='m-0'>
                      <span className='fw-bold fs-14'>Pet Grooming</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>In-House Diagnostics</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Food & Diet Consultation</span>
                    </p>
                    <p className='m-0'>
                      <span className='fw-bold fs-14'>Pet IPD (In-Patient Department / Hospitalization)</span>
                    </p>
                  </div>
                  <div className=''>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Cremation</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Pet Registration</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>Consultation</span>
                    </p>
                    <p className='m-0'>
                      <span className='fs-14 fw-bold'>24x7 Emergency Services</span>
                    </p>
                  </div>
                </div>
                <button className='main-btn'>
                  <Link className='text-white text-decoration' href="/about">about us</Link>
                </button>
              </div>


            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='text-center pb-5'>
            <h2>Our Mission & Philosophy</h2>
            <p >Our mission at Woofie Do is simple: to foster the lifelong health and happiness of every pet we serve. We achieve this by:</p>
          </div>
          <div className="row m-0">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
              <div className='custom-box-sodwo'>
                <h6 className='fw-bold text-capitalize'>Delivering Excellence</h6>
                <p>Providing the highest standard of veterinary medicine through advanced techniques, continuous education, and state-of-the-art equipment</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
              <div className='custom-box-sodwo'>
                <h6 className='text-capitalize fw-bold'>Practicing Compassion</h6>
                <p>Treating every pet with the gentleness, respect, and individualized attention they deserve, ensuring a comfortable and fear-free experience.</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
              <div className='custom-box-sodwo'>
                <h6 className='text-capitalize fw-bold'>Building Trust</h6>
                <p>: Fostering strong, transparent relationships with pet owners through clear communication, education, and unwavering dedication to their beloved companions</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
              <div className='custom-box-sodwo'>
                <h6 className='text-capitalize fw-bold'>Promoting Wellness</h6>
                <p>Emphasizing preventative care and proactive health strategies to ensure pets thrive at every stage of their lives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container my-5'>
        <div className="row m-0">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div>
              <h3 className='fw-bold mb-3'>Who We Are: Your Dedicated Team</h3>
              <p>Behind Woofie Do is a team of highly skilled, empathetic, and passionate veterinary professionals. From our experienced veterinarians and certified technicians to our caring support staff and groomers, every member of our team shares a deep love for animals and a commitment to their well-being. We work collaboratively to provide integrated care, ensuring that your pet receives consistent, high-quality attention tailored to their unique needs.</p>
              <p>We regularly engage in professional development to stay at the forefront of veterinary science, bringing the latest advancements and best practices directly to your pet.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className='imges-teams-height'>
              <img className='img-fluid' src="/assets/img/DedicatedPetTeam.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='container my-5'>
        <div>
          <h4 className='text-center'>Our Comprehensive Approach to Care</h4>
          <p className='text-center'>Woofie Do is more than just a clinic; it's a complete pet care hub designed for your convenience and your pet's ultimate comfort. We offer a full spectrum of services, including:
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div>
                <h4 className='fw-light-bolder'>Preventative Health Programs</h4>
                <p>Personalized vaccination plans, parasite control, and wellness exams to protect your pet from illness</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className='imges-teams-height'>
                <img className='img-fluid' src="/assets/img/PreventativeHealthProgramsImg.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className='imges-teams-height'>
                <img className='img-fluid' src="/assets/img/In-HouseDiagnostics.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-end">
              <div>
                <h4 className='fw-light-bolder'>In-House Diagnostics</h4>
                <p>Rapid and accurate results from our state-of-the-art lab and imaging facilities (X-ray, ultrasound).</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div>
                <h4 className='fw-light-bolder'>Nutritional & Diet Consultation</h4>
                <p>: Expert guidance to optimize your pet's diet for their specific health needs.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className='imges-teams-height'>
                <img className='img-fluid' src="/assets/img/SurgeryPet-Serives.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className='imges-teams-height'>
                <img className='img-fluid' src="/assets/img/ProfessionalPetGroomingImg.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-end">
              <div>
                <h4 className='fw-light-bolder'>Professional Pet Grooming</h4>
                <p>Keeping your pet looking and feeling great, promoting skin health and hygiene.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div>
                <h4 className='fw-light-bolder'>In-Patient Department (IPD)</h4>
                <p> Dedicated facilities for hospitalized pets requiring continuous care and observation.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className='imges-teams-height'>
                <img className='img-fluid' src="/assets/img/petHosptailName.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className='imges-teams-height'>
                <img className='img-fluid' src="/assets/img/SurgeryPet-Serives.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-end">
              <div className=''>
                <h4 className='fw-light-bolder'>24/7 Emergency Services</h4>
                <p>Around-the-clock critical care for unexpected illnesses or injuries.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div>
                <h4 className='fw-light-bolder'>Compassionate Pet Cremation & Registration Assistance</h4>
                <p> Supporting you through difficult times and helping with essential pet identification.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className='imges-teams-height'>
                <img className='img-fluid' src="/assets/img/In-HouseDiagnostics.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container text-center py-50'>
          <p className='fs-4 fw-light-bold'>Our Promise to You</p>
          <p>When you choose Woofie Do, you're choosing a partner committed to your pet's health journey. We promise to provide empathetic care, clear communication, and professional excellence, ensuring that your furry family member lives a happy, healthy, and fulfilling life by your side.</p>
        </div>
      </section>

      <section>
        <div className="row m-0">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="row m-0">
              {BlogData.slice(1, 5).map((blogValue, index) => (
                <div key={index} className="col-lg-3 col-sm-6 col-12 mb-50 custom-sm-margin">
                  <div className='d-flex align-items-center'>
                    <div className='cutom-border'></div>
                    <p className='m-0 ps-2'>{blogValue.date}</p>
                    <i className="fas fa-circle li-icon-dots ps-2"></i>
                  </div>
                  <p className='m-0'>{blogValue.creativity}</p>
                  <h4 className='fw-bold my-lg-4 py-2'>{blogValue.name}</h4>
                  <img className='img-fluid' src={blogValue.image} alt="" />
                  <p className='m-0 py-lg-4 py-3'>{blogValue.title}</p>
                  <Link href={`/Blog/${blogValue.id}`}>
                  <button className='custom-border'>read more</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>
      
      <ReviewSlider/>
      <Footer/>

    </>
  )
}

export default page