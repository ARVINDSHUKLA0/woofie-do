'use client';
import styles from './page.module.css';
// import Link from "next/link";
import { useRef, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
// import BlogData from "@/Data/BlogData";
// import ServiceScrollSlider from "@/Components/ServiceScrollSlider";
// import ReviewSlider from "@/Components/ReviewSlider";
import Image from "next/image";
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import BannerCurrent from '@/Components/BannerCurrent';
import Link from 'next/link';
import ReviewSlider from '@/Components/ReviewSlider';
import { ReviewsRating } from '@/Components/ReviewsRating';
import BlogData from '@/Data/BlogData';

export default function Home() {




  // const Imgesfunc = (image) => {
  //   setImgesHover(image)
  // }
  // const handleServiceClick = (value) => {
  //   setActiveService(value);
  // };


  // const MainArr = [
  //   {
  //     name: "Comprehensive Care Under One Roof:", brandDescription: "Description: From essential vaccinations and routine wellness checks to advanced surgical procedures and specialized diagnostics, we offer a complete spectrum of veterinary services. This means less running around for you and seamless, integrated care for your pet throughout every stage of their life.", year: "2024", SerivesHedding: "digital infinity awards", titel: 'best animation',
  //   },
  //   {
  //     name: "Compassionate & Gentle Approach", brandDescription: "Description: We understand that vet visits can be stressful. Our team is trained in gentle handling techniques and prioritizes creating a calm, comforting environment for your pet. We focus on building trust, ensuring each visit is as positive and stress-free as possible.", year: "2023", SerivesHedding: "best website of the year", titel: 'interactive design',
  //   },
  //   {
  //     name: "Expert & Experienced Team", brandDescription: "Description: Your pet will be in the hands of highly skilled and dedicated veterinary professionals. Our experienced veterinarians and support staff are committed to staying updated with the latest medical advancements, providing your companion with the highest standard of care based on sound scientific practices.", year: "2022", SerivesHedding: "festival of digital culture", titel: 'photo contest',
  //   },
  //   {
  //     name: "Advanced Diagnostics & Technology", brandDescription: "Description: We utilize cutting-edge in-house diagnostic tools, including advanced imaging and laboratory services, for rapid and accurate health assessments. This allows us to quickly identify issues and develop precise treatment plans, often on the same day, getting your pet on the path to recovery faster.", year: "2021", SerivesHedding: "crown digital agency site", titel: 'css design awards',
  //   },
  //   {
  //     name: "Unmatched Convenience & Accessibility", brandDescription: "Description: We make pet care easier for you. With services like 24/7 emergency care, convenient pet transportation, and flexible consultation options, we're always here when you need us most. Our goal is to remove barriers to quality care, ensuring your pet gets attention promptly.", year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design',
  //   },
  //   {
  //     name: "Focus on Preventative & Holistic Wellness", brandDescription: "Description: Our philosophy extends beyond treating illness; we're passionate about preventing it. Through personalized vaccination schedules, expert nutritional advice, and proactive health screenings, we empower you to ensure your pet enjoys a long, healthy, and vibrant life.", year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design',
  //   },
  //   {
  //     name: " Trust & Peace of Mind", brandDescription: "Description: We believe in fostering strong, transparent relationships with pet owners. We'll always communicate clearly, explain your pet's condition and treatment options thoroughly, and answer all your questions. When you choose Woofie Do, you gain a trusted partner truly invested in your pet's well-being. ", year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design',
  //   },
  // ]

  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      <BannerCurrent />
      {/* <section className='container my-4'>
        <div className="row m-0 text-center">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
            <div className={`${styles.socialconatiner} ${styles.socialContent}`}> 
              <Image className='img-fluid mb-2' src="/assets/img/svg-1.png" width={50} height={50} alt="" />
              <h2 className='text-capitalize mb-2'>CARE</h2>
              <p className='px-lg-4'>Compassionate, gentle care for your pet's comfort and well-being.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
            <div className={`${styles.socialconatiner} ${styles.socialContent}`}>
              <Image className='img-fluid mb-2' src="/assets/img/svg-2.png" width={50} height={50} alt="" />
              <h2 className='text-capitalize mb-2'>SERVICE</h2>
              <p className='px-lg-4'>Comprehensive veterinary services for all your pet's health needs.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
            <div className={`${styles.socialconatiner} ${styles.socialContent}`}>
              <Image className='img-fluid mb-2 bg-transparent' src="/assets/img/svg-3.png" width={50} height={50} alt="" />
              <h2 className='text-capitalize mb-2'>PROTECTION</h2>
              <p className='px-lg-4'>Safeguarding your pet's health with preventative measures and ongoing wellness.</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className='py-md-5 py-3'>
        <div className='container-fluid px-sm-4'>
          <h3 className='text-sm-center mb-4'>Services for Every Pet at woofie-do</h3>
          <div className='row m-0 '>
            <div className='col-lg-7 col-md-6 col-sm-6 col-12'>
              <ReviewSlider />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12">
              <div className={`${styles.trustCard}`}>
                <div className={`d-flex justify-content-center align-items-center py-md-3 py-2 ${styles.reviewsBottomBorder}`}>
                  <img
                    src="/assets/img/homepage__services-section__shield-icon.svg"
                    alt="trust"
                    className={`${styles.trustIcon}`}
                  />
                  <h5>98.7% of reviews are 5 star</h5>
                </div>

                <ul className={`${styles.trustList} px-2`}>
                  <li>
                    <span>✔</span>
                    All service providers at ThePetNest undergo a basic background check.
                  </li>
                  <li>
                    <span>✔</span>
                    All service providers offer a comprehensive profile including personal
                    details.
                  </li>
                  <li>
                    <span>✔</span>
                    All service providers are vetted and approved by our team of pet care
                    specialists.
                  </li>
                </ul>
                <div className='m-2'>
                  <button className={`${styles.trustBtn} `}>
                    Book a Pet Care Service
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='pb-md-5 pb-3'>
        <div className='container'>
          <div className='px-2 mb-md-5 mb-3'>
            <h3 className='fw-bold text-center px-2'>How to book a service with woofie-do</h3>
            <p className='fs-14 text-center px-2'>Charges may vary based on Pet and City.</p>
          </div>
          <div className='row m-0'>
            <div className='col-lg-4 col-md-4 col-sm-4 col-12 text-center'>
              <div>
                <i className="fa-solid fa-magnifying-glass fs-3 mb-2"></i>
                <h5 className='fw-bold'>Select a Service</h5>
                <p className='fs-14 px-3'>Visit Woofie-do website or app and browse through the various services offered such as cat and dog grooming, cat and dog boarding, dog walking, veterinary care, dog training, dog insurance, pet re-home or adoption. Choose the service that best fits the needs of your pet.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-12 text-center'>
              <div>
                <i className="fa-solid fa-message fs-3 mb-2"></i>
                <h5 className='fw-bold'>Book an appointment</h5>
                <p className='fs-14 px-3'>Once you've selected a service, choose a convenient date and time for the appointment. Fill in any required information about your pet that can help in providing the best care possible. Confirm the booking by making an online payment or selecting to pay in person if available.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-12 text-center'>
              <div>
                <i className="fa-solid fa-cart-shopping fs-3 mb-2"></i>
                <h5 className='fw-bold'>Enjoy & Relax</h5>
                <p className='fs-14 px-3'>After booking the appointment, you just need to prepare your pet for the service. On the appointed day, wait for the mobile service to arrive at your home. Then, simply relax knowing your pet is in good hands and enjoy the peace of mind that comes with professional care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-md-5 mb-3'>
        <div className={`container bg-dark p-3 rounded-1 ${styles.PremiumDiscount}`}>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h5 className='text-white fw-bold'>Introducing woofie-do <span style={{ color: "#F38020" }}>Premium</span> </h5>
              <p className='text-white m-0'>Get Woofie-do Premium Membership to get an additional up to 10% Discount</p>
            </div>
            <div>
              <img src="/assets/img/pettranceporticon.PNG" width={80} height={80} />
            </div>
          </div>
        </div>
      </section>

      <section className='mb-5'>
        <div>
          <h3 className='text-center fw-bold'>Reviews from Our Happy Pet Parents</h3>
        </div>
        <ReviewsRating />
      </section>


      <section className='mb-md-5 mb-3 container-fluid px-md-4 px-2'>
        <di className="row m-0 align-items-center">
          <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/SMpOcYcmIl8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className='col-lg-4 col-lg-4 col-sm-4 col-12'>
            <div>
              <Image className='img-fluid' src="/assets/img/banner-bottom-five.png" width={500} height={300} />
              <p className='mt-3 fw-bold fs-18 text-center'>The Ultimate Guide to: Cats vs. Dogs</p>
            </div>
          </div>
        </di>
      </section>

      <section>
        <div className='container px-md-4 px-2 mb-md-5 mb-3'>
          <div className='row m-0'>
            <h3 className='text-center mb-4 fw-bold'>Latest stories from <span className='main-color'>Woofie-o</span> </h3>
            <div>
              <div className='container px-md-4 px-2 mb-3'>
                <div className='row m-0'> 
                  {
                    BlogData.map((BlogItem, index) => (
                      <div key={index} className={`col-lg-4 col-md-4 col-sm-4 col-12 `}>
                        <Link className={`text-decoration textHover `} href={`/Blog/${BlogItem.id}`}>
                          <div>
                            <div className='blogImg'>
                              <img className='img-fluid' src={BlogItem.image} />
                            </div>
                            <h5 className='fs-16 py-2  fw-bold text-dark'>{BlogItem.title}</h5>
                          </div>
                        </Link>
                      </div>
                    ))
                  }
                  {/* <div className='text-center mt-3'>
              <button className={`width-btn border-0 btn-woofie ${styles.blogbtnwidth} `}>Read Blog</button>
            </div> */}
                </div>
              </div>
            </div>
            {/* <div className='text-center mt-3'>
              <button className={`width-btn border-0 btn-woofie ${styles.blogbtnwidth} `}>Read Blog</button>
            </div> */}
          </div>
        </div>
      </section>

      <section className='px-md-4 pt-sm-4 pt-2' style={{ backgroundColor: "#F2F2F2" }}>
        <div className='container-fluid  px-2'>
          <div className='text-center'>
            <p><i className="fa-solid fa-message fs-3"></i></p>
            <h5 className='fw-bold text-capitalize mb-3'>Ready to book your next pet service with woofie-do?</h5>
            <div className='mx-2'>
              <button className={`width-btn py-sm-3  border-0 btn-woofie text-capitalize ${styles.blogbtnwidth} `}>book a pet care service</button>
            </div>
            <div className='mt-4'>
              <img className='w-25 m-auto ' src='/assets/img/crock-dog-phone-call.png'></img>
            </div>
          </div>
        </div>
      </section>




      {/* <ServiceScrollSlider /> */}



      {/* <section className='container-fluid'>
        <div className='custom-bottom-border d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'> Why Choose Woofie Do?</h2>
        </div>
      </section> */}

      {/* <section>
        <div className="container-fluid">
          <div className="row m-0 py-5 ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">'
              <div className={styles.conatinerImg}>
                <div>
                  <div >
                    <Image className={`img-fluid ${styles.customImgWidth}`} src="/assets/img/PetGrooming.jpg" width={300} height={300} alt="" />
                  </div>
                  <div className='text-start text-sm-end'>
                    <Image className={`img-fluid me-lg-4 sm-mt-3 ${styles.customImgWidth}`} src="/assets/img/PetVaccinationsImg.jpg" height={300} width={300} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <h2 className='fw-bold mt-3'>
                When it comes to your pet's health and happiness, you want the very best. At Woofie Do, we're dedicated to providing exceptional care that you and your furry family member deserve.
              </h2>
              <div className=' mt-100'>
                <ul className="p-0">
                  {MainArr.map((service, index) => (
                    <li key={index} className="list-unstyled">
                      <div
                        className={`d-flex justify-content-between align-items-center ${styles.tableList}`}
                        onClick={() => handleToggle(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="text-capitalize fw-bold">{service.name}</span>
                        <i
                          className={`fa-solid fa-arrow-right ${activeIndex === index ? `${styles.rotate}` : ""}`}
                        ></i>
                      </div>

                      {activeIndex === index && (
                        <>
                          {service.brandDescription && (
                            <div className="d-flex gap-3">
                              <i className="fa-solid fa-circle li-icon-dots mt-2"></i>
                              <p>
                                <span style={{ fontWeight: "bold", fontSize: "17px", paddingRight: "10px" }}>
                                  {service.brandDescription.split(" ").slice(0, 1).join(" ")}
                                </span>
                                {service.brandDescription.split(" ").slice(1).join(" ")}
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='container-fluid py-lg-5'>
        <div className='custom-bottom-border  d-flex align-items-center gap-3   my-md-4 my-sm-4'>
          <h2 className='font-size-large'>latest news</h2>
          <h5 className='mt-5 d-md-block d-none'>/ discover the news</h5>
        </div>
      </section> */}
      {/* 
      <section className={`mb-50 ${styles.customMargin}`}>
        <div className="row m-0">
          <div className="col-lg-9 col-md-9 col-sm-12 col-12  offset-lg-3">
            <div className="row m-0 ">
              {BlogData.map((blogValue) => (
                <div key={blogValue.id} className="col-lg-4 col-sm-6 col-12  mb-50">
                  <div className='d-flex align-items-center'>
                    <div className='cutom-border'></div>
                    <p className='m-0 ps-2'>{blogValue.date}</p>
                    <i className="fas fa-circle li-icon-dots ps-2"></i>
                  </div>
                  <p className='m-0'>{blogValue.creativity}</p>
                  <h5 className='fw-bold my-lg-4'>{blogValue.title}</h5>
                  <Image className='img-fluid' width={300} height={300} src={blogValue.image} alt={blogValue.title} />
                  <p className='m-0 py-lg-4 py-3'>{blogValue.description}</p>
                  <Link href={`/Blog/${blogValue.id}`}>
                  <button className='custom-border'>read more</button>
                  </Link>
                </div>

              ))}
            </div>
          </div>
        </div>

      </section> */}
      <Footer />
    </>
  );
}

