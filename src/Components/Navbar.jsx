'use client';

import React, { useState } from 'react';
import '../ComponentsStyle/Navbar.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [asidebar, setAsideBar] = useState(false);
    const [menu, setMenu] = useState(false);
    const pathname = usePathname();

    const Menuitemfunc = () => {
        setMenu(!menu);
    };

    const asidebarfun = () => {
        setAsideBar(!asidebar);
    };

    const showBorderPages = ["/"];
    const hasBorder = showBorderPages.includes(pathname);

    return (
        <>
            <nav>
                <section className='container-fluid'>
                    <div className={`d-flex justify-content-between align-items-center py-lg-4 py-md-4 py-sm-3 py-3 ${hasBorder ? 'custom-bottom-border' : ''}`}>
                        <div>
                            <Link href="/">
                                <img src="/assets/img/logo.png" width={120} alt="logo" />
                            </Link>
                        </div>

                        {menu && <div onClick={Menuitemfunc} className='item-warrper-remove'></div>}

                        <div className={`menuitem ${menu ? 'open' : ''}`}>
                            <div className='d-lg-none d-block'>
                                <div className='text-end pe-1 pt-2'>
                                    <button onClick={Menuitemfunc} className='border-0 bg-white'>
                                        <i className="fa-solid fa-xmark text-end fs-3 pt-3 pe-3"></i>
                                    </button>
                                </div>
                                <div className='ps-3 py-3'>
                                    <Link href="/">
                                        <img src="/assets/img/logo.png" width={100} alt="logo" />
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
                            <button onClick={Menuitemfunc} className='bg-dark text-white border-0 custom-round-btn'>
                                <i className="fa-solid fa-bars-staggered"></i>
                            </button>
                        </div>

                        {asidebar && <div onClick={asidebarfun} className='item-warrper-remove'></div>}

                        <aside className='d-none d-lg-block'>
                            <button onClick={asidebarfun} className='bg-dark text-white border-0 custom-round-btn'>
                                <i className="fa-solid fa-bars-staggered"></i>
                            </button>
                            <div className={`asidebarOpen ${asidebar ? 'open' : ''}`}>
                                <div className='text-end'>
                                    <button onClick={asidebarfun} className='bg-white border-0 pe-4'>
                                        <i className="fa-solid fa-xmark fs-3"></i>
                                    </button>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='pt-5'>
                                        <Link href="/">
                                            <img src="/assets/img/logo.png" width={110} alt="logo" />
                                        </Link>
                                        <p className='pb-3'>
                                            Woofie-Do provides expert, gentle <br />
                                            care for your pet, offering everything <br />
                                            from routine check-ups to advanced <br />
                                            treatments to keep your furry family <br />
                                            member healthy and happy.
                                        </p>
                                        <img className='mb-4 img-fluid' src="/assets/img/PetVaccinationsImg.jpg" alt="PetVaccinationsImg" />

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
        </>
    );
};

export default Navbar;
