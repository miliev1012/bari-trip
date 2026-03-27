import { useState } from 'react';
import { glossary, CATEGORY_LABELS, type GlossaryCategory } from '../data/glossary';

const FILTERS = [
  { id: 'all',     label: '🍽️ All' },
  { id: 'bread',   label: '🫓 Pasta & Bread' },
  { id: 'cheese',  label: '🧀 Cheese & Antipasti' },
  { id: 'seafood', label: '🐟 Seafood' },
  { id: 'meat',    label: '🥩 Meat' },
  { id: 'veg',     label: '🫒 Vegetables & Oils' },
  { id: 'sweet',   label: '🍯 Sweets' },
  { id: 'drink',   label: '🍷 Drinks' },
];

export default function GlossaryPanel() {
  const [filter, setFilter] = useState<'all' | GlossaryCategory>('all');

  const items = filter === 'all' ? glossary : glossary.filter(i => i.category === filter);

  return (
    <>
      <div className="section-title">Food Glossary</div>
      <div className="section-sub">What to eat in Puglia — what's in it, how to say it, and where to try it</div>

      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`filter-btn${filter === f.id ? ' active' : ''}`}
            onClick={() => setFilter(f.id as 'all' | GlossaryCategory)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="glossary-grid">
        {items.map(item => (
          <div key={item.name} className="glossary-card">
            <div className="glossary-emoji">{item.emoji}</div>
            <div className="glossary-cat">{CATEGORY_LABELS[item.category]}</div>
            <div className="glossary-name">{item.name}</div>
            <div className="glossary-pron">{item.pronunciation}</div>
            <div className="glossary-desc">{item.desc}</div>
            {item.tip && (
              <div className="glossary-tip">💡 {item.tip}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
