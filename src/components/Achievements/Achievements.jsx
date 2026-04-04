import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import './Achievements.css';

function Counter({ from = 0, to, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, duration, from, to]);

  return <span ref={ref}>{count}</span>;
}

export default function Achievements() {
  return (
    <section className="achievements-container py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="achievements-box"
      >
        <div className="achievements-divider"></div>
        <h2 className="achievements-title">Legacy of Excellence</h2>
        
        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16">
          <Counter to={3} duration={1.5} />rd Overall <br />
          <span className="achievements-highlight">PI-EV 2023</span>
        </h3>

        <div className="achievements-stats-grid">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <p className="text-6xl md:text-7xl font-bold text-white mb-2"><Counter to={1} duration={2} />st</p>
             <p className="text-gray-400 uppercase tracking-widest text-sm">Procurement Rank</p>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
           >
             <p className="text-6xl md:text-7xl font-bold text-white mb-2"><Counter to={2} duration={2} />nd</p>
             <p className="text-gray-400 uppercase tracking-widest text-sm">Design Rank</p>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
