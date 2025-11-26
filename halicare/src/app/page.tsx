import React from 'react';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import FAQSection from "./components/FAQs";
import HeroSection from './components/HeroSection';
import OurServices from './components/OurServices';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <HeroSection/>
      <OurServices/>
      <FAQSection/>
      <ContactSection />
    </main>
   
  
  );
}