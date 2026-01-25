
'use client';
import React, { useState } from 'react';
import '../ComponentsStyle/Navbar.css';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

    return (
        <>
            <nav className='navbar-fixed position-relative py-3'>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-between align-items-center'>
 
                        <div className='nav-logo'>
                            <Link href="/">
                                <img
                                    src="/assets/img/logo.webp"
                                    width={110}
                                    height={40}
                                    alt="Company Logo"
                                />
                            </Link>
                        </div>
 
                        <ul className={`nav-menu d-lg-flex d-block m-0 gap-4 m-0 p-0 align-items-center ps-2 p-sm-0 ${isMobileMenuOpen ? 'show-mobile' : ''}`}>
                            <li className='list-style-none mobile-menu-toggle d-lg-none  text-end p-3 m-0 mt-2'>
                                <i 
                                    className="fa-solid fa-xmark close-icon" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                ></i>
                            </li>
                             
                            <li className='list-style-none  py-lg-0'>
                                <Link 
                                    className='text-decoration text-capitalize fs-18 text-dark fw-bold' 
                                    href="/About"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    about
                                </Link>
                            </li>
                            <li className='list-style-none py-lg-0'>
                                <Link 
                                    className='text-decoration fs-18 text-dark fw-bold' 
                                    href="/Services"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className='list-style-none py-lg-0'>
                                <Link 
                                    className='text-decoration text-capitalize fs-18 text-dark fw-bold' 
                                    href="/blog"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    blog
                                </Link>
                            </li>
                            <li className='list-style-none py-lg-0'>
                                <Link 
                                    className='text-decoration text-capitalize fs-18 text-dark fw-bold' 
                                    href="/PuppyParty"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    PuppyParty
                                </Link>
                            </li>
                            <li className='list-style-none  py-lg-0'>
                                <Link 
                                    className='text-decoration text-capitalize fs-18 text-dark fw-bold' 
                                    href="/Contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    contact
                                </Link>
                            </li>
                        </ul>
 
                        <div className='d-lg-none'>
                            <button
                                className="bg-dark text-white border-0 custom-round-btn"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div> 
                        <div className="d-none d-lg-block">
                            <button
                                className="bg-dark text-white border-0 custom-round-btn"
                                onClick={() => setIsRightPanelOpen(true)}
                            >
                                <i className="fa-solid fa-bars-staggered" />
                            </button>
                        </div> 
                        {isRightPanelOpen && (
                            <div className="overlay" onClick={() => setIsRightPanelOpen(false)} />
                        )} 
                        <div className={`right-panel px-3 ${isRightPanelOpen ? "open" : ""}`}>
                            <div className='text-end fs-4 py-2'>
                                <button className="close-btn text-dark" onClick={() => setIsRightPanelOpen(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>

                            <div className="p-3">
                                <div>
                                    <img src='/assets/img/logo.webp' width={100} height={30} alt="Logo" />
                                </div>
                                <div>
                                    <p className='py-2 pe-md-5 pe-0'>
                                        Woofie-Do provides expert, gentle care for your pet, 
                                        offering everything from routine check-ups to advanced 
                                        treatments to keep your furry family member healthy and happy.
                                    </p>
                                    <div>
                                        <img className='img-fluid' src="/assets/img/banner1.webp" alt="Banner" />
                                    </div>
                                    <div>
                                        <p className='m-0'>C 25, Sector 26, Noida, Uttar Pradesh 201301</p>
                                        <p className='fw-bold'>care@woofieDo.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;