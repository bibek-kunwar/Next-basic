import React from 'react'
import HeroSection from '../components/HeroSection'

const About = () => {
  const data = {
    image: '/karmacharya-about-hero-image.webp', // Corrected image path
    title: 'This is a about us page',
    desc: 'This simple recipe for a basic biscuit dough can be adapted to suit your tastes – experiment with different shapes and flavours.',
  };

  return (
    <>
    <HeroSection myData={data}/>
    </>
  )
}

export default About