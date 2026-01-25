'use client';
import styles from './page.module.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import BannerCurrent from '@/Components/BannerCurrent';
import Link from 'next/link';
import { ReviewsRating } from '@/Components/ReviewsRating';
import BlogData from '@/Data/BlogData';

export default function Home() {


  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "  Read more...";
  };



  return (
    <>
      <Navbar />
      <BannerCurrent />



      <section className='mt-2 mb-4'>
        <h3 className='fw-bold text-capitaliz text-center fs-1 mb-4 pt-3' >Our Values</h3>
        <div className='row m-0'>
          <div className={`col-lg-6 col-md-12 col-sm-12 col-12 ${styles.OurValuimg}`}>
            <img className='img-fluid' src='/assets/img/our value.webp'></img>
          </div>

          <div className='col-lg-6 col-md-12 col-sm-12 col-12 mt-3'>
            <p className={`mb-lg-5 px-md-0 px-2  ${styles.CustomParWIdth}`}>Welcome to Woofiedo, a place where pets are not just cared for — they’re celebrated. We blend
              professional expertise with a warm, playful heart to give your furry companions the safest, happiest, and
              most comfortable experiences possible.
              From luxury boarding and cheerful day care to expert grooming, training, and global relocation, Woofiedo
              is your trusted partner in every stage of your pet’s life.
              Because when your pet is happy, you are too</p>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className={`d-flex mb-2  gap-2 ${styles.CustomBorderSection}`}>
                  <div>
                    <img className='img-fluid' src='/assets/img/love-first.webp' height={130} width={90}></img>
                  </div>
                  <p>Love First: Every decision starts with compassion</p>
                </div>

                <div className={`d-flex  gap-2 ${styles.CustomBorderSection}`}>
                  <div>
                    <img className='img-fluid' src='/assets/img/Comfort-pet-icon.webp' height={130} width={130}></img>
                  </div>
                  <p>Pet-Centric Care: Comfort, safety, and happiness always come first</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className={`d-flex mb-2  gap-2 ${styles.CustomBorderSection}`}>
                  <div>
                    <img className='img-fluid' src='/assets/img/Clean-icon.webp' height={130} width={130}></img>
                  </div>
                  <p>Clean & Secure: High standards  of hygiene and supervision</p>
                </div>

                <div className={`d-flex  gap-2 ${styles.CustomBorderSection}`}>
                  <div>
                    <img className='img-fluid' src='/assets/img/Trusted-icon.webp' height={130} width={130}></img>
                  </div>
                  <p>Trusted & Transparent: Clear  communication, no compromises</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <h3 className='fw-bold text-capitaliz text-center fs-1 mb-5' >Our Services</h3>
        <div className='custom-width px-md-5'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/pet boarding and creche.webp'></img>
              </div>
              <h2 className='my-4 fs-3'>Pet Boarding & Creche</h2>
              <p className='fs-16 pb-4'>Whether you’re heading to work or away on vacation, Woofiedo ensures your pet is cared for in a safe,
                comfortable, and joyful environment.
                Our boarding and creche facilities are designed to reduce stress and encourage happiness through routine,
                play, and affection. Every pet is supervised by trained caregivers who understand their emotional and
                physical needs.
                What your pet enjoys: - Cozy, hygienic boarding spaces - Structured daily schedules - Supervised playtime
                and relaxation - Safe socialization based on temperament - Regular feeding and well-being checks
                Perfect for short stays, long holidays, or daily daycare.</p>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/pet grooming.webp'></img>
              </div>
              <h2 className='my-4'>Grooming</h2>
              <p className='fs-16'>At Woofiedo, grooming is more than appearance — it’s about health, comfort, and confidence. Our groomers handle every pet with patience and care, ensuring a calm and positive experience. We use  only high-quality, pet-safe products and customize grooming based on breed, coat type, and
                temperament.Grooming services include: - Bathing and blow-drying - Hair trimming and styling - Nail clipping and paw
                care - Ear and eye cleaning - Breed-specific grooming options
                Your pet leaves feeling fresh, happy, and pampered.
              </p>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/pet transport.webp'></img>
              </div>
              <h2 className='my-4'>Pet Transportation</h2>
              <p className='fs-16'>Need help moving your pet across town or across the state? Woofiedo provides reliable, stress-free
                transportation with your pet’s comfort as our top priority.
                Our vehicles are designed for pet safety and cleanliness, and our handlers are trained to ensure calm,
                smooth journeys.
                Transportation features: - Secure, well-ventilated vehicles - Experienced pet handlers - Local and longdistance travel - Door-to-door pick-up and drop-off
                Wherever your pet needs to go, we’ll get them there safely.
              </p>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/pet behaviour training.webp'></img>
              </div>
              <h2 className='my-4'>Behaviour Training</h2>
              <p className='fs-16 '>Every pet is unique — and so is their learning journey. Woofiedo’s behaviour training focuses on positive
                reinforcement to help pets grow confident, well-mannered, and happy.
                Our trainers work closely with both pets and parents to ensure lasting results and stronger relationships.
                Training programs include: - Puppy training and early socialization - Basic obedience training - Behaviour
                correction - One-on-one personalized sessions
                Training that’s effective, gentle, and rewarding.</p>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/pet relocationn.webp'></img>
              </div>
              <h2 className='my-4'>Pet Relocation</h2>
              <p className='fs-16'>Relocating with a pet can be overwhelming — but it doesn’t have to be. Woofiedo manages every step of
                the relocation process, so you can focus on your move while we take care of your pet.
                From paperwork to safe arrival, we ensure a smooth and stress-free experience.
                Relocation services include: - Documentation and compliance support - Veterinary coordination - Travel
                planning and crate preparation - Domestic and international relocation
                Your pet’s journey is in trusted hands</p>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/pet insurance.webp'></img>
              </div>
              <h2 className='my-4'>Pet Insurance</h2>
              <p className='fs-16'>Unexpected medical needs shouldn’t stand in the way of quality care. Woofiedo helps you choose reliable
                pet insurance plans that protect your pet’s health and your finances.
                We guide you through policy options and support you throughout the claims process.
                Insurance benefits include: - Coverage for medical emergencies - Flexible and affordable plans - Expert
                policy guidance - Claims and documentation assistance
                Because your pet deserves care without compromise</p>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/CUDDLE THERAPY.webp'></img>
              </div>
              <h2 className='my-4'>Cuddle Therapy <span className='fw-bold fs-16'>(For People)</span>  </h2>
              <p className='fs-16'>Our Cuddle Therapy is a wellness experience for people, offering calm, joyful interaction with
                trained puppies. Guided by professional handlers, sessions focus on stress relief, emotional
                comfort, and mindful connection. Safe, hygienic, and supervised at all times—because
                gentle animal companionship can be deeply healing</p>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/puppy partyy.webp'></img>
              </div>
              <h2 className='my-4'>Puppy Party <span className='fw-bold fs-16'>(For People)</span> </h2>
              <p className='fs-16'>Puppy Parties are happiness-filled experiences where people spend quality time with
                trained, friendly puppies. Perfect for birthdays, corporate events, or mental-wellness
                gatherings. All sessions are supervised by professional trainers to ensure safety, comfort,
                and ethical care—for both guests and puppies.</p>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
              <div className={`${styles.ServicesImg}`}>
                <img className='img-fluid rounded-4' src='/assets/img/pet adoption.webp'></img>
              </div>
              <h2 className='my-4'>Pet Adoption <span className='fs-16 fw-bold'>(Dogs & Cats)</span> </h2>
              <p className='fs-16'>We support ethical dog and cat adoption by connecting responsible adopters with healthy,
                well-cared-for pets. From compatibility matching to post-adoption guidance, our process
                ensures a smooth transition into loving homes. Because adoption is a lifelong commitment,
                not just a moment.</p>
            </div>
          </div>
          <div className='text-center mt-2 mb-3'>
            <button className='book-dog-btn px-5'>book now</button>
          </div>
        </div>
      </section>

      <section className='mb-5 px-4'>
        <div>
          <h3 className='text-center fw-bold'>Reviews from Our Happy Pet Parents</h3>
        </div>
        <ReviewsRating />
      </section>


      <section className='mb-md-5 mb-3 container-fluid container-xxl px-md-4 px-2'>
        <di className="row m-0 align-items-center">
          <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
            <div className="ratio ratio-16x9">
              <iframe
                className='rounded-2'
                src="/assets/video/woofie-home-viedo.MP4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className='col-lg-4 col-lg-4 col-sm-4 col-12'>
            <div>
              <img className={`img-fluid w-100 ${styles.imgesYoutubeSide}`} src="/assets/img/banner-bottom-five.webp" />
              <p className='mt-3 fw-bold fs-18 text-center'>The Ultimate Guide to: Cats vs. Dogs</p>
            </div>
          </div>
        </di>
      </section>

      <section>
        <div className='container-fluid container-xxl px-2 mb-md-5 mb-3'>
          <div className='row m-0'>
            <h3 className='text-center mb-4 fw-bold'>Latest stories from <span className='main-color'>Woofie-o</span> </h3>
            <div>
              <div className='container-fulid container-xxl px-1 mb-3'>
                <div className='row m-0'>
                  {
                    BlogData.map((BlogItem, index) => (
                      <div key={index} className={`col-lg-4 col-md-4 col-sm-4 col-12 main-blog p-sm-2 p-0`}>
                        <Link className={`text-decoration textHover `} href={`/blog/${BlogItem.id}`}>
                          <div>
                            <div className='blogImg'>
                              <img className='img-fluid' src={BlogItem.image} />
                            </div>
                            <h5 className='fs-16 pt-1 pb-2 fw-bold text-dark text-hover-decrotion ps-2'>
                              {truncateText(BlogItem.title, 2)}
                            </h5>

                          </div>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
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
              <img className='w-25 m-auto ' src='/assets/img/contact.webp'></img>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

