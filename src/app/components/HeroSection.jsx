import React from 'react';

const HeroSection = ({ myData }) => {
  if (!myData) {
    return null; // or handle the case when myData is undefined
  }

  const { image, title, desc } = myData;

  return (
    <section className="faq-hero-banner innerpage-hero-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title-wrapper" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="1000">
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
