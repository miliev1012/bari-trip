import { useState } from 'react';
import type { Category } from '../data/types';
import { towns } from '../data/places';
import TownBlock from './TownBlock';

type FilterOption = { id: Category | 'all'; label: string };

const FILTERS: FilterOption[] = [
  { id: 'all',         label: 'All' },
  { id: 'cafe',        label: '☕ Cafés' },
  { id: 'restaurant',  label: '🍽️ Restaurants' },
  { id: 'gelato',      label: '🍦 Gelato' },
  { id: 'sightseeing', label: '🏛️ Sightseeing' },
  { id: 'activity',    label: '🎡 Activities' },
  { id: 'food',        label: '🍝 Must-Try Foods' },
  { id: 'photo',       label: '📸 Photo Spots' },
];

export default function PlacesPanel() {
  const [filter, setFilter] = useState<Category | 'all'>('all');

  return (
    <div>
      <div className="section-title">Places by Town</div>
      <div className="section-sub">
        Every spot grouped by destination — use the filters to narrow down by category
      </div>

      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`filter-btn${filter === f.id ? ' active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {towns.map((town, i) => (
        <TownBlock key={i} town={town} filter={filter} />
      ))}
    </div>
  );
}
