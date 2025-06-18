'use client';  

import React from 'react';
import Image from 'next/image';  
import '../ComponentsStyle/Banner.css';

const Banner = () => {
  return (
    <section className='overflow-hidden'>
      <div className='container px-2 position-relative'>
        <div className="row my-100">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <h2 className='banner-font-size mb-3'>
                Gentle Hands, Healthy Paws Exceptional <span className='banner-custom-color'> Pet Care.</span>
              </h2>
              <p className='mt-sm-5 my-4'>
                Woofie Do offers expert, gentle care for your beloved pet. Our comprehensive services, 
                from routine check-ups to advanced treatments, mean your furry family member always 
                receives the best possible veterinary attention.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className='custom-imges-height d-flex position-relative'> 
              <div className='banner-inner-warper mt-100'>
                <div className='bg-custom-one border-banner-one custom-height mb-sm-3 mb-2 position-relative'>
                  <div className='imges-banner-warpper item-banner-one'>
                    <Image 
                      className='img-fluid border-banner-one'
                      src="/assets/img/dog-1.jpg"
                      alt="Happy dog receiving care"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                </div>
                <div className='bg-custom-two border-banner-two custom-height mb-sm-3 position-relative'>
                  <div className='imges-banner-warpper item-banner-one'>
                    <Image 
                      className='img-fluid border-banner-two'
                      src="/assets/img/dog-2.jpg"
                      alt="Dog playing with vet"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
              <div className='banner-inner-warper ps-lg-5 ps-md-3 ps-3'>
                <div className='bg-custom-three border-banner-one custom-height mb-sm-3 mb-2 position-relative'>
                  <div className='imges-banner-warpper item-banner-one'>
                    <Image 
                      className='img-fluid border-banner-one'
                      src="/assets/img/dog-3.jpg"
                      alt="Dog being examined by vet"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div className='bg-custom-four border-banner-two custom-height mb-sm-3 position-relative'>
                  <div className='imges-banner-warpper item-banner-one'>
                    <Image 
                      className='img-fluid border-banner-two'
                      src="/assets/img/dog-4.jpg"
                      alt="Small dog receiving attention"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;