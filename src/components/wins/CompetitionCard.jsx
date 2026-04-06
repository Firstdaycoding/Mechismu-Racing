import React from 'react';

export default function CompetitionCard({ comp }) {
  return (
    <div className="wins-comp-card">
      <div className="wins-comp-card__header">
        <h3 className="wins-comp-card__name">{comp.name}</h3>
        <span className="wins-comp-card__id">{comp.id}</span>
      </div>
      
      <div className="wins-comp-card__results">
        {Object.entries(comp.results || {}).map(([key, val]) => (
          <div className="wins-comp-card__result-row" key={key}>
            <span className="wins-comp-card__label">{key.toUpperCase()}</span>
            <span className="wins-comp-card__value">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
