import type { Place } from '../data/types';

const MAPS_CATS = new Set(['restaurant', 'cafe', 'streetfood', 'gelato']);

export default function PlaceCard({ place, townName }: { place: Place; townName: string }) {
  if (place.kind === 'food') {
    return (
      <div className="food-card" data-cat="food">
        <div className="food-emoji">{place.emoji}</div>
        <div className="food-name">{place.name}</div>
        <div className="food-desc">{place.desc}</div>
        <div className="food-where">{place.where}</div>
      </div>
    );
  }

  if (place.kind === 'photo') {
    return (
      <div className="photo-card" data-cat="photo">
        <div className="photo-day">{place.day}</div>
        <div className="photo-spot">{place.spot}</div>
        <div className="photo-tip">{place.tip}</div>
      </div>
    );
  }

  return (
    <div className={`place-card ${place.style}`} data-cat={place.cat}>
      <div className="place-type">{place.type}</div>
      <div className="place-name">{place.name}</div>
      {place.stars && <div className="place-stars">{place.stars}</div>}
      <div className="place-note">{place.note}</div>
      {place.hours && <div className="place-hours">{place.hours}</div>}
      {place.warn && <div className="place-warn">{place.warn}</div>}
      {place.tags && place.tags.length > 0 && (
        <div className="option-tags">
          {place.tags.map((tag, i) => (
            <span key={i} className={`option-tag ${tag.type}`}>{tag.label}</span>
          ))}
        </div>
      )}
      {MAPS_CATS.has(place.cat) && (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' ' + townName + ' Italy')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="place-maps-link"
        >
          📍 View on Google Maps
        </a>
      )}
    </div>
  );
}
