import { useState } from 'react';
import Hero from './components/Hero';
import TabNav from './components/TabNav';
import DayCard from './components/DayCard';
import PlacesPanel from './components/PlacesPanel';
import ChecklistPanel from './components/ChecklistPanel';
import InfoPanel from './components/InfoPanel';
import TipsPanel from './components/TipsPanel';
import { days } from './data/days';

type PanelId = 'itinerary' | 'places' | 'checklist' | 'info' | 'tips';

export default function App() {
  const [activeTab, setActiveTab] = useState<PanelId>('itinerary');

  return (
    <>
      <Hero />
      <TabNav active={activeTab} onChange={(id) => setActiveTab(id as PanelId)} />

      <div className="main">
        {activeTab === 'itinerary' && (
          <div className="panel active">
            <div className="section-title">Day-by-Day Plan</div>
            <div className="section-sub">Tap any day to expand the full schedule</div>
            {days.map((day, i) => (
              <DayCard key={day.num} day={day} defaultOpen={i === 0} />
            ))}
          </div>
        )}

        {activeTab === 'places' && (
          <div className="panel active">
            <PlacesPanel />
          </div>
        )}

        {activeTab === 'checklist' && (
          <div className="panel active">
            <ChecklistPanel />
          </div>
        )}

        {activeTab === 'info' && (
          <div className="panel active">
            <InfoPanel />
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="panel active">
            <TipsPanel />
          </div>
        )}
      </div>
    </>
  );
}
