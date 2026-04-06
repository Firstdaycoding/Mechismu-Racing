import React from 'react';
import CompetitionCard from './CompetitionCard';
import HighlightStrip from './HighlightStrip';

export default function YearSection({ data }) {
  // Determine opacity class based on status
  const getStatusClass = (status) => {
    switch (status) {
      case 'archived': return 'ach-year--archived';
      case 'legacy': return 'ach-year--legacy';
      case 'active':
      default: return 'ach-year--active';
    }
  };

  return (
    <section className={`ach-year ${getStatusClass(data.status)}`}>
      <div className="ach-year__header">
        <h2 className="ach-year__title">{data.year}</h2>
        <span className="ach-year__label">COMPETITION_LOG // {data.status.toUpperCase()}_SEASON</span>
      </div>
      <div className="ach-year__line" />

      {/* Highlight Strip */}
      <HighlightStrip highlights={data.highlights} milestones={data.milestones} />

      {/* Competition Grid */}
      {data.competitions && data.competitions.length > 0 && (
        <div className="ach-year__grid">
          {data.competitions.map((comp, idx) => (
            <CompetitionCard key={idx} comp={comp} />
          ))}
        </div>
      )}
    </section>
  );
}
