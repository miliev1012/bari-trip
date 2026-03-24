type Tab = { id: string; label: string };

const TABS: Tab[] = [
  { id: 'itinerary', label: '📅 Itinerary' },
  { id: 'places',    label: '📍 Places' },
  { id: 'checklist', label: '✅ Checklist' },
  { id: 'info',      label: 'ℹ️ Trip Info' },
  { id: 'tips',      label: '🛟 Tips & Safety' },
  { id: 'food',      label: '🍝 Food Guide' },
  { id: 'map',       label: '🗺️ Map' },
];

interface Props {
  active: string;
  onChange: (id: string) => void;
}

export default function TabNav({ active, onChange }: Props) {
  return (
    <div className="tabs">
      {TABS.map((t) => (
        <button
          key={t.id}
          className={`tab-btn${active === t.id ? ' active' : ''}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
