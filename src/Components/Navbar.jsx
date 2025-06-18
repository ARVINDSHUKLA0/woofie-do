'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import '../ComponentsStyle/Navbar.css';

const Navbar = () => {
    const [asidebar, setAsideBar] = useState(false);
    const [menu, setMenu] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setMenu(!menu);
    const toggleAsidebar = () => setAsideBar(!asidebar);

    const showBorderPages = ["/"];
    const hasBorder = showBorderPages.includes(pathname);

    return (
        <nav>
            <section className='container-fluid'>
                <div className={`d-flex justify-content-between align-items-center py-lg-4 py-md-4 py-sm-3 py-3 ${hasBorder ? 'custom-bottom-border' : ''}`}>
                    <div>
                        <Link href="/">
                            <Image 
                                src="/assets/img/logo.png" 
                                width={120} 
                                height={40}
                                alt="Company Logo"
                                priority
                            />
                        </Link>
                    </div>

                    {menu && <div onClick={toggleMenu} className='item-warrper-remove'></div>}

                    <div className={`menuitem ${menu ? 'open' : ''}`}>
                        <div className='d-lg-none d-block'>
                            <div className='text-end pe-1 pt-2'>
                                <button 
                                    onClick={toggleMenu} 
                                    className='border-0 bg-white'
                                    aria-label="Close menu"
                                >
                                    <i className="fa-solid fa-xmark text-end fs-3 pt-3 pe-3"></i>
                                </button>
                            </div>
                            <div className='ps-3 py-3'>
                                <Link href="/">
                                    <Image 
                                        src="/assets/img/logo.png" 
                                        width={100} 
                                        height={30}
                                        alt="Company Logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <ul className="d-lg-flex m-0 p-0 gap-5">
                            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                                <Link className='text-decoration-none py-lg-5' href="/">Home</Link>
                            </li>
                            <li className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
                                <Link className='text-decoration-none py-lg-5' href="/about">About</Link>
                            </li>
                            <li className={`nav-item ${pathname === '/services' ? 'active' : ''}`}>
                                <Link className='text-decoration-none py-lg-5' href="/services">Services</Link>
                            </li>
                            <li className={`nav-item ${pathname === '/blog' ? 'active' : ''}`}>
                                <Link className='text-decoration-none py-lg-5' href="/blog">Blog</Link>
                            </li>
                            <li className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
                                <Link className='text-decoration-none' href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='d-lg-none d-block'>
                        <button 
                            onClick={toggleMenu} 
                            className='bg-dark text-white border-0 custom-round-btn'
                            aria-label="Open menu"
                        >
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>
                    </div>

                    {asidebar && <div onClick={toggleAsidebar} className='item-warrper-remove'></div>}

                    <aside className='d-none d-lg-block'>
                        <button 
                            onClick={toggleAsidebar} 
                            className='bg-dark text-white border-0 custom-round-btn'
                            aria-label="Open sidebar"
                        >
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>
                        <div className={`asidebarOpen ${asidebar ? 'open' : ''}`}>
                            <div className='text-end'>
                                <button 
                                    onClick={toggleAsidebar} 
                                    className='bg-white border-0 pe-4'
                                    aria-label="Close sidebar"
                                >
                                    <i className="fa-solid fa-xmark fs-3"></i>
                                </button>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='pt-5'>
                                    <Link href="/">
                                        <Image 
                                            src="/assets/img/logo.png" 
                                            width={110} 
                                            height={35}
                                            alt="Company Logo"
                                        />
                                    </Link>
                                    <p className='pb-3'>
                                        Woofie-Do provides expert, gentle <br />
                                        care for your pet, offering everything <br />
                                        from routine check-ups to advanced <br />
                                        treatments to keep your furry family <br />
                                        member healthy and happy.
                                    </p>
                                    <Image 
                                        className='img-fluid' 
                                        src="/assets/img/PetVaccinationsImg.jpg" 
                                        width={300}
                                        height={200}
                                        alt="Pet Vaccinations"
                                    />

                                    <div>
                                        <p>
                                            Jaipuriya Plaza, sector-26, noida <br />
                                            care@woofieDo.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;