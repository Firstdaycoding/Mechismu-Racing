import React from 'react';

export default function HighlightStrip({ highlights, milestones }) {
  // If no data, don't render strip
  if ((!highlights || highlights.length === 0) && (!milestones || milestones.length === 0)) {
    return null;
  }

  return (
    <div className="ach-highlight-strip">
      {/* Render all highlights */}
      {highlights && highlights.map((hl, index) => (
        <div className="ach-highlight-strip__primary" key={`hl-${index}`}>
          <span className="ach-highlight-strip__primary-label">ACHIEVEMENT</span>
          <span className="ach-highlight-strip__primary-value">{hl}</span>
        </div>
      ))}

      {/* Render milestones */}
      {milestones && milestones.length > 0 && (
        <div className="ach-highlight-strip__milestones">
          {milestones.map((m, index) => (
            <div className="ach-highlight-strip__milestone-block" key={index}>
              <div className="ach-highlight-strip__bullet" />
              <span className="ach-highlight-strip__milestone-text">{m}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
