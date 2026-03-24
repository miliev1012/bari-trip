import type { InfoCard, TipBox, BudgetCard, HubRoute, PhraseCard, RainCard, EmergencyCard } from './types';

export const infoCards: InfoCard[] = [
  {
    icon: '🏨', title: 'Hotel',
    html: "<strong>Il Leon D'Oro Bari</strong><br>by Farace Hotels<br><br>Check-in: <strong>Sat 28 Mar 2026</strong> (after 3PM)<br>Check-out: <strong>Wed 1 Apr 2026</strong>",
  },
  {
    icon: '🚗', title: 'Car Rental',
    html: "<strong>Sicily by Car</strong><br>Bari Karol Wojtyla Airport<br><br>Insurance: <strong>Full Protection ✅</strong><br><br>Return car before departing Apr 1",
  },
  {
    icon: '📍', title: 'Distances from Bari',
    html: "🌊 Polignano a Mare: <strong>~30 min</strong><br>⚓ Monopoli: <strong>~36 min</strong><br>🦁 Zoosafari Fasano: <strong>~50 min</strong><br>🏠 Alberobello: <strong>~1 hr</strong><br>⚪ Locorotondo: <strong>~1 hr</strong><br>🌿 Ostuni: <strong>~1 hr</strong><br>🏺 Lecce: <strong>~1.5–2 hr</strong><br>🪨 Matera: <strong>~1.5 hr</strong><br><br>All reachable as day trips by car!",
  },
  {
    icon: '🌤️', title: 'Weather Forecast — Day by Day',
    html: "<strong>Sat 28 Mar</strong> 🌧️ 12°/8°C · Light rain (2.8mm) — pack umbrella<br><strong>Sun 29 Mar</strong> ☀️ 14°/9°C · Clear skies — perfect for trulli!<br><strong>Mon 30 Mar</strong> 🌤️ 13°/10°C · Dry — ideal safari weather<br><strong>Tue 31 Mar</strong> 🌤️ 14°/10°C · Mostly dry (0.5mm) — good for Polignano<br><strong>Wed 1 Apr</strong> 🌧️ 12°/9°C · Rain returns (6.3mm) — keep it covered<br><br>Sea is too cold for swimming but beautiful. March = shoulder season — fewer crowds, better prices!",
  },
];

export const infoTips: TipBox[] = [
  {
    icon: '🍼', heading: 'Travelling with a 3-year-old in Puglia',
    text: "Bari's Old Town has some cobblestones but is generally stroller-manageable on the main alleys. The Lungomare seafront is completely flat and perfect. Italian restaurants are very child-friendly — don't hesitate to ask for plain pasta (pasta al burro) or half-portions (mezza porzione). Matera's Sassi requires a baby carrier, not a stroller. Nap time in the car works perfectly with the day trip schedule.",
  },
  {
    icon: '🚗', heading: 'Parking Tips',
    text: 'Leave the car at or near the hotel for Bari Old Town days and walk. For day trips the car is essential. Alberobello and Polignano have paid parking lots right at the entrance (~€5–10/day). Matera has large free parking areas above the Sassi — walk or take the panoramic escalator down.',
  },
  {
    icon: '🍽️', heading: 'Italian Dining Times',
    text: 'Lunch is typically 12:30–2:30PM and dinner starts 7:30–8PM. Restaurants close between meals. For a toddler, arriving right when they open means shorter waits and less noise. Book La Cantina dello Zio and Antò at least 2 days ahead. Most smaller-town restaurants are walk-in friendly at lunch.',
  },
  {
    icon: '☕', heading: 'Coffee & Café Culture',
    text: 'Espresso is drunk standing at the bar — faster and cheaper than sitting. "Un caffè" = a single espresso. Add "macchiato" for a drop of milk. In Lecce, order caffè in ghiaccio con latte di mandorla (iced espresso with almond milk) — it\'s the local tradition and unmissable. Cappuccino is a breakfast drink only — locals never drink it after 11AM.',
  },
  {
    icon: '🥙', heading: 'Street Food Strategy',
    text: 'Street food is one of the highlights of this trip. In Bari: panzerotti (fried dough pockets) and sgagliozze (fried polenta). In Polignano: Pescaria seafood sandwiches. In Alberobello & Locorotondo: bombette (grilled pork skewers) from macellerie. In Lecce: rustico leccese (puff pastry) is a must — costs ~€2 from any bakery. Always eat standing — it\'s the authentic way.',
  },
];

export const budgetCards: BudgetCard[] = [
  { label: 'Espresso / Cappuccino', amount: '€1–2', note: 'Standing at the bar · sitting adds €1–2' },
  { label: 'Street food snack', amount: '€1–4', note: 'Panzerotto, rustico leccese, pasticciotto' },
  { label: 'Lunch (per person)', amount: '€12–25', note: 'Mastro Ciccio ~€12–15 · Sit-down €20–25' },
  { label: 'Dinner (per person)', amount: '€25–45', note: 'Most restaurants in Old Town' },
  { label: 'Aperol Spritz', amount: '€5–8', note: 'Often comes with free stuzzichini snacks' },
  { label: 'Zoosafari Family Ticket', amount: '~€140', note: 'Buy online at zoosafari.it' },
  { label: 'Lemur Walk (Zoosafari)', amount: '+€3', note: 'Add-on inside the park — recommended' },
  { label: 'Cathedral of St. Sabinus', amount: '€9', note: 'Combined church + crypt ticket' },
  { label: 'Polignano Boat Tour', amount: '~€15–20', note: 'Per adult · young children often free' },
  { label: 'Grotte di Castellana (short tour)', amount: '~€15/adult', note: 'Under 4s FREE · 50min guided tour · near Polignano' },
  { label: 'Alberobello Trulli Walk', amount: 'Free', note: 'Walk around the village · no entry fee' },
  { label: 'Basilica di San Nicola', amount: 'Free', note: 'Free entry, donations welcome' },
  { label: 'Matera Sassi Walk', amount: 'Free', note: 'Free to explore · individual caves charge small fees' },
];

export const hubRoutes: HubRoute[] = [
  { time: '~30 min · SS16 coastal', emoji: '🌊', dest: 'Polignano a Mare', sub: 'Day 4 · Lama Monachile cliff cove' },
  { time: '~40 min · SP236', emoji: '🪨', dest: 'Grotte di Castellana', sub: 'Day 4 optional · Spectacular caves · under 4s FREE' },
  { time: '~36 min · SS16', emoji: '⚓', dest: 'Monopoli', sub: 'Optional · Old harbour & castle' },
  { time: '~50 min · SS16', emoji: '🦁', dest: 'Zoosafari Fasano', sub: 'Day 3 · Drive-through safari' },
  { time: '~1 hour', emoji: '🏠', dest: 'Alberobello', sub: 'Day 2 · UNESCO trulli village' },
  { time: '~1 hour', emoji: '⚪', dest: 'Locorotondo', sub: 'Optional · Whitewashed hilltop village' },
  { time: '~1 hour', emoji: '🌿', dest: 'Ostuni', sub: 'Optional · The White City' },
  { time: '~1.5–2 hrs · SP362', emoji: '🏺', dest: 'Lecce', sub: 'Optional · Baroque capital · rustico leccese' },
  { time: '~1.5 hrs · SS96/SS7', emoji: '🪨', dest: 'Matera', sub: 'Optional · Sassi UNESCO cave city' },
];

export const phrases: PhraseCard[] = [
  { it: 'Buongiorno / Buonasera', en: 'Good morning / Good evening', ctx: 'Always greet when entering a shop or restaurant' },
  { it: 'Un tavolo per tre, per favore', en: 'A table for three, please', ctx: 'Use when arriving at a restaurant' },
  { it: 'Il conto, per favore', en: 'The bill, please', ctx: "Waiters won't bring it until you ask" },
  { it: 'Senza peperoncino', en: 'Without chilli', ctx: 'Essential for the toddler — some dishes are spicy' },
  { it: 'Mezza porzione, per favore', en: 'Half portion, please', ctx: 'For the little one — most restaurants are happy to do this' },
  { it: 'Acqua naturale / frizzante', en: 'Still / sparkling water', ctx: 'Always asked at restaurants — naturale = still' },
  { it: "Dov'è il bagno?", en: 'Where is the bathroom?', ctx: 'Very useful with a toddler in tow!' },
  { it: 'È adatto ai bambini?', en: 'Is it child-friendly?', ctx: 'Most places will say yes — Italians love children' },
  { it: 'Quanto costa?', en: 'How much does it cost?', ctx: 'Useful at markets and souvenir stalls' },
  { it: 'Grazie mille!', en: 'Thank you so much!', ctx: 'Always appreciated — say it with a smile' },
];

export const rainCards: RainCard[] = [
  { title: '🌧️ Day 1 (Sat) — Rainy Arrival', desc: "Light rain forecast for arrival day (2.8mm). The covered alleyways of Bari Vecchia are charming even in the wet — duck into the Basilica di San Nicola (free, stunning crypt) or the Cathedral. Galleria Murat (covered 19th-century arcade, stroller-friendly) is a great dry stroll near the hotel.", note: '✅ Mostly manageable — lots of indoor options' },
  { title: '☀️ Day 2 (Sun) — Clear for Alberobello!', desc: "Forecast is sunny and dry — the best possible day for the trulli village. Go early (depart 8:30AM) to beat day-tripper buses. Take the Belvedere panorama shot before 10AM.", note: '✅ Perfect conditions — no rain expected' },
  { title: '🌤️ Day 3 (Mon) — Dry for Zoosafari', desc: "Dry and mild. Even if light drizzle appears, the drive-through safari is entirely from the car. Pack a light waterproof for the walking areas just in case.", note: '✅ Safari barely affected by rain anyway' },
  { title: '🌤️ Day 4 (Tue) — Good for Polignano', desc: "Mostly dry with only 0.5mm forecast — ideal for Lama Monachile cliff cove. The cliff views are dramatic even in moody weather. If considering adding Grotte di Castellana: the caves are 15°C year-round regardless of surface weather.", note: '✅ Good coastal conditions' },
  { title: '🌧️ Day 5 (Wed) — Rainy Departure Morning', desc: "Rainiest day of the trip (6.3mm). Checkout is 11AM — good timing to stay sheltered. La Cantina dello Zio opens at 11:30AM on Wednesdays for a warm farewell lunch inside. Lungomare walk may be wet but a quick Orecchiette Alley visit under the arches is still doable.", note: '☂️ Pack umbrella for the morning — La Cantina is the perfect shelter!' },
  { title: '🏛️ Indoor Alternative: Città dei Bambini', desc: "Interactive science museum for kids 6 months–10 years. Hands-on exhibits covering physics, biology, technology. Excellent fallback for a heavy rain afternoon.", note: '📍 Bari city centre — check opening hours' },
  { title: '🏛️ Indoor Alternative: Galleria Murat', desc: "Bari's beautiful covered 19th-century arcade. Perfect for a dry stroll with a stroller, cafés inside, often hosts free exhibitions.", note: '📍 Near the Teatro Petruzzelli' },
  { title: '🏛️ Indoor Alternative: Museo Nazionale', desc: 'The Museo Nazionale Archeologico di Bari has fascinating Greek and Roman artefacts from Puglia. Toddler-friendly — big open halls and lots to look at.', note: '📍 Bari city centre' },
];

export const emergencyCards: EmergencyCard[] = [
  { num: '112', label: 'General Emergency', sub: 'Police, ambulance, fire — works from any phone' },
  { num: '118', label: 'Ambulance', sub: 'Medical emergencies only' },
  { num: '113', label: 'Police', sub: 'Polizia di Stato' },
  { num: '🏥', label: 'Nearest Hospital', sub: 'Policlinico di Bari — Piazza Giulio Cesare', blue: true },
  { num: '💊', label: 'Pharmacy', sub: 'Look for a green cross sign. Many open until 8 PM, some 24h', blue: true },
  { num: '🇪🇺', label: 'EHIC Card', sub: 'Bring your European Health Insurance Card for free public care', blue: true },
];
