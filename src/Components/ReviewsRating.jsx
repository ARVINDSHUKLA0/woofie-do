'use client';

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../ComponentsStyle/ReviewsRating.css';
import Image from 'next/image';

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
            name: "Mrs. Vedita",
            date: "May 10, 2023",
            userImg: "/assets/img/ReviewImgThree.png",
            dec: "We had such a fantastic experience with the grooming professionals! They did an impeccable job grooming our Maltese.",
            afterAndBefor: "Casper: Before and After",
            reviewImg: "/assets/img/pettarnport.png",
            reviewImg1: "/assets/img/pettarnport.png",
        },
        {
            name: "Mr. Rahul",
            date: "June 02, 2023",
            userImg: "/assets/img/ReviewImgThree.png",
            dec: "Excellent service and very professional staff. My dog loved the grooming session.",
            afterAndBefor: "Bruno: Before and After",
            reviewImg: "/assets/img/pettarnport.png",
            reviewImg1: "/assets/img/pettarnport.png",
        }
    ];

    return (
        <section className="reviews-rating-section">
            <div className="container-fliud px-md-4 py-md-3">
                <Slider {...settings}>
                    {ReviewArr.map((item, index) => (
                        <div key={index}>
                            <div className="review-card">
                                <div className="review-inner">
                                    <div className="review-left">
                                        <div className="review-user">
                                            <Image
                                                src={item.userImg}
                                                width={48}
                                                height={48}
                                                className="rounded-circle"
                                                alt="user"
                                            />
                                            <div>
                                                <h6 className='fw-bold'>{item.name}</h6>
                                                <small className='fw-bold'>{item.date}</small>
                                                <div className="stars fs-5">★★★★★</div>
                                            </div>
                                        </div>

                                        <p className="review-text fs-12 fw-bold pe-5">
                                            {item.dec}
                                        </p>
                                    </div>
                                    <div className="review-right">
                                        <div className="review-images ">
                                            <Image src={item.reviewImg} width={150} height={200} alt="before" />
                                            <Image src={item.reviewImg1} width={150} height={200} alt="after" />
                                        </div>
                                        <p className="review-caption fw-bold">{item.afterAndBefor}</p>
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
