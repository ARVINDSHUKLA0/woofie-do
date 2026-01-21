"use client";

import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../DogTraining/DogTraining.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
    const [services, setServices] = useState([]);
    const [location, setLocation] = useState("");
    const [breed, setBreed] = useState("");

    // ✅ EMAILJS INIT
    useEffect(() => {
        emailjs.init("CDbRZrcgQmiWf9ex9"); // public key
    }, []);

    const toggleService = (service) => {
        setServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    // ✅ DETAILS BUILDER (same pattern as other pages)
    const buildDetails = () => {
        let details = "";

        if (services.length)
            details += `Training Services: ${services.join(", ")}\n`;
        if (location) details += `Location: ${location}\n`;
        if (breed) details += `Dog Breed: ${breed}\n`;

        return details.trim();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ❌ VALIDATIONS
        if (services.length === 0) {
            toast.error("Please select at least one training service");
            return;
        }
        if (!location) {
            toast.error("Please enter your location");
            return;
        }
        if (!breed) {
            toast.error("Please select dog breed");
            return;
        }

        const details = buildDetails();

        // ✅ EMAIL SEND (SAME TEMPLATE)
        emailjs
            .send(
                "service_yae6dcr",      // SERVICE ID
                "template_s4hyifc",     // ONE COMMON TEMPLATE
                {
                    name: "Dog Training User",
                    service: "Dog Training",
                    details,
                }
            )
            .then(() => {
                toast.success("Dog Training request sent!");
                setServices([]);
                setLocation("");
                setBreed("");
            })
            .catch((err) => {
                console.error(err);
                toast.error("Email failed");
            });
    };

    return (
        <>
            <Navbar />

            <section className="mt-100 bordering-postion">
                <div className="border-bg-imges">
                    <img
                        src="/assets/img/pet-boarding-top.png"
                        className="img-fluid w-100"
                        alt="Dog Training"
                    />
                </div>

                <div className="boardingBg py-5">
                    <div className="container tabWrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-0 custom-bordering me-2">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
                                    <button type="button" className="tabBtn w-100 text-capitalize">
                                        board & train <br />
                                        <small>At Trainer's Facility</small>
                                    </button>
                                </div>
                            </div>

                            <div className="formCard pt-3">
                                <div className="serviceWrapperr">
                                    <div className="row">
                                        {[
                                            "Puppy Training",
                                            "Basic Obedience Training",
                                            "Advanced Obedience Training",
                                            "Agility Training",
                                            "Therapy Dog Training",
                                            "Group Training Classes",
                                        ].map((item) => (
                                            <div key={item} className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
                                                <div
                                                    className={`serviceCard ${services.includes(item) ? "active" : ""
                                                        }`}
                                                    onClick={() => toggleService(item)}
                                                >
                                                    <span className="checkbox">
                                                        {services.includes(item) && "✓"}
                                                    </span>
                                                    <div>
                                                        <p className="fs-16 fw-bold m-0">{item}</p>
                                                        <p className="fs-14 m-0">
                                                            Professional training service
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="row my-3">
                                    <div className="col-lg-6 mb-3">
                                        <label className="font-size-small text-capitalize">your location ?</label>
                                        <input
                                            className="form-control"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            placeholder="Search Your Locality"
                                        />
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <label className="font-size-small text-capitalize">
                                            your dog's breed ?
                                        </label>
                                        <select
                                            className="w-100 py-2"
                                            value={breed}
                                            onChange={(e) => setBreed(e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option value="Dog">Dog</option>
                                            <option value="Cat">Cat</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-lg-4">
                                        <button type="submit" className=" border-0 py-1 rounded-2 searchBtn w-100">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <ToastContainer position="top-right" autoClose={1500} theme="colored" />
            <Footer />
        </>
    );
};

export default Page;
