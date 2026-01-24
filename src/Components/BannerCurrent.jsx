'use client';

import React, { useState } from 'react'
import '../ComponentsStyle/BannerCurrent.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const cities = [
    "Kolkata",
    "Mumbai",
    "Mysore",
    "Noida",
    "Pune",
    "Vijayawada",
    "Vizag",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Hyderabad"
];

const BannerCurrent = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [serviceDate, setServiceDate] = useState(null);

    const filtered = cities.filter(city =>
        city.toLowerCase().includes(query.toLowerCase())
    );

    const pathname = usePathname()

    

    const BannerArr = [
        {
            tite: " Safe & loving boarding and creche",
            BannerImg: "/assets/img/petBoradingicon.PNG",
            href: "/GroomingPet"
        },
        {
            tite: "Gentle, expert grooming",
            BannerImg: "/assets/img/petgrommingicon.PNG",
            href: "/GroomingPet"
        },
        {
            tite: "Stress-free pet transportation",
            BannerImg: "/assets/img/pettranceporticon.PNG",
            href: "/GroomingPet"
        },
        {
            tite: "Positive behaviour training",
            BannerImg: "/assets/img/Behaviour-training-icon.PNG",
            href: "/GroomingPet"
        },
        {
            tite: " End-to-end pet relocation",
            BannerImg: "/assets/img/pet-relocation.PNG",
            href: "/GroomingPet"

        },
        {
            tite: " Smart pet insurance solutions",
            BannerImg: "/assets/img/pet-insurance-icon.PNG",
            href: "/GroomingPet"
        }
    ]


    return (
        <>
            <section className='mt-100 d-lg-flex d-flex flex-column-reverse flex-lg-row  align-items-center gap-2'>
                <div className='main-banner-warper'>
                    <div className='banner-imges-main-conatiner'>
                        <div className='mt-3'>
                            <h2 className='ps-md-4 pb-3 mt-md-5 mt-0 ps-3 custom-font-size'>Where Premium Pet Care Meets Pure Love</h2>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className="banner-box ">
                            <h4 className='mb-5  ps-1'>Your Trusted Pet Care Partner</h4>
                            <div className="row align-items-top m-0 ">
                                {
                                    BannerArr.map((DataBaner, index) => (
                                        <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mb-4 d-flex">
                                            <div className={`banner-cetgory  w-100 ${activeIndex === index ? 'active' : ''}`}
                                                onClick={() => setActiveIndex(index)}>
                                                <Link
                                                    href={DataBaner.href}
                                                    className="d-flex align-items-center gap-2 custom-banner-decoration-none w-100"
                                                >
                                                    <div>
                                                        <Image src={DataBaner.BannerImg} width={70} height={70} alt="icon" />
                                                    </div>
                                                    <div>
                                                        <span className='fs-14 text-capitalize '>{DataBaner.tite}</span>
                                                        {/* <p className='m-0 fs-14 bnner-dec d-none d-sm-block text-capitalize'>{DataBaner.descrption}</p> */}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>


                                    ))
                                }
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex  ">
                                    <button className='w-100 mt-md-4  book-dog-btn'>book now </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='custom-width-banner mt-md-0 mt-2'>
                    <img className='img-fluid custom-banner-height' src="/assets/img/hd.webp" alt="" />
                </div>
                
            </section>
            <div className="dot-animation-layer">
  {Array.from({ length: 16 }).map((_, i) => (
    <span key={i} className={`dot dot-${i + 1}`}>•</span>
  ))}
</div>

        </>
    )
}

export default BannerCurrent









 