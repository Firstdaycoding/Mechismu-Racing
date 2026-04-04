import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import './Funding.css';

export default function Funding() {
  const funds = [
    { title: "Financial Sponsorship", description: "Direct monetary support to fuel our material acquisitions and competition logistics." },
    { title: "Technical Partnership", description: "Provide critical software, specialized tools, or access to manufacturing facilities." },
    { title: "Industry Collaboration", description: "Work with our engineers to test your cutting-edge components on our high-performance platform." }
  ];

  return (
    <section className="funding-section py-24 px-4 md:px-8">
      <div className="funding-box">
        <div className="funding-overlay"></div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold uppercase mb-4 tracking-wide pt-4"
        >
          Power The Future <br /> 
          <span className="text-gray-400 text-2xl md:text-3xl mt-2 block">Of Electric Racing</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="funding-list"
        >
           {funds.map((fund, idx) => (
             <div key={idx} className="funding-item">
               <h4 className="text-lg font-bold mb-2 text-white">{fund.title}</h4>
               <p className="text-gray-400 text-sm">{fund.description}</p>
             </div>
           ))}
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="funding-btn"
        >
          Partner With Us <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
