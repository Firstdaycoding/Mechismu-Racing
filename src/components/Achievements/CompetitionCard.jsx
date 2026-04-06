import React from 'react';

export default function CompetitionCard({ comp }) {
  return (
    <div className="ach-comp-card">
      <div className="ach-comp-card__header">
        <h3 className="ach-comp-card__name">{comp.name}</h3>
        <span className="ach-comp-card__id">{comp.id}</span>
      </div>
      
      <div className="ach-comp-card__results">
        {Object.entries(comp.results).map(([key, val]) => (
          <div className="ach-comp-card__result-row" key={key}>
            <span className="ach-comp-card__label">{key.toUpperCase()}</span>
            <span className="ach-comp-card__value">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
