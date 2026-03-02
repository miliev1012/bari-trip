import { phrases, rainCards, emergencyCards } from '../data/info';

export default function TipsPanel() {
  return (
    <div>
      <div className="section-title">Tips &amp; Safety</div>
      <div className="section-sub">Everything you need to stay safe, smart, and stress-free</div>

      {/* ZTL Warning */}
      <div className="ztl-box">
        <div className="ztl-icon">🚫</div>
        <div className="ztl-content">
          <h4>ZTL Warning — Avoid Fines with Your Rental Car</h4>
          <p>
            Bari's Old Town (Bari Vecchia) has a <strong>ZTL (Zona Traffico Limitato)</strong> — a
            restricted traffic zone monitored by cameras 24/7. Driving in by mistake with a rental
            car will result in an automatic fine sent weeks later.
          </p>
          <ul>
            <li>Leave the car at or near the hotel when exploring the Old Town</li>
            <li>Park at <strong>Parcheggio Via Trevisani</strong> or the seafront car parks nearby</li>
            <li>Look for <strong>white/blue parking lines</strong> — white = free, blue = paid</li>
            <li>Use Google Maps and search "parcheggio Bari" for real-time spots</li>
            <li>Day trips (Fasano, Polignano, Alberobello) — no ZTL issues, park freely</li>
          </ul>
        </div>
      </div>

      {/* Emergency Numbers */}
      <div className="section-title" style={{ fontSize: '1.2rem', marginBottom: '6px' }}>
        🏥 Emergency Numbers
      </div>
      <div className="section-sub">Italy uses the EU-wide 112 for all emergencies</div>
      <div className="emergency-grid">
        {emergencyCards.map((card, i) => (
          <div key={i} className="emergency-card">
            <div className={`emergency-num${card.blue ? ' blue' : ''}`}>{card.num}</div>
            <div className="emergency-label">{card.label}</div>
            <div className="emergency-sub">{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Italian Phrases */}
      <div className="section-title" style={{ fontSize: '1.2rem', marginBottom: '6px' }}>
        🇮🇹 Useful Italian Phrases
      </div>
      <div className="section-sub">A little Italian goes a long way — locals absolutely love it</div>
      <div className="phrase-grid">
        {phrases.map((phrase, i) => (
          <div key={i} className="phrase-card">
            <div className="phrase-it">{phrase.it}</div>
            <div className="phrase-en">{phrase.en}</div>
            <div className="phrase-ctx">{phrase.ctx}</div>
          </div>
        ))}
      </div>

      {/* Rainy Day */}
      <div className="section-title" style={{ fontSize: '1.2rem', marginBottom: '6px' }}>
        🌧️ Rainy Day Backup Plan
      </div>
      <div className="section-sub">Late March can bring showers — here's how to adapt each day</div>
      <div className="rain-grid">
        {rainCards.map((card, i) => (
          <div key={i} className="rain-card">
            <div className="rain-title">{card.title}</div>
            <div className="rain-desc">{card.desc}</div>
            <div className="rain-note">{card.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
