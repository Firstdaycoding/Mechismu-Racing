import React from 'react';
import { motion } from 'motion/react';
import { Zap, Cpu, Settings, Wrench, Search } from 'lucide-react';
import './Domains.css';

export default function Domains() {
  const domains = [
    { title: "Powertrain", description: "Motor control and battery systems integration.", icon: <Zap className="w-8 h-8" /> },
    { title: "Vehicle Dynamics", description: "Suspension, steering, and braking optimization.", icon: <Settings className="w-8 h-8" /> },
    { title: "LV Electronics", description: "Telemetry, wiring harness, and control computing.", icon: <Cpu className="w-8 h-8" /> },
    { title: "Structural", description: "Chassis and aerodynamic composite bodywork.", icon: <Wrench className="w-8 h-8" /> },
    { title: "R&D", description: "Next-gen prototyping and autonomous tech exploration.", icon: <Search className="w-8 h-8" />, highlight: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="domains-container py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 tracking-wide">
          Engineering <span className="text-[#ff1e1e]">Domains</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Collaboration across multiple disciplines to create an integrated masterpiece.</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="domains-grid"
      >
        {domains.map((domain, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`domain-card ${domain.highlight ? 'highlight' : ''}`}
          >
            <div>
              <div className="domain-icon">
                {domain.icon}
              </div>
              <h3 className="text-2xl tracking-wide font-bold mb-3">{domain.title}</h3>
              <p className="text-gray-400">{domain.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
