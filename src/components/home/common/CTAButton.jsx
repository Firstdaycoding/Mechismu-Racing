import React from 'react';
import { NavLink } from 'react-router-dom';
import './common.css';

export default function CTAButton({ text, to, variant = 'primary' }) {
  const className = `cta-button cta-${variant}`;

  return (
    <NavLink to={to} className={className}>
      <span>{text}</span>
      <div className="glow-sweep" />
    </NavLink>
  );
}
