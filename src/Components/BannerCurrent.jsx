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
            tite: "Pet Boarding & Creche",
            descrption: "safe boarding & fun creche services",
            BannerImg: "/assets/img/petBoradingicon.PNG",
            href: "/PetBoarding"
        },
        {
            tite: "grooming",
            descrption: "cat/dog grooming service",
            BannerImg: "/assets/img/petgrommingicon.PNG",
            href: "/GroomingPet"
        },  
        {
            tite: "pet transportation",
            descrption: "local pickup/drop for your pets",
            BannerImg: "/assets/img/pettranceporticon.PNG",
            href: "/PetTransportation"
        },
        {
            tite: "behaviour training",
            descrption: "creche-based training for pets",
            BannerImg: "/assets/img/Behaviour-training-icon.PNG",
            href: "/DogTraining"
        },
        {
            tite: "pet relocation",
            descrption: "domestic & international pet relocation",
            BannerImg: "/assets/img/pet-relocation.PNG",
            href: "/PetRelocation"

        },
        {
            tite: "Pet insurance",
            descrption: "protect your pets with insurance",
            BannerImg: "/assets/img/pet-insurance.PNG",
            href: "/PetInsurance"
        }
    ]


    return (
        <>
            <section className='mt-100 position-relative'>
                <div className='main-banner-warper '>
                    <div className='background-imges-banner'> </div>
                    <div className='container-fluid px-md-4'>
                        <div className="banner-box ">
                            <h4 className='text-center'>Your Trusted Pet Care Partner</h4>
                            <p className='text-center'>Book Pet Care Service At Home with <span  className='main-color fw-bold fs-18'>Woofie-Do</span> </p>
                            <div className="row">
                                {
                                    BannerArr.map((DataBaner, index) => (
                                        <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4 d-flex">
                                            <div className={`banner-cetgory w-100 ${activeIndex === index ? 'active' : ''}`}
                                                onClick={() => setActiveIndex(index)}>
                                                <Link
                                                    href={DataBaner.href}
                                                    className="d-flex align-items-center gap-2 text-decoration-none w-100"
                                                >
                                                    <div>
                                                        <Image src={DataBaner.BannerImg} width={40} height={50} alt="icon" />
                                                    </div>
                                                    <div>
                                                        <p className='m-0 fs-16 fw-bold text-capitalize'>{DataBaner.tite}</p>
                                                        <p className='m-0 fs-14 bnner-dec d-none d-sm-block text-capitalize'>{DataBaner.descrption}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>


                                    ))
                                }
                            </div>
                            <div className="row m-0 align-items-center">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4 d-flex">
                                    <div className="city-wrapper w-100">
                                        <label className="city-label">Your City</label>

                                        <input
                                            type="text"
                                            placeholder="Search Your City Here..."
                                            value={query}
                                            onChange={(e) => {
                                                setQuery(e.target.value);
                                                setOpen(true);
                                            }}
                                            onFocus={() => setOpen(true)}
                                            className="city-input"
                                        />

                                        {open && filtered.length > 0 && (
                                            <ul className="city-dropdown m-0 p-0">
                                                {filtered.map((city, i) => (
                                                    <li className='list-style-none'
                                                        key={i}
                                                        onClick={() => {
                                                            setQuery(city);
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        {city}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4 d-flex flex-column">
                                    <label className="city-label">Service date</label>

                                    <DatePicker 
                                        selected={serviceDate}
                                        onChange={(date) => setServiceDate(date)}
                                        placeholderText="Select Service Date Here..."
                                        dateFormat="dd MMMM yyyy"
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        popperPlacement="bottom-start"
                                        popperClassName="service-datepicker-popper"
                                        portalId="root-portal"
                                        className="w-100 city-input"
                                    />

                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex  ">
                                    <button className='w-100 mt-md-4  book-dog-btn'>book dog walking </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerCurrent