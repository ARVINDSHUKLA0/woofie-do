"use client";
import { useState } from "react";
import "../PetMating/PetMating.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function PetForm() {
    const [petType, setPetType] = useState("Cat");
    const [gender, setGender] = useState("Female");
    const [vaccinated, setVaccinated] = useState("");
    const [social, setSocial] = useState("");
    const [potty, setPotty] = useState("");
    const [aggressive, setAggressive] = useState("");

    return (
        <>
            <Navbar />
            <div className="main-pet-mating">
            <div className="pet-form mt-100 pt-100 px-2 pb-4">
                <label className="font-size-small text-capitalize">Pet’s Name?</label>
                <input placeholder="Please enter your pet's name..." />
                <label className="font-size-small text-capitalize">Pet Type?</label>
                <div className="option-row">
                    <div
                        className={`card-option ${petType === "Dog" ? "active" : ""}`}
                        onClick={() => setPetType("Dog")}
                    >
                        🐶
                        <span>Dog</span>
                    </div>

                    <div
                        className={`card-option ${petType === "Cat" ? "active" : ""}`}
                        onClick={() => setPetType("Cat")}
                    >
                        🐱
                        <span>Cat</span>
                    </div>
                </div>

                <label className="font-size-small text-capitalize">Pet Breed?</label>
                <select>
                    <option>Select breed here...</option>
                    <option>Labrador</option>
                    <option>German Shepherd</option>
                </select>

                <label className="font-size-small text-capitalize">Pet’s Age?</label>
                <input placeholder="Please enter your pet's age in years..." />


                <label className="font-size-small text-capitalize">Pet’s Weight?</label>
                <input placeholder="Please enter your pet's weight in KG..." />


                <label className="font-size-small text-capitalize">Pet’s Gender?</label>
                <div className="option-row">
                    <button
                        className={gender === "Male" ? "active" : ""}
                        onClick={() => setGender("Male")}
                    >
                        Male
                    </button>
                    <button
                        className={gender === "Female" ? "active" : ""}
                        onClick={() => setGender("Female")}
                    >
                        Female
                    </button>
                </div>


                <label className="font-size-small text-capitalize" >Pet Vaccination?</label>
                <div className="option-row">
                    <button onClick={() => setVaccinated("Yes")} className={vaccinated === "Yes" ? "active" : ""}>Yes</button>
                    <button onClick={() => setVaccinated("No")} className={vaccinated === "No" ? "active" : ""}>No</button>
                </div>

                <label className="font-size-small text-capitalize">Pet Sociable?</label>
                <div className="option-row">
                    <button onClick={() => setSocial("Yes")} className={social === "Yes" ? "active" : ""}>Yes, Sociable</button>
                    <button onClick={() => setSocial("No")} className={social === "No" ? "active" : ""}>No, Not Sociable</button>
                </div>

                <label className="font-size-small text-capitalize">Pet Potty Trained?</label>
                <div className="option-row">
                    <button onClick={() => setPotty("Yes")} className={potty === "Yes" ? "active" : ""}>Yes</button>
                    <button onClick={() => setPotty("No")} className={potty === "No" ? "active" : ""}>No</button>
                </div>

                <label className="font-size-small text-capitalize">Pet Aggressive?</label>
                <div className="option-row">
                    {["Low", "Medium", "High"].map((lvl) => (
                        <button
                            key={lvl}
                            onClick={() => setAggressive(lvl)}
                            className={aggressive === lvl ? "active" : ""}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}
