import React from 'react'
import '../ComponentsStyle/Banner.css'

const Banner = () => {


  const BannerArr = [
    {
      tite: " Safe & loving boarding and creche",
      BannerImg: "/assets/img/petBoradingicon.PNG",
      href: "/GroomingPet"
    },
    {
      tite: "Gentle, expert grooming",
      BannerImg: "/assets/img/petgrommingicon.PNG",
      href: "/GroomingPet"
    },
    {
      tite: "Stress-free pet transportation",
      BannerImg: "/assets/img/pettranceporticon.PNG",
      href: "/GroomingPet"
    },
    {
      tite: "Positive behaviour training",
      BannerImg: "/assets/img/Behaviour-training-icon.PNG",
      href: "/GroomingPet"
    },
    {
      tite: " End-to-end pet relocation",
      BannerImg: "/assets/img/pet-relocation.PNG",
      href: "/GroomingPet"

    },
    {
      tite: " Smart pet insurance solutions",
      BannerImg: "/assets/img/pet-insurance-icon.PNG",
      href: "/GroomingPet"
    }
  ]
  return (
    <>
      <section className='mt-100 pt-4'>
        <div className='conatiner-fluid'>
          <div className="row m-0">
            <div className="col-lg-7 col-md-8 col-sm-6 col-12">
              <div>
                <h2 className='custom-fnt-size'>Where Premium Pet Care Meets Pure Love</h2>
              </div>
              <div className='mani-box-service'>
                 <h4>Your Trusted Pet Care Partner</h4>
                 <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eaque.
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eaque.
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eaque.
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eaque.
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eaque.
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eaque.
                    </div>
                 </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-6 col-12 text-center">
              <img className='img-fluid' src="/assets/img/hd.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner