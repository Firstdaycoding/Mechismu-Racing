import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import Intro from '../../components/Intro/Intro.jsx';
import Philosophy from '../../components/Philosophy/Philosophy.jsx';
import Timeline from '../../components/Timeline/Timeline.jsx';
import Domains from '../../components/Domains/Domains.jsx';
import Achievements from '../../components/Achievements/Achievements.jsx';
import Funding from '../../components/Funding/Funding.jsx';

import '../../styles/base.css';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function About() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Intro />
      <Philosophy />
      <Timeline />
      <Domains />
      <Achievements />
      <Funding />
    </>
  );
}
