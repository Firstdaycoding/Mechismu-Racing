import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cars } from '../../data/cars';
import CarSelector from './CarSelector';
import CarHero from './CarHero';
import CarStats from './CarStats';
import CarOverview from './CarOverview';
import CarDomains from './CarDomains';
import CarSpecs from './CarSpecs';
import CarGallery from './CarGallery';
import CarTimeline from './CarTimeline';
import './Cars.css';

export default function CarPage() {
  const [activeCar, setActiveCar] = useState(cars[0]);
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll to top and animate in the new content whenever the car changes
    window.scrollTo(0, 0);
    
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [activeCar]);

  return (
    <div className="cars-page">
      {/* Background Elements */}
      <div className="cars-bg">
        <div className="cars-bg__carbon"></div>
        <div className="cars-bg__grid"></div>
        <div className="cars-bg__glow cars-bg__glow--1"></div>
        <div className="cars-bg__glow cars-bg__glow--2"></div>
      </div>

      <div className="cars-container">
        {/* Horizontal Scrollable Selector */}
        <CarSelector 
          cars={cars} 
          activeCar={activeCar} 
          onSelect={setActiveCar} 
        />
        
        {/* Main Content Area (Animated on change) */}
        <div ref={contentRef}>
          <CarHero car={activeCar} />
          
          <CarStats stats={activeCar.stats} />
          
          <CarOverview overview={activeCar.overview} />
          
          <CarDomains domains={activeCar.domains} />
          
          <CarSpecs specs={activeCar.specs} />
          
          <CarGallery images={activeCar.images} />
          
          <CarTimeline timeline={activeCar.timeline} />
        </div>
      </div>
    </div>
  );
}
