import React from 'react';
import './Achievements.css';

export default function YearFilter({ years, activeYear, onSelect }) {
  return (
    <div className="ach-filter">
      <button
        type="button"
        className={`ach-filter__pill ${activeYear === 'ALL_RECORDS' ? 'ach-filter__pill--active' : ''}`}
        onClick={() => onSelect('ALL_RECORDS')}
      >
        ALL_RECORDS
      </button>
      
      {years.map((y) => (
        <button
          key={y}
          type="button"
          className={`ach-filter__pill ${activeYear === y ? 'ach-filter__pill--active' : ''}`}
          onClick={() => onSelect(y)}
        >
          {y}
        </button>
      ))}
    </div>
  );
}
