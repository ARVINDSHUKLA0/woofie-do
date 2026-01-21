"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../PetBoarding/PetBoarding.css";
import Footer from "@/Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
    const formRef = useRef(null);
    const [activeTab, setActiveTab] = useState("overnight");
    const [dogs, setDogs] = useState(0);
    const [cats, setCats] = useState(0);
    const [dayType, setDayType] = useState("single");

    const [services, setServices] = useState({
        boarding: false,
        // hosting: true,
        // sitting: true,
    });

    const toggleService = (key) => {
        setServices({ ...services, [key]: !services[key] });
    };
    useEffect(() => {
        emailjs.init("CDbRZrcgQmiWf9ex9");
    }, []);

    const buildDetails = (data) => {
        let details = "";

        if (data.activeTab) details += `Booking Type: ${data.activeTab}\n`;
        if (data.dayType) details += `Day Type: ${data.dayType}\n`;
        if (data.services) details += `Services: ${data.services}\n`;
        if (data.location) details += `Location: ${data.location}\n`;
        if (data.start_date) details += `Start Date: ${data.start_date}\n`;
        if (data.end_date) details += `End Date: ${data.end_date}\n`;
        if (data.checkin) details += `Check-in: ${data.checkin}\n`;
        if (data.checkout) details += `Check-out: ${data.checkout}\n`;
        if (data.dogs) details += `Dogs: ${data.dogs}\n`;
        if (data.cats) details += `Cats: ${data.cats}\n`;

        return details.trim();
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        // ❌ validation
        if (dogs === 0 && cats === 0) {
            toast.error("Please add at least 1 dog or cat");
            return;
        }

        const formData = new FormData(formRef.current);
        const dataObj = Object.fromEntries(formData.entries());

        if (!dataObj.activeTab) {
            toast.error("Please select service type");
            return;
        }

        const details = buildDetails({
            ...dataObj,
            dogs,
            cats,
        });

        emailjs
            .send(
                "service_yae6dcr",      // SERVICE ID
                "template_s4hyifc",     // ONE COMMON TEMPLATE
                {
                    name: "Pet Boarding User",
                    service: "Pet Boarding",
                    details,
                }
            )
            .then(() => {
                toast.success("Request sent successfully!");
                formRef.current.reset();
                setDogs(0);
                setCats(0);
            })
            .catch(() => {
                toast.error("Email failed");
            });
    };

    return (
        <>
            <Navbar />

            <section className="mt-100 bordering-postion ">
                <div className="border-bg-imges">
                    <img
                        src="/assets/img/pet-boarding-top.png"
                        className="img-fluid w-100"
                        alt="Pet Boarding"
                    />
                </div>
                <div className="boardingBg py-5">
                    <div className="container tabWrapper">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <input type="hidden" name="activeTab" value={activeTab} />
                            <input type="hidden" name="dayType" value={dayType} />
                            <input
                                type="hidden"
                                name="services"
                                value={Object.keys(services)
                                    .filter((k) => services[k])
                                    .join(", ")}
                            />
                            <input type="hidden" name="dogs" value={dogs} />
                            <input type="hidden" name="cats" value={cats} />
                            <div className="row mb-0  custom-bordering me-2">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-0 ">
                                    <button
                                        type="button"
                                        className={`tabBtn w-100 ${activeTab === "overnight" ? "active" : ""}`}
                                        onClick={() => setActiveTab("overnight")}
                                    >
                                        Overnight <br />
                                        <small>While You're Away</small>
                                    </button>
                                </div>

                                <div className="col-3 col-md-3 col-sm-3 col-6 p-0">
                                    <button
                                        type="button"
                                        className={`tabBtn w-100 ${activeTab === "daycare" ? "active" : ""}`}
                                        onClick={() => setActiveTab("daycare")}
                                    >
                                        Daycare <br />
                                        <small>While You're at Work</small>
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="formCard pt-3 ">
                                        <div className="serviceWrapperr ">
                                            <div
                                                className={`serviceCard ${services.boarding ? "active" : ""}`}
                                                onClick={() => toggleService("boarding")}
                                            >
                                                <span className="checkbox">
                                                    {services.boarding && "✓"}
                                                </span>
                                                <div>
                                                    <h6 className="fs-16 fw-bold m-0 p-0">Pet Boarding</h6>
                                                    <p className="fs-14 m-0 p-0">At Pet Boarding Facility</p>
                                                </div>
                                            </div>
                                        </div>

                                        {activeTab === "overnight" && (
                                            <>
                                                <h5 className="my-3">Overnight Boarding</h5>

                                                <div className="row mb-3">
                                                    <div className="col-12">

                                                        <label className="font-size-small text-capitalize"> your Location?</label>
                                                        <input
                                                            name="location"
                                                            className="form-control"
                                                            placeholder="Search Your Locality"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                                        <label className="font-size-small text-capitalize"> check in date ?</label>
                                                        <input
                                                            name="start_date"
                                                            type="date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
                                                        <label className="font-size-small text-capitalize"> check out date ?</label>
                                                        <input
                                                            name="end_date"
                                                            type="date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-2">
                                                        <p className="p-0 m-0 fs-14 mb-1 text-capitalize">dogs</p>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <button
                                                                type="button"
                                                                className="counterBtn"
                                                                onClick={() => setDogs(dogs > 0 ? dogs - 1 : 0)}
                                                            >
                                                                −
                                                            </button>
                                                            <span className="counterValue">{dogs}</span>
                                                            <button
                                                                type="button"
                                                                className="counterBtn plus"
                                                                onClick={() => setDogs(dogs + 1)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-2">
                                                        <p className="p-0 m-0 fs-14 mb-1 text-capitalize">cats</p>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <button
                                                                type="button"
                                                                className="counterBtn"
                                                                onClick={() => setCats(cats > 0 ? cats - 1 : 0)}
                                                            >
                                                                −
                                                            </button>
                                                            <span className="counterValue">{cats}</span>
                                                            <button
                                                                type="button"
                                                                className="counterBtn plus"
                                                                onClick={() => setCats(cats + 1)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                                        <button type="submit" className="btn searchBtn w-100">
                                                            Search Daycare
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {activeTab === "daycare" && (
                                            <>
                                                <h5 className="my-3">Daycare Service</h5>

                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                                                        <label className="font-size-small text-capitalize"> your location ?</label>
                                                        <input
                                                            name="location"
                                                            className="form-control"
                                                            placeholder="Search Your Locality"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <label className="font-size-small text-capitalize mb-1"> How often do you need Daycare service?</label>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                                        <button
                                                            type="button"
                                                            className={`btn dayBtn w-100 ${dayType === "single" ? "active" : ""}`}
                                                            onClick={() => setDayType("single")}
                                                        >
                                                            Single Day
                                                        </button>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                                        <button
                                                            type="button"
                                                            className={`btn dayBtn w-100 ${dayType === "multiple" ? "active" : ""}`}
                                                            onClick={() => setDayType("multiple")}
                                                        >
                                                            More than one day
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mb-3">
                                                        <label className="font-size-small text-capitalize"> check in date ?</label>
                                                        <input
                                                            name="start_date"
                                                            type="date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mb-3">
                                                        <label className="font-size-small text-capitalize"> check out date ?</label>
                                                        <input
                                                            name="end_date"
                                                            type="date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mb-3">
                                                        <label className="font-size-small text-capitalize"> check in time ?</label>
                                                        <select name="checkin" className="form-control">
                                                            <option value="">Check-in Time</option>
                                                            <option value="6am-11am">6am-11am</option>
                                                            <option value="11am-3pm">11am-3pm</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mb-3">
                                                        <label className="font-size-small text-capitalize"> check out time ?</label>
                                                        <select name="checkout" className="form-control">
                                                            <option value="">Check-out Time</option>
                                                            <option value="3pm-6pm">3pm-6pm</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-2">
                                                        <p className="p-0 m-0 fs-14 mb-1 text-capitalize">dogs</p>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <button
                                                                type="button"
                                                                className="counterBtn"
                                                                onClick={() => setDogs(dogs > 0 ? dogs - 1 : 0)}
                                                            >
                                                                −
                                                            </button>
                                                            <span className="counterValue">{dogs}</span>
                                                            <button
                                                                type="button"
                                                                className="counterBtn plus"
                                                                onClick={() => setDogs(dogs + 1)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-2">
                                                        <p className="p-0 m-0 fs-14 mb-1 text-capitalize">cats</p>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <button
                                                                type="button"
                                                                className="counterBtn"
                                                                onClick={() => setCats(cats > 0 ? cats - 1 : 0)}
                                                            >
                                                                −
                                                            </button>
                                                            <span className="counterValue">{cats}</span>
                                                            <button
                                                                type="button"
                                                                className="counterBtn plus"
                                                                onClick={() => setCats(cats + 1)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                                        <button type="submit" className="btn searchBtn w-100">
                                                            Search Daycare
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )}
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
