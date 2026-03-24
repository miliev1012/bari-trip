import { useState } from 'react';
import type { Day } from '../data/types';
import TimelineItem from './TimelineItem';

export default function DayCard({ day, defaultOpen }: { day: Day; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="day-card">
      <div
        className={`day-header${open ? ' open' : ''}`}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="day-num">{day.num}</div>
        <div className="day-info">
          <h3>{day.date}</h3>
          <p>{day.subtitle}</p>
        </div>
        <div className="day-badges">
          {day.badges.map((b, i) => (
            <span key={i} className={`badge ${b.type}`}>{b.label}</span>
          ))}
          <span className={`weather-pill${day.weather.alert ? ' rainy' : ''}`}>
            {day.weather.icon} {day.weather.temp} · {day.weather.desc}
          </span>
        </div>
        <span className="chevron">▾</span>
      </div>

      {open && (
        <div className="day-body open">
          <div className="day-nav">
            <div className="day-nav-today">
              <span className="day-nav-label">Today</span>
              <span className="day-nav-place">{day.nav.todayPlace}</span>
            </div>
            <div className="day-nav-arrow">→</div>
            <div className="day-nav-next">
              <span className="day-nav-label">{day.nav.tomorrowLabel}</span>
              <span className="day-nav-place">{day.nav.tomorrowPlace}</span>
            </div>
          </div>
          <div className="timeline">
            {day.timeline.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
