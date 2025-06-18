'use client';
import { useEffect, useRef, useState } from "react";
import '../ComponentsStyle/ServiceScrollSlider.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceScrollSlider() {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);
    const textRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const marginArr = ['0px', '-60px', '-120px']

    const dataArr = [
    
        {
            title: "Pet Vaccination",
            description: "We provide personalized vaccination plans for your pet based on age, lifestyle, and risk, following WSAVA guidelines to protect against serious diseases."
        },
        {
            title: "Pet Grooming",
            description: "Professional grooming keeps your pet clean, healthy, and comfortable. We offer baths, trims, nail clipping, and more in a stress-free setting. Regular grooming prevents skin issues and matting."
        },
        {
            title: "In-House Diagnostics",
            description: "Our advanced in-house diagnostics—blood tests, X-rays, ultrasound, and more—provide fast, accurate results, helping us quickly diagnose and treat your pet, often during the same visit."
        },
        {
            title: "Pet Food & Diet Consultation",
            description: "Our vets provide expert diet guidance tailored to your pet's needs, supporting weight, allergies, and health to keep them strong and energetic."
        },
        {
            title: "Pet IPD (In-Patient Department / Hospitalization)",
            description: "Our In-Patient Department offers 24/7 care and monitoring in a comfortable setting, ensuring your pet gets expert attention for recovery."
        },
        {
            title: " Pet Cremation",
            description: "We provide compassionate pet cremation services with respectful individual or communal options, honoring your pet with care and dignity."
        },
        {
            title: "Pet Registration",
            description: "We help with pet registration to ensure your pet's safety, ID, and compliance with local rules for easier reunification if lost."
        },
        {
            title: "Consultation",
            description: "Our vets provide expert advice and personalized care for your pet's health, behavior, and well-being in every consultation."
        },
        {
            title: "24x7 Emergency Services",
            description: "We offer 24/7 emergency vet services, providing immediate expert care for sudden illnesses and accidents whenever your pet needs it."
        },
    ]

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
        const text = textRef.current;
        if (!section || !wrapper || !text) return;

        const totalScrollDistance = wrapper.scrollWidth - window.innerWidth;

        gsap.to(wrapper, {
            x: `-${totalScrollDistance}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalScrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    if (self.getVelocity() !== 0) {
                        setIsScrolling(true);
                    }
                },
            },
        });

        gsap.to(text, {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalScrollDistance}`,
                scrub: 1,
            },
        });
        let scrollTimeout;
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            ScrollTrigger.killAll();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="horizontal-scroller-wrapper">
            <section className="scroller-wrapper"
                ref={sectionRef}>
                <div className="service-text-wrapper">
                    <h2 ref={textRef} className="stroke-fill-text ">
                        service
                    </h2>
                </div>

                <div className="scroller-display"
                    ref={wrapperRef}>
                    <div className="scroll-width" ></div>
                    {dataArr.map((value, index) => (
                        <div
                            key={index}
                            className="scroll-item"
                            style={{
                                marginTop: marginArr[index % marginArr.length],
                                transform: `scale(${isScrolling ? 0.9 : 1})`,
                            }}>
                            <small className="mb-3 fw-bold">0{index + 1}</small>
                            <h4 className="service-hedding text-warp" >{value.title}</h4>
                            <p className="service-description text-warp" >{value.description}</p>
                        </div>
                    ))}
                    <div className="scoll-item-wrapper-width"></div>
                </div>
            </section>
        </div>
    );
}



