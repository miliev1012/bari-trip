import { dayTripOptions } from '../data/daytrips';

const RATING_LABEL: Record<1 | 2 | 3, string> = {
  1: '⚠️ Challenging with toddler',
  2: '👍 Manageable with toddler',
  3: '🌟 Great with toddler',
};

const RATING_COLOR: Record<1 | 2 | 3, string> = {
  1: '#e07b4a',
  2: '#f5c518',
  3: '#5a9e6f',
};

export default function DayTripsPanel() {
  return (
    <>
      <div className="section-title">Optional Day Trips</div>
      <div className="section-sub">Everything reachable by car from Bari — use this to decide if any fit your trip</div>

      <div className="daytrip-list">
        {dayTripOptions.map((trip) => (
          <div key={trip.name} className="daytrip-card">
            <div className="daytrip-header">
              <span className="daytrip-emoji">{trip.emoji}</span>
              <div className="daytrip-title-block">
                <div className="daytrip-name">{trip.name}</div>
                <div className="daytrip-drive">{trip.drive}</div>
              </div>
              <span
                className="daytrip-toddler-badge"
                style={{ background: RATING_COLOR[trip.toddlerRating] }}
              >
                {RATING_LABEL[trip.toddlerRating]}
              </span>
            </div>

            <div className="daytrip-tagline">{trip.tagline}</div>

            <div className="daytrip-highlights">
              {trip.highlights.map((h, i) => (
                <div key={i} className="daytrip-highlight">✦ {h}</div>
              ))}
            </div>

            <div className="daytrip-section-label">🧒 With a toddler</div>
            <div className="daytrip-toddler-note">{trip.toddlerNote}</div>

            <div className="daytrip-meta-row">
              <div className="daytrip-meta-item">
                <span className="daytrip-meta-label">Best day to go</span>
                <span className="daytrip-meta-val">{trip.bestDay}</span>
              </div>
              <div className="daytrip-meta-item">
                <span className="daytrip-meta-label">Time needed</span>
                <span className="daytrip-meta-val">{trip.duration}</span>
              </div>
            </div>

            <div className="daytrip-mustdo">
              <span className="daytrip-mustdo-label">Must do: </span>
              {trip.mustDo}
            </div>

            {trip.warn && (
              <div className="daytrip-warn">{trip.warn}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
