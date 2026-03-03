import type { Town, Category } from '../data/types';
import PlaceCard from './PlaceCard';

interface Props {
  town: Town;
  filter: Category | 'all';
}

export default function TownBlock({ town, filter }: Props) {
  const visible = town.places.filter(
    (p) => filter === 'all' || p.cat === filter
  );

  if (visible.length === 0) return null;

  return (
    <div className="town-block">
      <div className="town-header">
        <div className="town-header-emoji">{town.emoji}</div>
        <div className="town-header-info">
          <div className="town-header-name">{town.name}</div>
          <div className="town-header-dist">{town.dist}</div>
        </div>
        <div className="town-header-badge">{town.badge}</div>
      </div>
      <div className="places-grid">
        {visible.map((place, i) => (
          <PlaceCard key={i} place={place} townName={town.name} />
        ))}
      </div>
    </div>
  );
}
