'use client';
import React from 'react';
import '../ComponentsStyle/Footer.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='py-100'>
                    <section className='container-fluid'>
                        <div className="row m-0">
                            <div className="col-lg-5 col-sm-12 col-12 p-0">
                                <Link href="/">
                                    <img src="/assets/img/logo.png" width={150} alt="" />
                                </Link>
                                <p className='py-lg-3 fw-bold'>Woofie Do provides expert and gentle care for your beloved pet. Our comprehensive range of services, from routine check-ups to advanced treatments, ensures your furry family member always receives the highest quality veterinary attention.</p>
                            </div>

                            <div className="col-lg-2 col-sm-12 col-12 p-0 offset-lg-1">
                                <span className='text-decoration-light-weight'>
                                    <ul className='m-0 p-0'>
                                        <li className='list-style-none text-capitalize'>
                                            <span className='f-decoration-none'>Useful Links</span>
                                            <ul className='p-0'>
                                                <li className='list-style-none text-capitalize py-1'>
                                                    <Link href="/" className='text-decoration-none-one'>Home</Link>
                                                </li>
                                                <li className='list-style-none text-capitalize py-1'>
                                                    <Link href="/#about" className='text-decoration-none-one'>About</Link>
                                                </li>
                                                <li className='list-style-none text-capitalize py-1'>
                                                    <Link href="/#services" className='text-decoration-none-one'>Services</Link>
                                                </li>
                                                <li className='list-style-none text-capitalize py-1'>
                                                    <Link href="/#blog" className='text-decoration-none-one'>Blog</Link>
                                                </li>
                                                <li className='list-style-none text-capitalize py-1'>
                                                    <Link href="/#contact" className='text-decoration-none-one'>Contact us</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </span>
                            </div>

                            <div className="col-lg-2 col-sm-12 col-12 p-0">
                                <span className='text-decoration-light-weight'>
                                    <ul className='m-0 p-0'>
                                        <li className='list-style-none text-capitalize'>
                                            <span className='f-decoration-none'>Our Services</span>
                                            <ul className='p-0'>
                                                <li className='list-style-none text-capitalize py-1'>Pet Vaccination</li>
                                                <li className='list-style-none text-capitalize py-1'>Pet Grooming</li>
                                                <li className='list-style-none text-capitalize py-1'>In-House Diagnostics</li>
                                                <li className='list-style-none text-capitalize py-1'>Pet Food & Diet Consultation</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </span>
                            </div>

                            <div className="col-lg-2 col-sm-12 col-12 p-0">
                                <span className='text-decoration-light-weight'>
                                    <ul className='m-0 p-0'>
                                        <li className='list-style-none text-capitalize'>
                                            <span className='f-decoration-none'>Our Services</span>
                                            <ul className='p-0'>
                                                <li className='list-style-none text-capitalize py-1'>Pet IPD</li>
                                                <li className='list-style-none text-capitalize py-1'>Pet Cremation</li>
                                                <li className='list-style-none text-capitalize py-1'>Pet Registration</li>
                                                <li className='list-style-none text-capitalize py-1'>Consultation</li>
                                                <li className='list-style-none text-capitalize py-1'>24x7 Emergency Services</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </section>
                </div>

                <div className='d-block py-lg-5 custom-border-top p-0 ps-2 py-3 d-md-flex container-fluid justify-content-between align-items-center'>
                    <div>
                        <p className='m-0'>call our office</p>
                        <h5 className='fw-bold'>+91 9599407666</h5>
                    </div>
                    <div>
                        <p className='m-0'>send a message</p>
                        <h5 className='fw-bold'>care@woofiedo.com</h5>
                    </div>
                    <div>
                        <p className='m-0'>Address</p>
                        <h6 className='fw-bold'>Jaipuriya Plaza, sector-26, noida</h6>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
