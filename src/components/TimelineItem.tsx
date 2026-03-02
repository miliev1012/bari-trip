import type { TimelineItem as TLItem } from '../data/types';

export default function TimelineItem({ item }: { item: TLItem }) {
  return (
    <div className="tl-item">
      <div className={`tl-dot ${item.dot}`}>{item.emoji}</div>
      <div className="tl-content">
        <div className="tl-label">{item.label}</div>
        <div className="tl-title">{item.title}</div>
        <div className="tl-desc">{item.desc}</div>
        {item.tip && <div className="tl-tip">{item.tip}</div>}
      </div>
    </div>
  );
}
