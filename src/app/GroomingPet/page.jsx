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
    const [activeService, setActiveService] = useState("house sitting");
    const [activeTime, setActiveTime] = useState("");


    // ✅ INIT EMAILJS (ONLY ONCE)
    useEffect(() => {
        emailjs.init("CDbRZrcgQmiWf9ex9"); // ✅ PUBLIC KEY
    }, []);

    const handleServiceClick = (service) => {
        setActiveService(service);
    };
    const handleTimeClick = (time) => {
        setActiveTime(time);
    };

    const buildDetails = (data) => {
        let details = "";

        if (data.petTypesCombined)
            details += `Pets: ${data.petTypesCombined}\n`;

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

        // PET TYPES
        const petTypes = formData.getAll("petType");
        if (petTypes.length === 0) {
            toast.error("Please select at least Dog or Cat.");
            return;
        }

        // FORM DATA OBJECT
        const dataObj = Object.fromEntries(formData.entries());
        dataObj.petTypesCombined = petTypes.join(", ");

        // BUILD DETAILS
        const details = buildDetails(dataObj);

        // SEND EMAIL
        emailjs
            .send(
                "service_yae6dcr",      // SERVICE ID
                "template_s4hyifc",     // ONE COMMON TEMPLATE
                {
                    name: dataObj.user_email,
                    service: "Pet Grooming", // yahan page wise change hoga
                    details: details,
                }
            )
            .then(() => {
                toast.success("Appointment sent successfully!");
                formEl.reset();
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                toast.error("Email failed");
            });
    };




    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     const formEl = form.current;
    //     if (!formEl) return;

    //     const formData = new FormData(formEl);
    //     const petTypes = formData.getAll("petType");

    //     if (petTypes.length === 0) {
    //         toast.error("Please select at least Dog or Cat.");
    //         return;
    //     }

    //     // ✅ SET HIDDEN INPUT VALUE (NO ERROR NOW)
    //     formEl.petTypesCombined.value = petTypes.join(", ");

    //     emailjs
    //         .sendForm(
    //             "service_c79177m",      // ✅ SERVICE ID
    //             "template_bj4xo6k",     // ✅ TEMPLATE ID (APPOINTMENT TEMPLATE)
    //             formEl
    //         )
    //         .then(() => {
    //             toast.success("Appointment sent successfully!");
    //             formEl.reset();
    //             setActiveService("house sitting");
    //         })
    //         .catch((error) => {
    //             console.error("EmailJS error:", error);
    //             toast.error("Email failed. Check template variables.");
    //         });
    // };

    return (
        <>
            <Navbar />

            <section className="appointmentBg mt-100">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="d-md-flex d-block justify-content-between align-items-center"
                >
                    {/* ✅ REQUIRED HIDDEN INPUT */}
                    {/* <input type="hidden" name="petTypesCombined" /> */}
                    {/* <input type="hidden" name="service" value="Pet Grooming" /> */}
                    <input type="hidden" name="petTypesCombined" />



                    <div className="LeftSildeBg"></div>

                    <div className="RightSideBg pe-lg-5">
                        <div className="d-flex align-items-center pt-4 mb-2">
                            <button type="button" className="border-rounded-50 border-0 main-bg">
                                <i className="fa-solid fa-dog text-white"></i>
                            </button>
                            {/* <span className="ps-2 text-white">Trusted Dog Walker</span> */}
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

                            <div className="d-sm-flex d-block gap-3">
                                {[
                                    "goorming",
                                ].map((service, index) => (
                                    <label
                                        key={service}
                                        className={`customBorderInput w-100 mb-2 ${activeService === service ? "active" : ""
                                            }`}
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        <input
                                            type="radio"
                                            name="service"
                                            value={service}
                                            hidden
                                            defaultChecked={index === 0}
                                        />
                                        <img
                                            src={`/assets/img/input-svg-${index + 1}.svg`}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <p className="font-size-small text-capitalize">
                                            {service}
                                        </p>
                                    </label>
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
                                        className={`w-100 py-2 rounded-5 text-center me-2 my-2 customBorderInput ${activeTime === time ? "active" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="time"
                                            value={time}
                                            hidden
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
