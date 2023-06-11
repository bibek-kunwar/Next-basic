"use client"
import React from 'react';
import Slider from 'react-slick';

const Sliderpage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px', // Adjust the value as needed
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    cssEase: 'linear', // Set CSS easing for the autoplay animation
   
  };

  return (
    <>
      <section className="product-slider-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div
                className="section-title-wrapper"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <h2>Our Popular Products</h2>
                <p>Karmacharya Offer a wide range of bakery and food products.</p>
              </div>
              <Slider {...settings}>
                <div className="product-wrapper">
                  <img src="./Biscuits.png" alt="" />
                </div>
                <div className="product-wrapper">
                  <img src="./chocolate.png" alt="" />
                </div>
                <div className="product-wrapper">
                  <img src="./digestive-biscuits.png" alt="" />
                </div>
                <div className="product-wrapper">
                  <img src="./digestive-logo.png" alt="" />
                </div>
                <div className="product-wrapper">
                  <img src="./digestive.jpg" alt="" />
                </div>
                <div className="product-wrapper">
                  <img src="./packs-digestive.png" alt="" />
                </div>
                <div className="product-wrapper">
                  <img src="./sugarfree-packs.png" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sliderpage;
