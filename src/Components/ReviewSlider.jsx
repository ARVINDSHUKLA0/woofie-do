'use client';

import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import '../ComponentsStyle/ReviewSlider.css';

const ReviewSlider = () => { 
    const PrevArrow = ({ onClick }) => {
        return (
            <button 
                className="custom-arrow custom-prev" 
                onClick={onClick}
                aria-label="Previous review"
            >
                <i className="fa-solid fa-arrow-left"></i>
            </button>
        );
    };
    
    const NextArrow = ({ onClick }) => {
        return (
            <button 
                className="custom-arrow custom-next" 
                onClick={onClick}
                aria-label="Next review"
            >
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        );
    };

    const settings = {
        dots: false,          
        infinite: true,      
        speed: 500,          
        slidesToShow: 1,      
        slidesToScroll: 1,   
        autoplay: true,       
        autoplaySpeed: 2000, 
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    const reviews = [
        {
            description: 'I absolutely love Woofie-Do! Their team is so kind and caring, and they really understand what pets need. My dog always comes back happy and relaxed after their grooming sessions. Highly recommend for anyone looking for quality pet care!', 
            image: "/assets/img/ReviewImgOne.png", 
            name: 'Jenny Smith', 
            department: 'Art Director'
        },
        {
            description: 'Woofie-Do provides excellent pet services! From dog walking to daycare, they\'re reliable and always treat my pet like family. The staff is friendly and professional, and I feel confident leaving my pet in their care. Definitely my go-to for all pet needs!', 
            image: "/assets/img/ReviewImgTwo.png", 
            name: 'Ryan Taylor', 
            department: 'Copy Writer'
        },
        {
            description: 'Great experience with Woofie-Do! The team is attentive and responsive, and they truly care about the well-being of every pet. Their services are affordable and flexible, which is perfect for busy pet parents. Would recommend to anyone wanting the best for their furry friends!', 
            image: "/assets/img/ReviewImgThree.png",  
            name: 'Ashley Perez', 
            department: 'Event Planner'
        },
    ];

    return (
        <div className='overflow-hidden slick-slider-custom container-fluid'>
            <Slider className='review-main-conatiner mb-5' {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className='d-flex align-items-sm-center'>
                        <div>
                            <p className='font-size-silder-hedding'>{review.description}</p>
                            <div className='d-flex align-items-center mt-4 gap-4'>
                                <div className='rounded-carcel-custom'>
                                    <Image 
                                        src={review.image} 
                                        alt={`${review.name}'s profile`}
                                        width={80}
                                        height={80}
                                        className="img-fluid"
                                    />
                                </div>
                                <div>
                                    <h5 className='m-0 text-capitalize'>{review.name}</h5>
                                    <p className='text-capitalize'>{review.department}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewSlider;