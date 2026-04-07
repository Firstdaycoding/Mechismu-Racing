import React from 'react';
import './home.css';

// ===== HOME SECTIONS =====
import HeroSection from './Hero/HeroSection';
import AboutPreview from './About/AboutPreview';
import CarsPreview from './Cars/CarsPreview';
import TeamPreview from './Team/TeamPreview';
import Achievements from './Achievements/Achievements';
import SponsorsPreview from './Sponsors/SponsorsPreview';
import ContactPreview from './Contact/ContactPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <CarsPreview />
      <TeamPreview />
      <Achievements />
      <SponsorsPreview />
      <ContactPreview />
    </>
  );
}
