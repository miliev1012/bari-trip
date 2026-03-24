import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MarkerCategory = 'daytrip' | 'bari' | 'playground';

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  name: string;
  note: string;
  category: MarkerCategory;
  emoji: string;
}

const MARKER_COLORS: Record<MarkerCategory, string> = {
  daytrip:    '#009fb7',
  bari:       '#f5c518',
  playground: '#5a7a3a',
};

function divIcon(emoji: string, color: string) {
  return L.divIcon({
    className: '',
    html: `<div style="width:34px;height:34px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,0.35);border:2px solid white;">${emoji}</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -20],
  });
}

const ALL_MARKERS: MapMarker[] = [
  // ── Day Trips ──────────────────────────────────────────────────────────
  { id: 'alberobello',  lat: 40.7878, lng: 17.2388, emoji: '🏠', category: 'daytrip', name: 'Alberobello',         note: 'Trulli fairy-tale village · UNESCO World Heritage · Day 2 · ~1h from Bari' },
  { id: 'locorotondo',  lat: 40.7549, lng: 17.3265, emoji: '⚪', category: 'daytrip', name: 'Locorotondo',          note: "One of Italy's most beautiful villages · Whitewashed alleys · Day 2 · ~15min from Alberobello" },
  { id: 'fasano',       lat: 40.8331, lng: 17.3578, emoji: '🦁', category: 'daytrip', name: 'Zoosafari Fasanolandia', note: 'Drive-through safari · Giraffes, zebras, camels · Day 3 · ~50min from Bari · Mon 10AM–1PM only!' },
  { id: 'monopoli',     lat: 40.9534, lng: 17.2953, emoji: '⚓', category: 'daytrip', name: 'Monopoli',              note: 'Gorgeous coastal town · Old harbour · 16th-c castle on the sea · Optional Day 3 · ~35min from Fasano' },
  { id: 'polignano',    lat: 40.9960, lng: 17.2189, emoji: '🌊', category: 'daytrip', name: 'Polignano a Mare',      note: 'Iconic cliff coves · Crystal-clear Adriatic · Day 4 · ~30min from Bari' },
  { id: 'castellana',   lat: 40.8817, lng: 17.1634, emoji: '🪨', category: 'daytrip', name: 'Grotte di Castellana',  note: 'Italy\'s most spectacular cave system · 70m underground · ~20min from Polignano · Under 4s FREE' },

  // ── Bari Spots ─────────────────────────────────────────────────────────
  { id: 'hotel',        lat: 41.1202, lng: 16.8703, emoji: '🏨', category: 'bari', name: "Hotel Il Leon D'Oro",              note: 'Your base · Via Imbriani 23 · Days 1–5' },
  { id: 'san-nicola',   lat: 41.1264, lng: 16.8700, emoji: '⛪', category: 'bari', name: 'Basilica di San Nicola',           note: 'Bari\'s most iconic landmark · Resting place of St. Nicholas · Free entry · Beautiful crypt' },
  { id: 'bari-vecchia', lat: 41.1275, lng: 16.8695, emoji: '🏛️', category: 'bari', name: 'Bari Old Town (Bari Vecchia)',     note: 'Ancient maze of whitewashed alleys · Cathedral of Saint Sabinus · Don\'t miss at night' },
  { id: 'lungomare',    lat: 41.1215, lng: 16.8632, emoji: '🌅', category: 'bari', name: 'Lungomare Araldo di Crollalanza', note: 'Bari\'s flat seafront promenade · Stroller-friendly · Perfect for sunset walks' },
  { id: 'albicocca',    lat: 41.1280, lng: 16.8698, emoji: '👵', category: 'bari', name: 'Largo Albicocca',                  note: 'Orecchiette ladies make pasta by hand here every morning · Very photogenic · Kids love it' },
  { id: 'galleria',     lat: 41.1241, lng: 16.8724, emoji: '🏬', category: 'bari', name: 'Galleria Murat',                   note: '19th-century covered arcade · Cafés inside · Great rainy-day stroller loop' },
  { id: 'caffe',        lat: 41.1186, lng: 16.8701, emoji: '☕', category: 'bari', name: 'Il Caffettaio ⭐ 4.9',             note: 'Best macchiato and pastries in Bari · Mon–Fri 7AM–5PM · Closed Sundays' },
  { id: 'melo',         lat: 41.1194, lng: 16.8694, emoji: '🥐', category: 'bari', name: 'Melo Coffee and Bakery',           note: 'Best all-rounder · Focaccia, pastries, panzerotti · Open 7 days including Sunday' },
  { id: 'le-nicchie',   lat: 41.1268, lng: 16.8697, emoji: '🍝', category: 'bari', name: 'Le Nicchie',                       note: 'Excellent authentic Puglian cuisine in the Old Town · Book ahead · Closed Mondays' },
  { id: 'anto',         lat: 41.1254, lng: 16.8700, emoji: '🍷', category: 'bari', name: "Antò Ristorante",                  note: 'Cucina tipica pugliese · Open every day · Family-friendly · Large portions' },
  { id: 'cantina',      lat: 41.1256, lng: 16.8698, emoji: '⭐', category: 'bari', name: 'La Cantina dello Zio',             note: 'Most celebrated restaurant in Bari · Open Wed & Fri only · BOOK AHEAD: +39 329 229 9403' },
  { id: 'via-sparano',  lat: 41.1230, lng: 16.8718, emoji: '🛍️', category: 'bari', name: 'Via Sparano',                     note: 'Bari\'s main shopping street · Souvenirs, ZARA, gelato · Evening stroll route' },
  { id: 'bambini',      lat: 41.1162, lng: 16.8847, emoji: '🔬', category: 'bari', name: "Città dei Bambini e dei Ragazzi",  note: 'Interactive science museum for kids · Rainy day backup · Ages 6mo–10yr · Stroller-friendly' },

  // ── Playgrounds ────────────────────────────────────────────────────────
  { id: 'parco-2giugno', lat: 41.1053, lng: 16.8763, emoji: '🛝', category: 'playground', name: "Parco 2 Giugno",         note: 'Bari\'s largest park · Full playground equipment · Open green space · Great for a run-around after lunch' },
  { id: 'villa-piccini', lat: 41.1083, lng: 16.8691, emoji: '🌳', category: 'playground', name: "Villa Piccini",          note: 'Pretty public gardens · Small play area · Shaded paths · 10min walk from hotel · Good morning stop' },
  { id: 'parco-rossani', lat: 41.1123, lng: 16.8650, emoji: '🛝', category: 'playground', name: "Parco Rossani",          note: 'Former military barracks converted into a large public park · Modern playground · Very popular with families' },
  { id: 'old-town-play', lat: 41.1310, lng: 16.8728, emoji: '🏃', category: 'playground', name: "Parchetto near Old Town", note: 'Small public play area near Bari Vecchia · Handy after the morning Old Town walk · Benches nearby' },
];

const FILTERS: { id: 'all' | MarkerCategory; label: string }[] = [
  { id: 'all',        label: '🗺️ All' },
  { id: 'daytrip',    label: '🚗 Day Trips' },
  { id: 'bari',       label: '📍 Bari Spots' },
  { id: 'playground', label: '🛝 Playgrounds' },
];

const LEGEND = [
  { color: MARKER_COLORS.daytrip,    label: 'Day trips' },
  { color: MARKER_COLORS.bari,       label: 'Bari spots' },
  { color: MARKER_COLORS.playground, label: 'Playgrounds' },
];

function BoundsAdjuster({ markers }: { markers: MapMarker[] }) {
  const map = useMap();
  useEffect(() => {
    if (markers.length === 0) return;
    const bounds = L.latLngBounds(markers.map(m => [m.lat, m.lng]));
    map.fitBounds(bounds, { padding: [48, 48] });
  }, [markers, map]);
  return null;
}

export default function MapPanel() {
  const [filter, setFilter] = useState<'all' | MarkerCategory>('all');

  const visible = filter === 'all' ? ALL_MARKERS : ALL_MARKERS.filter(m => m.category === filter);

  return (
    <>
      <div className="section-title">Interactive Map</div>
      <div className="section-sub">Day trips, Bari spots, and playgrounds — click any marker for details</div>

      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`filter-btn${filter === f.id ? ' active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="map-legend">
        {LEGEND.map(l => (
          <div key={l.label} className="map-legend-item">
            <span className="map-legend-dot" style={{ background: l.color }} />
            {l.label}
          </div>
        ))}
      </div>

      <div className="map-container">
        <MapContainer
          center={[41.12, 16.87]}
          zoom={10}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <BoundsAdjuster markers={visible} />
          {visible.map(m => (
            <Marker
              key={m.id}
              position={[m.lat, m.lng]}
              icon={divIcon(m.emoji, MARKER_COLORS[m.category])}
            >
              <Popup>
                <div style={{ minWidth: 200, maxWidth: 260 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 5 }}>
                    {m.emoji} {m.name}
                  </div>
                  <div style={{ fontSize: 12.5, color: '#3a4050', lineHeight: 1.55 }}>
                    {m.note}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="map-tip">
        🌐 Map tiles require an internet connection · Pinch to zoom on mobile · Click any marker for details
      </div>
    </>
  );
}
