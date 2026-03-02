import { useState, useEffect } from 'react';
import { checklistGroups } from '../data/checklist';

const STORAGE_KEY = 'bari2026_checklist';

function buildInitialState(): boolean[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as boolean[];
  } catch { /* ignore */ }
  const total = checklistGroups.reduce((n, g) => n + g.items.length, 0);
  return Array(total).fill(false);
}

export default function ChecklistPanel() {
  const [checked, setChecked] = useState<boolean[]>(buildInitialState);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(checked)); } catch { /* ignore */ }
  }, [checked]);

  const toggle = (idx: number) =>
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));

  let globalIdx = 0;

  return (
    <div>
      <div className="section-title">Trip Checklist</div>
      <div className="section-sub">Tap items to check them off</div>

      {checklistGroups.map((group, gi) => (
        <div key={gi} className="checklist-group">
          <h3>{group.title}</h3>
          {group.items.map((item, ii) => {
            const idx = globalIdx++;
            const isChecked = checked[idx] ?? false;
            return (
              <div
                key={ii}
                className={`check-item${isChecked ? ' checked' : ''}`}
                onClick={() => toggle(idx)}
              >
                <div className="check-box">{isChecked ? '✓' : ''}</div>
                <div>
                  <div className="check-text">{item.text}</div>
                  {item.sub && <div className="check-sub">{item.sub}</div>}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
