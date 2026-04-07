
import '@/components/home/home.css';

// ===== HOME SECTIONS =====
import HeroSection from "@/components/home/hero/HeroSection.jsx";
import AboutPreview from "@/components/home/about/AboutPreview.jsx";
import CarsPreview from "@/components/home/cars/CarsPreview.jsx";
import TeamPreview from "@/components/home/team/TeamPreview.jsx";
import Achievements from "@/components/home/achievements/Achievements.jsx";
import SponsorsPreview from "@/components/home/sponsors/SponsorsPreview.jsx";
import ContactPreview from "@/components/home/contact/ContactPreview.jsx";

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
