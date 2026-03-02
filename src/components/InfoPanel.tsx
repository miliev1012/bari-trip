import { infoCards, infoTips, budgetCards, hubRoutes } from '../data/info';

export default function InfoPanel() {
  return (
    <div>
      <div className="section-title">Trip Info &amp; Tips</div>
      <div className="section-sub">Key bookings, contacts, and family travel tips</div>

      <div className="info-grid">
        {infoCards.map((card, i) => (
          <div key={i} className="info-card">
            <h4>{card.icon} {card.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: card.html }} />
          </div>
        ))}
      </div>

      {infoTips.map((tip, i) => (
        <div key={i} className="tip-box">
          <div className="tip-icon">{tip.icon}</div>
          <div className="tip-content">
            <h4>{tip.heading}</h4>
            <p>{tip.text}</p>
          </div>
        </div>
      ))}

      <div className="section-title" style={{ fontSize: '1.2rem', marginTop: '8px', marginBottom: '6px' }}>
        💶 Budget Estimates
      </div>
      <div className="section-sub">Approximate costs to help you plan</div>
      <div className="budget-grid">
        {budgetCards.map((card, i) => (
          <div key={i} className="budget-card">
            <div className="budget-label">{card.label}</div>
            <div className="budget-amount">{card.amount}</div>
            <div className="budget-note">{card.note}</div>
          </div>
        ))}
      </div>

      <div className="tip-box">
        <div className="tip-icon">💡</div>
        <div className="tip-content">
          <h4>Cash is king in Puglia</h4>
          <p>Smaller restaurants, bakeries, and market stalls may not accept cards. March is shoulder season — fewer crowds and better prices than summer peak.</p>
        </div>
      </div>

      <div className="section-title" style={{ fontSize: '1.2rem', marginTop: '8px', marginBottom: '6px' }}>
        🗺️ Getting Around
      </div>
      <div className="section-sub">Bari is your base — all day trips are easy drives</div>
      <div className="distance-hub">
        <div className="hub-bari">📍 Bari — Your Base</div>
        <div className="hub-routes">
          {hubRoutes.map((route, i) => (
            <div key={i} className="hub-row">
              <div className="hub-dot" />
              <div className="hub-line">
                <span className="hub-time">{route.time}</span>
              </div>
              <div className="hub-dest">
                {route.emoji} {route.dest}
                <span>{route.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
