'use client';
import React from 'react';
import '../ComponentsStyle/Footer.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="py-5">
                <section className="container pt-sm-4 ps-100">
                    <div className="row justify-content-between ">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <span className="f-decoration-none text-white  text-capitalize">Woofie-do</span>
                            <ul className="p-0 m-0">
                                <li className="list-style-none py-1">
                                    <Link href="/Blog" className="text-decoration-none-one text-white fs-14 text-capitalize">blog</Link>
                                </li>
                                {/* <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">support</Link>
                                </li> */}
                                <li className="list-style-none py-1">
                                    <Link href="/About" className="text-decoration-none-one text-white fs-14 text-capitalize">about us</Link>
                                </li>
                                {/* <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">buy membership</Link>
                                </li> */}
                                {/* <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">customer reviews</Link>
                                </li> */}
                            </ul>
                        </div>
 
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <span className="f-decoration-none text-capitalize text-white">home services</span>
                            <ul className="p-0 m-0">
                                <li className="list-style-none py-1">
                                    <Link href="/GroomingPet" className="text-decoration-none-one text-white fs-14 text-capitalize">Pet Boarding & creche</Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="/GroomingPet" className="text-decoration-none-one text-white fs-14 text-capitalize">Pet Grooming</Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="/GroomingPet" className="text-decoration-none-one text-white fs-14 text-capitalize">pet transportation</Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="/GroomingPet" className="text-decoration-none-one text-white fs-14 text-capitalize">behaviour training</Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="/GroomingPet" className="text-decoration-none-one text-white fs-14 text-capitalize">
                                        pet relocation (domestic & international)
                                    </Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="/PetInsurance" className="text-decoration-none-one text-white fs-14 text-capitalize">
                                        pet insurance
                                    </Link>
                                </li>
                            </ul>
                        </div>
 
                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
                            <span className="f-decoration-none text-white text-capitalize">policy</span>
                            <ul className="p-0 m-0">
                                <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">Privacy Policy</Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">Refund Policy</Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">Cancellation Policy</Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <span className="f-decoration-none text-capitalize text-white">social media </span>
                            <ul className="p-0 d-flex gap-2 m-0">
                                <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">
                                    <i className="fa-brands fa-instagram fs-4"></i>
                                    </Link>
                                </li>
                                <li className="list-style-none py-1">
                                    <Link href="#" className="text-decoration-none-one text-white fs-14 text-capitalize">
                                    <i className="fa-brands fa-youtube fs-4"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
