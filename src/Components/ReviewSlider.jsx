import React from 'react'
import '../ComponentsStyle/ReviewSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const ReviewSlider = () => { 
    const PrevArrow = ({ onClick }) => {
        return <button className="custom-arrow custom-prev" onClick={onClick}><i className="fa-solid fa-arrow-left"></i></button>;
      };
    const NextArrow = ({ onClick }) => {
        return <button className="custom-arrow custom-next" onClick={onClick}><i className="fa-solid fa-arrow-right"></i></button>;
      };

      
        const settings = {
          dots: false,          
          infinite: true,      
          speed: 500,          
          slidesToShow: 1,      
          slidesToScroll: 1,   
          autoplay: true,       
          autoplaySpeed: 2000, 
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />
          
        };

        const ReviwArr = [
            {description : 'I absolutely love Woofie-Do! Their team is so kind and caring, and they really understand what pets need. My dog always comes back happy and relaxed after their grooming sessions. Highly recommend for anyone looking for quality pet care!', imges : "/assets/img/ReviewImgOne.png", name : 'jenny smith', department  : 'art director'},
            {description : 'Woofie-Do provides excellent pet services! From dog walking to daycare, they’re reliable and always treat my pet like family. The staff is friendly and professional, and I feel confident leaving my pet in their care. Definitely my go-to for all pet needs!', imges : "/assets/img/ReviewImgTwo.png", name : 'ryan taylor', department  : 'copy writer'},
            {description : 'Great experience with Woofie-Do! The team is attentive and responsive, and they truly care about the well-being of every pet. Their services are affordable and flexible, which is perfect for busy pet parents. Would recommend to anyone wanting the best for their furry friends!', imges : "/assets/img/ReviewImgThree.png",  name : 'ashley perez', department  : 'evnet planner'},
        ]
  return (
    <>
      <div className='overflow-hidden slick-slider-custom container-fluid'>
          <Slider className='review-main-conatiner mb-5' {...settings}>
              {
                ReviwArr.map((ReviwValue, index)=>(
                <div key={index} className='d-flex align-items-sm-center'>
                    <div>
                         <p className='font-size-silder-hedding'>{ReviwValue.description}</p>
                         <div className='d-flex align-items-center mt-4 gap-4'>
                             <div className='rounded-carcel-custom'>
                                <img src={ReviwValue.imges} alt="" />
                             </div>
                             <div>
                                 <h5 className='m-0'>{ReviwValue.name}</h5>
                                 <p>{ReviwValue.department}</p>
                             </div>
                         </div>
                    </div>
                </div>
                ))
              }
          </Slider>
      </div>
    </>
  )
}

export default ReviewSlider