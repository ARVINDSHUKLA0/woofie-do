// "use client";
// import React, { useEffect } from "react";

// const BookingForm = () => {
//     useEffect(() => {
//         window.WidgetConfig = {
//             clientId: "69722e6a19d8c1c8737a795e",
//         };

//         if (!document.getElementById("happy-pet-widget")) {
//             const script = document.createElement("script");
//             script.id = "happy-pet-widget";
//             script.src = "https://self-booking.happypet.tech/widget.js";
//             script.async = true;
//             script.charset = "UTF-8";
//             document.body.appendChild(script);
//         }
//     }, []);

//     return ( 
//         <> 
//             <div style={{backgroundColor : "#F38020", cursor : "pointer", marginTop : "110px"}} className=" text-capitalize py-2 px-md-5 px-2 text-white text-center rounded-2" id="happy-pet-booking">
//                 booking
//             </div>  
//             </>
//     );
// };

// export default BookingForm;

































"use client";

import { useEffect, useState } from "react";

export default function BookingForm() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.WidgetConfig = {
      clientId: "69722e6a19d8c1c8737a795e",
    };

    if (!document.getElementById("happy-pet-widget")) {
      const script = document.createElement("script");
      script.id = "happy-pet-widget";
      script.src = "https://self-booking.happypet.tech/widget.js";
      script.async = true;
      script.charset = "UTF-8";

      script.onload = () => {
        // widget loaded
        setIsReady(true);
      };

      document.body.appendChild(script);
    } else {
      setIsReady(true);
    }
  }, []);

  const openWidget = () => {
    if (window.HappyPetWidget && window.HappyPetWidget.open) {
      window.HappyPetWidget.open();
    } else {
      alert("Widget abhi load ho raha hai, 1 sec wait karo");
    }
  };

  return (
    <div
      onClick={openWidget}
      style={{
        backgroundColor: "#F38020",
        cursor: "pointer",
        marginTop: "110px",
        opacity: isReady ? 1 : 0.6,
      }}
      className="text-capitalize py-2 px-md-5 px-2 text-white text-center rounded-2"
    >
      {isReady ? "booking" : "loading..."}
    </div>
  );
}
