"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../GroomingPet/GroomingPet.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const Page = () => {
    const form = useRef(null);
    const [activeService, setActiveService] = useState("");
    const [activeTime, setActiveTime] = useState("");

    useEffect(() => {
        emailjs.init("CDbRZrcgQmiWf9ex9");
    }, []);

    const buildDetails = (data) => {
        let details = "";

        if (data.petTypesCombined)
            details += `Pets: ${data.petTypesCombined}\n`;

        if (data.service)
            details += `Service: ${data.service}\n`;

        if (data.address)
            details += `Address: ${data.address}\n`;

        if (data.phone)
            details += `Phone: ${data.phone}\n`;

        if (data.date)
            details += `Date: ${data.date}\n`;

        if (data.time)
            details += `Time: ${data.time}\n`;

        if (data.user_email)
            details += `Email: ${data.user_email}\n`;

        return details.trim();
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formEl = form.current;
        if (!formEl) return;

        const formData = new FormData(formEl);

        const petTypes = formData.getAll("petType");
        if (petTypes.length === 0) {
            toast.error("Please select at least Dog or Cat.");
            return;
        }

        if (!formData.get("service")) {
            toast.error("Please select a service.");
            return;
        }

        const dataObj = Object.fromEntries(formData.entries());
        dataObj.petTypesCombined = petTypes.join(", ");

        const details = buildDetails(dataObj);

        emailjs
            .send(
                "service_yae6dcr",
                "template_s4hyifc",
                {
                    name: dataObj.user_email,
                    service: dataObj.service,
                    details: details,
                }
            )
            .then(() => {
                toast.success("Appointment sent successfully!");
                formEl.reset();
                setActiveService("");
                setActiveTime("");
            })
            .catch(() => {
                toast.error("Email failed");
            });
    };
    const handleServiceClick = (service) => {
        setActiveService(service);
    };

    const handleTimeClick = (time) => {
        setActiveTime(time);
    };

    const services = [
        { id: 1, name: "Safe & loving boarding and creche", icon: "/assets/img/petBoradingicon.webp" },
        { id: 2, name: "Gentle, expert grooming", icon: "/assets/img/IMG_gromming-01.webp" },
        { id: 3, name: "Stress-free pet transportation", icon: "/assets/img/pet-transportation.webp" },
        { id: 4, name: "Positive behaviour training", icon: "/assets/img/Behaviour-training-icon.webp" },
        { id: 5, name: "End-to-end pet relocation", icon: "/assets/img/pet-relocation.webp" },
        { id: 6, name: "Smart pet insurance solutions", icon: "/assets/img/pet-insurance-icon.webp" },
        { id: 7, name: "Cuddle Therapy", icon: "/assets/img/pet-insurance-icon.webp" },
        { id: 8, name: "Puppy Party", icon: "/assets/img/pet-insurance-icon.webp" },
        { id: 9, name: "Pet Adoption", icon: "/assets/img/pet-insurance-icon.webp" },
    ];

    return (
        <>
            <Navbar />

            <section className="appointmentBg mt-100">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="d-md-flex d-block justify-content-between align-items-center"
                >
                    <input type="hidden" name="petTypesCombined" />



                    <div className="LeftSildeBg"></div>

                    <div className="RightSideBg pe-lg-5">
                        <div className="d-flex align-items-center pt-4 mb-2">
                            <button type="button" className="border-rounded-50 border-0 main-bg">
                                <i className="fa-solid fa-dog text-white"></i>
                            </button>
                            <h2 className="text-white ps-3">Book Now An Appointment</h2>
                        </div>



                        <div className="customBgImgWarpper ms-3">
                            <p className="font-size-small">
                                I'm looking for service for my:
                            </p>

                            <label className="me-3">
                                <input type="checkbox" name="petType" value="Dog" /> Dog
                            </label>
                            <label>
                                <input type="checkbox" name="petType" value="Cat" /> Cat
                            </label>

                            <p className="font-size-small mt-3">
                                What service do you need?
                            </p>
                            <div className="row m-0 p-0">
                                {services.map((service, index) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-2 p-0 px-sm-2 p-0">
                                        <label
                                            key={service.id}
                                            className={`customBorderInput d-flex w-100 ${activeService === service.name ? "active" : ""
                                                }`}
                                            onClick={() => handleServiceClick(service.name)}
                                        >
                                            <input
                                                type="radio"
                                                name="service"
                                                value={service.name}
                                                hidden
                                                checked={activeService === service.name}
                                                readOnly
                                            />


                                            <img
                                                src={service.icon}
                                                width={30}
                                                height={30}
                                                alt={service.name}
                                            />

                                            <p className="font-size-small text-capitalize m-0 py-2 ps-2">
                                                {service.name}
                                            </p>
                                        </label>
                                    </div>
                                ))}
                            </div>


                            <label className="font-size-small">What's your Location?</label>
                            <input
                                className="w-100 py-2 rounded-5 BorderCustom"
                                type="text"
                                name="address"
                                required
                            />
                            <label className="font-size-small">Your Email</label>
                            <input
                                className="w-100 py-2 rounded-5 BorderCustom"
                                type="email"
                                name="user_email"
                                required
                            />


                            <label className="font-size-small">What's your Number?</label>
                            <input
                                className="w-100 py-2 rounded-5 BorderCustom"
                                type="text"
                                name="phone"
                                required
                            />

                            <label className="font-size-small mt-2">Which date?</label>
                            <input
                                type="date"
                                name="date"
                                className="w-100 py-2 rounded-5 BorderCustom mb-3"
                                required
                            />

                            <label className="font-size-small">Which time?</label>
                            <div className="d-sm-flex d-block gap-2">
                                {["6am-11am", "11am-3pm", "3pm-6pm"].map((time) => (
                                    <label
                                        key={time}
                                        onClick={() => handleTimeClick(time)}
                                        className={`w-100 p rounded-5 text-center  customBorderInputTime my-2 py-2 ${activeTime === time ? "active" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="time"
                                            value={time}
                                            hidden
                                            checked={activeTime === time}
                                            readOnly
                                        />

                                        {time}
                                    </label>
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="mt-3 main-bg text-white px-3 py-1 border-0 rounded-4"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </section>

            <ToastContainer position="top-right" autoClose={1000} theme="colored" />
            <Footer />
        </>
    );
};

export default Page;







