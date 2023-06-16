import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Sliderpage from './components/Sliderpage';
import Login from './components/Login';
import HeroSection from './components/HeroSection';

export default function Home() {
  const data = {
    image: '/faq-banner.webp', // Corrected image path
    title: 'FAQ',
    desc: 'This simple recipe for a basic biscuit dough can be adapted to suit your tastes – experiment with different shapes and flavours.',
  };

  return (
    <>
      <HeroSection myData={data} />
      <Sliderpage />
      <Login />
    </>
  );
}
