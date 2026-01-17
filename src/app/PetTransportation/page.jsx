// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import "../PetTransportation/PetTransportation.css"
// import Navbar from '@/Components/Navbar'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "@/Components/Footer";

// const page = () => {
//     const form = useRef(null);
//     const [activeService, setActiveService] = useState("house sitting");
//     const [activeTime, setActiveTime] = useState("");


//     // ✅ INIT EMAILJS (ONLY ONCE)
//     useEffect(() => {
//         emailjs.init("1mMWOQDnI_7Po7ECK"); // ✅ PUBLIC KEY
//     }, []);

//     const handleServiceClick = (service) => {
//         setActiveService(service);
//     };
//     const handleTimeClick = (time) => {
//         setActiveTime(time);
//     };

//     const sendEmail = (e) => {
//         e.preventDefault();

//         const formEl = form.current;
//         if (!formEl) return;

//         const formData = new FormData(formEl);
//         const petTypes = formData.getAll("petType");

//         if (petTypes.length === 0) {
//             toast.error("Please select at least Dog or Cat.");
//             return;
//         }

//         // ✅ SET HIDDEN INPUT VALUE (NO ERROR NOW)
//         formEl.petTypesCombined.value = petTypes.join(", ");

//         emailjs
//             .sendForm(
//                 "service_c79177m",      // ✅ SERVICE ID
//                 "template_xgixnta",     // ✅ TEMPLATE ID (APPOINTMENT TEMPLATE)
//                 formEl
//             )
//             .then(() => {
//                 toast.success("Appointment sent successfully!");
//                 formEl.reset();
//                 setActiveService("house sitting");
//             })
//             .catch((error) => {
//                 console.error("EmailJS error:", error);
//                 toast.error("Email failed. Check template variables.");
//             });
//     };
//     return (
//         <>
//             <Navbar />
//             <section className="appointmentBg  mt-100 pt-sm-0 pt-3 ">
//                 <form
//                     ref={form}
//                     onSubmit={sendEmail}
//                     className=" d-sm-flex d-block justify-content-between align-items-center"
//                 >
//                     {/* ✅ REQUIRED HIDDEN INPUT */}
//                     <input type="hidden" name="petTypesCombined" />

//                     <div className="LeftSildeBg">
//                         <div className="mx-md-4">
//                             <h2 className="text-white fw-bold fs-3 text-center">Move Your Pet with 100% Safety, Trust & Global Expertise.</h2>
//                             <p className="text-white fs-14 text-capitalize text-center">Because they're family, we treat their journey with care, safetynd heart.</p>
//                         </div>
//                     </div>

//                     <div className="RightSideBg pe-lg-5 pt-5">
//                         <div className="customBgImgWarpper ms-3">
//                             <p className=" fs-5 fw-bold m-0 pb-2 ">
//                                 Start Your Pet's Journey
//                             </p>

//                             <p className="font-size-small m-0 pb-2">
//                                 Fill in the details to get a free quote for pet relocation
//                             </p>
//                             <div className=" d-sm-flex d-block justify-content-between align-items-center gap-2 ">
//                                 <div className="pet-tranportion-width">
//                                     <label className="font-size-small text-capitalize">name</label>
//                                     <input
//                                         className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
//                                         type="text"
//                                         name="name"
//                                         placeholder="name"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="pet-tranportion-width">
//                                     <label className="font-size-small text-capitalize">Email id</label>
//                                     <input
//                                         className="w-100 py-2 rounded-5 BorderCustom customBorderInputs "
//                                         type="email"
//                                         name="user_email"
//                                         placeholder="abc@gmai.com"
//                                         required
//                                     />

//                                 </div>
//                             </div>

//                             <div className="d-sm-flex d-block justify-content-between align-items-center gap-2">
//                                 <div className="pet-tranportion-width">
//                                     <label className="font-size-small text-capitalize">phone Number</label>
//                                     <input
//                                         className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
//                                         type="number"
//                                         name="phone"
//                                         placeholder="+91"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="pet-tranportion-width">
//                                     <label className="font-size-small text-capitalize"> alternate Number</label>
//                                     <input
//                                         className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
//                                         type="number"
//                                         name="alternate-phone"
//                                         placeholder="+91"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div className="d-sm-flex d-block justify-content-between align-items-center gap-2">
//                                 <div className="pet-tranportion-width">
//                                     <label className="font-size-small text-capitalize">pickup address</label>
//                                     <input
//                                         className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
//                                         type="text"
//                                         name="pickup-address"
//                                         placeholder="enter pickup address"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="pet-tranportion-width">
//                                     <label className="font-size-small text-capitalize">destination city</label>
//                                     <input
//                                         className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
//                                         type="text"
//                                         name="destination-citys"
//                                         placeholder="destination city"
//                                         required
//                                     />
//                                 </div>

//                             </div>

//                             <div className="d-sm-flex d-block justify-content-between align-items-center gap-2">
//                                 <div className="pet-tranportion-width">
//                                     <label className="font-size-small text-capitalize">pet type</label>
//                                     <select className="w-100 option-border InputPlaceholders" name="pet_type" required>
//                                         <option value="">Select pet</option>
//                                         <option value="Dog">Dog</option>
//                                         <option value="Cat">Cat</option>
//                                     </select>
//                                 </div>
//                                 <div className="pet-tranportion-width">

//                                     <label className="font-size-small text-capitalize">pet name</label>
//                                     <input
//                                         className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
//                                         type="text"
//                                         name="destination-citys"
//                                         placeholder="pet name"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                        <div className="text-center">
//                              <button
//                                 type="submit"
//                                 className="mt-3 w-75  main-bg text-white px-3 py-2 border-0 rounded-4"
//                             >
//                                 Submit
//                             </button>
//                        </div>
//                         </div>
//                     </div>
//                 </form>
//             </section>

//             <ToastContainer position="top-right" autoClose={1000} theme="colored" />
//             <Footer />
//         </>
//     )
// }

// export default page




























"use client";

import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../PetTransportation/PetTransportation.css";
import Navbar from "@/Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/Components/Footer";

const page = () => {
  const form = useRef(null);

  // ✅ INIT EMAILJS
  useEffect(() => {
    emailjs.init("1mMWOQDnI_7Po7ECK");
  }, []);
 
  const buildDetails = (data) => {
    let details = "";

    if (data.petTypesCombined) details += `Pets: ${data.petTypesCombined}\n`;
    if (data.pet_type) details += `Pet Type: ${data.pet_type}\n`;
    if (data.pet_name) details += `Pet Name: ${data.pet_name}\n`;

    if (data.pickup_address) details += `Pickup Address: ${data.pickup_address}\n`;
    if (data.destination_city) details += `Destination City: ${data.destination_city}\n`;

    if (data.address) details += `Address: ${data.address}\n`;
    if (data.phone) details += `Phone: ${data.phone}\n`;
    if (data.alternate_phone) details += `Alternate Phone: ${data.alternate_phone}\n`;

    if (data.date) details += `Date: ${data.date}\n`;
    if (data.time) details += `Time: ${data.time}\n`;

    if (data.dogs !== undefined) details += `Dogs: ${data.dogs}\n`;
    if (data.cats !== undefined) details += `Cats: ${data.cats}\n`;

    if (data.user_email) details += `Email: ${data.user_email}\n`;

    return details.trim();
  };

 
  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);

    // checkbox pets (optional)
    const petTypes = formData.getAll("petType");
    if (petTypes.length > 0) {
      formData.append("petTypesCombined", petTypes.join(", "));
    }

    const dataObj = Object.fromEntries(formData.entries());
    const details = buildDetails(dataObj);

    emailjs
      .send(
        "service_c79177m",      // SERVICE ID
        "template_bj4xo6k",     // ✅ ONE TEMPLATE ONLY
        {
          name: dataObj.user_email || "New User",
          service: dataObj.service,   // grooming / transportation / boarding
          details: details,           // 🔥 ALL DATA HERE
        }
      )
      .then(() => {
        toast.success("Form sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Email failed");
      });
  };

 
  return (
    <>
      <Navbar />

      <section className="appointmentBackground mt-100 pt-sm-0 pt-3">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-sm-flex d-block justify-content-between align-items-center"
        >
          {/* ✅ REQUIRED FOR EMAIL SUBJECT */}
          <input type="hidden" name="service" value="Pet transportation" />

          <div className="LeftSildeBg">
            <div className="mx-md-4">
              <h2 className="text-white fw-bold fs-3 text-center">
                Move Your Pet with 100% Safety, Trust & Global Expertise.
              </h2>
              <p className="text-white fs-14 text-capitalize text-center">
                Because they're family, we treat their journey with care, safety and heart.
              </p>
            </div>
          </div>

          <div className="RightSideBg pe-lg-5 pt-5">
            <div className="customBgImgWarpper ms-3">

              <p className="fs-5 fw-bold m-0 pb-2">Start Your Pet's Journey</p>
              <p className="font-size-small m-0 pb-2">
                Fill in the details to get a free quote for pet relocation
              </p>

              {/* NAME + EMAIL */}
              <div className="d-sm-flex d-block gap-2">
                <div className="pet-tranportion-width">
                  <label className="font-size-small">Name</label>
                  <input
                    className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="pet-tranportion-width">
                  <label className="font-size-small">Email</label>
                  <input
                    className="w-100 py-2 rounded-5 BorderCustom customBorderInput"
                    type="email"
                    name="user_email"
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>
              </div>

              {/* PHONE */}
              <div className="d-sm-flex d-block gap-2">
                <div className="pet-tranportion-width">
                  <label className="font-size-small">Phone Number</label>
                  <input
                    className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
                    type="text"
                    name="phone"
                    placeholder="+91"
                    required
                  />
                </div>

                <div className="pet-tranportion-width">
                  <label className="font-size-small">Alternate Number</label>
                  <input
                    className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
                    type="text"
                    name="alternate_phone"
                    placeholder="+91"
                  />
                </div>
              </div>

              {/* ADDRESS */}
              <div className="d-sm-flex d-block gap-2">
                <div className="pet-tranportion-width">
                  <label className="font-size-small">Pickup Address</label>
                  <input
                    className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
                    type="text"
                    name="pickup_address"
                    placeholder="Pickup address"
                    required
                  />
                </div>

                <div className="pet-tranportion-width">
                  <label className="font-size-small">Destination City</label>
                  <input
                    className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
                    type="text"
                    name="destination_city"
                    placeholder="Destination city"
                    required
                  />
                </div>
              </div>

              {/* PET */}
              <div className="d-sm-flex d-block gap-2">
                <div className="pet-tranportion-width">
                  <label className="font-size-small">Pet Type</label>
                  <select
                    className="w-100 option-border InputPlaceholders"
                    name="pet_type"
                    required
                  >
                    <option value="">Select pet</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                  </select>
                </div>

                <div className="pet-tranportion-width">
                  <label className="font-size-small">Pet Name</label>
                  <input
                    className="w-100 py-2 rounded-5 BorderCustom customBorderInput InputPlaceholders"
                    type="text"
                    name="pet_name"
                    placeholder="Pet name"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="mt-3 w-75 main-bg text-white px-3 py-2 border-0 rounded-4"
                >
                  Submit
                </button>
              </div>

            </div>
          </div>
        </form>
      </section>

      <ToastContainer position="top-right" autoClose={1000} theme="colored" />
      <Footer />
    </>
  );
};

export default page;
