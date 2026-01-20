'use client';

import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../ComponentsStyle/ReviewSlider.css';
import Link from 'next/link';

const ServiceSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const services = [
        {
            title: "Pet Boarding & Creche",
            desc: "Book Pet Boarding",
            image: "/assets/img/petBoarding.png",
            icon: "/assets/img/petBoradingicon.PNG",
            link: "Find out more about Boarding"
        },
        {
            title: "Grooming",
            desc: "Book Professional Pet Grooming",
            image: "/assets/img/petgromming.png",
            icon: "/assets/img/petgrommingicon.PNG",
            link: "Find out more about Grooming"
        },
        {
            title: "Pet Transportation",
            desc: "Local Pickup / Drop",
            image: "/assets/img/pettarnport.png",
            icon: "/assets/img/pettranceporticon.PNG",
            link: "Find out more about Transportation"
        }
    ];

    return (
        <div className="container-fluid service-slider-wrapper service-main-row">
            <Slider {...settings}>
                {services.map((item, index) => (
                    <div key={index} className="px-sm-2 p-0">
                        <div className="service-card">

                            <div className="service-image">
                                <Image src={item.image} alt={item.title} fill />
                            </div>

                            <div className="service-icon">
                                <Image src={item.icon} alt="icon" width={40} height={40} />
                            </div>

                            <div className="service-content">
                                <p className="fs-16 fw-bold m-0 text-white">{item.title}</p>
                                <p className="fs-12 m-0 text-white">{item.desc}</p>
                                <Link className="fs-12" href="#">
                                    {item.link} →
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default ServiceSlider;
