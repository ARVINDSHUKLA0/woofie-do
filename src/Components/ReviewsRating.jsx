'use client';

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../ComponentsStyle/ReviewsRating.css';
 

export const ReviewsRating = () => {

    const settings = {
        dots: false,    
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const ReviewArr = [
        {
            name: "Aditi Sharma (2025) – Golden Retriever", 
            dec: "“Woofie Do has been our go-to for grooming and daycare. My Golden Retriever is alwaysexcited to go and comes back clean, calm, and happy. The staff genuinely understands dogsand treats them with patience.",
        },
       
        {
            name: "Rohan Mehta (2025) – Indie Dog", 
            dec: "“I used Woofie Do’s training and behavioural support for my Indie dog. The guidance was practical and respectful, never forceful. I saw noticeable improvement in his confidence and daily routine.”",
        },
        {
            name: "Neha Kapoor (2026) – Persian Cat", 
            dec: "“Finding reliable boarding for my Persian cat was difficult until Woofie Do. The space is clean, quiet, and cat-friendly. She came home relaxed, not stressed, which speaks volumes.”",
        },
        {
            name: "Kunal Verma (2025) – Shih Tzu Puppy", 
            dec: "“Woofie Do helped us with puppy care, grooming, and transportation. My Shih Tzu puppy was handled gently throughout. Regular updates and clear communication made the entire experience stress-free.”",
        },
        {
            name: "Simran Arora (2026) – Labrador", 
            dec: "“I booked cuddle therapy for myself and later used grooming services for my Labrador. Both experiences were thoughtful and calming. Woofie Do balances emotional wellness and professional pet care beautifully.”",
        },
        {
            name: "Ankit Malhotra (2025) – Beagle", 
            dec: "“My Beagle stayed at Woofie Do’s boarding during travel. The hygiene standards, supervision, and daily care were excellent. He returned healthy, calm, and clearly well looked after.”",
        },
        {
            name: "Pooja Nair (2026) – Mixed-Breed Dog", 
            dec: "“We adopted our dog through Woofie Do and later used their training support. The team guided us patiently at every step, making first-time pet parenting feel manageable and reassuring.”",
        },
       
    ];

    return (
        <section className="reviews-rating-section">
            <div className="container-fliud container-xxl  py-md-3">
                <Slider {...settings}>
                    {ReviewArr.map((item, index) => (
                        <div key={index}>
                            <div className="review-card">
                                <div className="review-inner">
                                    <div className="review-left">
                                        <div className="review-user">
                                            <div>
                                                <h6 className='fw-bold'>{item.name}</h6>
                                                <small className='fw-bold'>{item.date}</small>
                                                <div className="stars fs-5">★★★★★</div>
                                                  <p className="review-text mt-3 fs-12 fw-bold  text-center">
                                            {item.dec}
                                        </p>
                                            </div>
                                        </div>

                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
};
