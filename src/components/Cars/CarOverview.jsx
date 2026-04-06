import React from 'react';

export default function CarOverview({ overview }) {
  if (!overview || !overview.description) return null;
  
  return (
    <div className="car-overview">
      {overview.description}
    </div>
  );
}
