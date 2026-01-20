'use client';
import React, { useState } from 'react';
import '../ComponentsStyle/Navbar.css';
import Link from 'next/link';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <nav className='navbar-fixed position-relative'>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-between align-items-center'>

                        <div className='nav-logo'>
                            <Link href="/">
                                <img
                                    src="/assets/img/logo.png"
                                    width={100}
                                    height={30}
                                    alt="Company Logo"
                                />
                            </Link>
                        </div>

                        <ul className='d-flex gap-4 m-0 align-items-center'>
                            <li
                                className='list-style-none bars-icon'
                                onClick={() => setMenu(true)}
                            >
                                <i className="fa-solid fa-bars d-lg-none"></i>
                            </li>
                            <li className='list-style-none home-link py-4'>
                                <Link className='text-decoration fs-14 text-dark fw-bold' href="#">
                                    Services
                                </Link>
                                <div className={`home-dropdown ${menu ? 'show-mobile' : ''}`}>
                                    <i
                                        className="fa-solid fa-xmark close-icon d-md-none text-white"
                                        onClick={() => setMenu(false)}
                                    ></i>
                                    <div className="d-sm-flex d-block justify-content-between">
                                        <div>
                                            <ul className='m-0 p-0'>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="#">
                                                        <img src="/assets/img/online-pet-shop.png" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>online pet shop</span>
                                                    </Link>
                                                </li>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="/GroomingPet">
                                                        <img src="/assets/img/IMG_gromming-01.PNG" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>pet gromming</span>
                                                    </Link>
                                                </li>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="/PetBoarding">
                                                        <img src="/assets/img/pet-boarding-and-creche.PNG" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>pet boarding & creche</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className='m-0 p-0'>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="/PetTransportation">
                                                        <img src="/assets/img/pet-transportation.PNG" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation' >pet transportation </span>
                                                    </Link>
                                                </li>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="/DogTraining">
                                                        <img src="/assets/img/Behaviour-training-icon.PNG" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>behavioural training at creche</span>
                                                    </Link>
                                                </li>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="/PetRelocation">
                                                        <img src="/assets/img/pet-relocation.PNG" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>pet relocation</span>
                                                    </Link>
                                                </li>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="#">
                                                        <img src="/assets/img/puppy-party-icon.png" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>puppy party</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className='m-0 p-0'>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="/PetInsurance">
                                                        <img src="/assets/img/pet-insurance-icon.PNG" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>pet insurance</span>
                                                    </Link>
                                                </li>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="#">
                                                        <img src="/assets/img/pet-meting-icon.PNG" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>pet mating</span>
                                                    </Link>
                                                </li>
                                                {/* <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="/About">
                                                        <img src="/assets/img/about-icon.png" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>about us</span>
                                                    </Link>
                                                </li>
                                                <li className='list-style-none menu-hover-animatin my-1'>
                                                    <Link className='text-decoration' href="/Blog">
                                                        <img src="/assets/img/blog-icon.png" width={30} height={30}></img>
                                                        <span className='text-white fs-14 text-capitalize ps-2 menu-list-animation'>blog</span>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='list-style-none py-4 shop-link d-flex align-items-center gap-1'>
                                <Link className='text-decoration text-capitalize fs-14 text-dark fw-bold' href="/About">
                                    about
                                </Link>
                            </li>
                            <li className='list-style-none py-4 shop-link d-flex align-items-center gap-1'>
                                <Link className='text-decoration text-capitalize fs-14 text-dark fw-bold' href="/Blog">
                                    blog
                                </Link>
                            </li>
                            <li className='list-style-none py-4 shop-link d-flex align-items-center gap-1'>
                                <Link className='text-decoration text-capitalize fs-14 text-dark fw-bold' href="#">
                                    contact
                                </Link>
                            </li>
                        </ul>
                        <div className='d-none d-lg-block'>
                             <button className='bg-dark text-white border-0 custom-round-btn'>
                                <i className="fa-solid fa-bars-staggered"/>
                             </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
