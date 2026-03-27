import { useState } from 'react';
import { photoSpots, TOWNS } from '../data/photos';
import type { PhotoTown } from '../data/photos';

export default function PhotoPanel() {
  const [town, setTown] = useState<PhotoTown>('All');

  const visible = town === 'All' ? photoSpots : photoSpots.filter(p => p.town === town);

  return (
    <>
      <div className="section-title">Photo Spots</div>
      <div className="section-sub">Best shots, best times, and composition tips for every location</div>

      <div className="filter-bar">
        {TOWNS.map(t => (
          <button
            key={t}
            className={`filter-btn${town === t ? ' active' : ''}`}
            onClick={() => setTown(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {visible.map((p, i) => (
          <div key={i} className="photo-card">
            <div className="photo-card-header">
              <span className="photo-emoji">{p.emoji}</span>
              <div>
                <div className="photo-spot">{p.spot}</div>
                <div className="photo-meta">
                  <span className="photo-town-badge">{p.town}</span>
                  {p.day && <span className="photo-day">{p.day}</span>}
                </div>
              </div>
            </div>
            <div className="photo-tip">{p.tip}</div>
            <div className="photo-time">{p.bestTime}</div>
          </div>
        ))}
      </div>
    </>
  );
}
