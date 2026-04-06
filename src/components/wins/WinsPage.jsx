import React, { useState } from 'react';
import { winsData } from '../../data/wins';
import YearFilter from './YearFilter';
import YearSection from './YearSection';

export default function WinsPage() {
  const [activeYear, setActiveYear] = useState('ALL_RECORDS');

  const years = winsData.map(w => w.year);

  const displayedWins = activeYear === 'ALL_RECORDS'
    ? winsData
    : winsData.filter(w => w.year === activeYear);

  return (
    <div className="wins-page">
      <div className="wins-bg">
        <div className="wins-bg__carbon" />
        <div className="wins-bg__grid" />
        <div className="wins-bg__glow wins-bg__glow--1" />
        <div className="wins-bg__glow wins-bg__glow--2" />
      </div>

      <div className="wins-container">
        <YearFilter 
          years={years} 
          activeYear={activeYear} 
          onSelect={setActiveYear} 
        />

        <div className="wins-list">
          {displayedWins.map(yearData => (
            <YearSection key={yearData.year} data={yearData} />
          ))}
        </div>
      </div>
    </div>
  );
}
