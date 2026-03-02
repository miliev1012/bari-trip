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
    html: "🦁 Zoosafari Fasano: <strong>~1hr drive</strong><br>🌊 Polignano a Mare: <strong>~30min drive</strong><br>🏠 Alberobello: <strong>~1hr drive</strong><br>🏖️ Ostuni: <strong>~1.5hr drive</strong><br><br>All easily done as day trips with car!",
  },
  {
    icon: '🌤️', title: 'Weather in Late March',
    html: "Avg temp: <strong>12–18°C</strong><br>Some rain possible — pack a light jacket.<br>Sea: too cold for swimming but beautiful.<br><br>March is shoulder season — fewer crowds, better prices!",
  },
];

export const infoTips: TipBox[] = [
  {
    icon: '🍼', heading: 'Travelling with a 3-year-old in Bari',
    text: "Bari's Old Town (Bari Vecchia) has some cobblestones but is generally stroller-manageable on the main alleys. The Lungomare seafront is completely flat and perfect. Italian restaurants are very child-friendly — don't hesitate to ask for plain pasta or half-portions. Nap time in the car works perfectly with the day trip schedule.",
  },
  {
    icon: '🚗', heading: 'Parking in Bari',
    text: 'Parking in the centro storico can be tricky and expensive. Leave the car at or near the hotel for Old Town days and walk. For day trips (Fasano, Polignano, Alberobello) the car is ideal. Most attractions have free or cheap parking lots.',
  },
  {
    icon: '🍽️', heading: 'Italian Dining Times',
    text: 'Lunch is typically 12:30–2:30PM and dinner starts around 7:30–8PM. Restaurants often close between meals. For a toddler, arriving at 12:00 or 7:30 (when they open) means shorter waits and less noise. Always book dinner at La Cantina dello Zio ahead of time!',
  },
];

export const budgetCards: BudgetCard[] = [
  { label: 'Lunch (per person)', amount: '€12–25', note: 'Mastro Ciccio ~€12–15 · Sit-down €20–25' },
  { label: 'Dinner (per person)', amount: '€25–45', note: 'Most restaurants in Old Town' },
  { label: 'Zoosafari Family Ticket', amount: '~€140', note: 'Buy online at zoosafari.it' },
  { label: 'Lemur Walk (Zoosafari)', amount: '+€3', note: 'Add-on inside the park' },
  { label: 'Cathedral of St. Sabinus', amount: '€9', note: 'Combined church + crypt ticket' },
  { label: 'Polignano Boat Tour', amount: '~€15–20', note: 'Per adult · optional add-on' },
  { label: 'Alberobello', amount: 'Free', note: 'Walk around the trulli village' },
  { label: 'Basilica di San Nicola', amount: 'Free', note: 'Free entry, donations welcome' },
];

export const hubRoutes: HubRoute[] = [
  { time: '~30 min · SS16 coastal', emoji: '🌊', dest: 'Polignano a Mare', sub: 'Day 4 · Lama Monachile' },
  { time: '~1 hour · SS16', emoji: '🦁', dest: 'Zoosafari Fasano', sub: 'Day 3 · Drive-through safari' },
  { time: '~1 hour', emoji: '🏠', dest: 'Alberobello', sub: 'Day 2 · UNESCO trulli village' },
  { time: '~1.5 hours', emoji: '🌿', dest: 'Ostuni', sub: 'Optional · The White City' },
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
  { title: '☔ Day 2 — Zoosafari in rain?', desc: "No problem! The drive-through safari is done entirely from your car. Pack a waterproof layer for the walking areas.", note: '✅ Barely affected by rain' },
  { title: '☔ Day 3 — Bari Old Town in rain?', desc: "The covered alleyways of Bari Vecchia are actually charming in light rain. Duck into the Basilica di San Nicola and the Cathedral — both completely indoor.", note: '✅ Mostly fine — lots of indoor options' },
  { title: '☔ Day 4 — Polignano in rain?', desc: 'The cliff views at Lama Monachile are dramatic in moody weather. If heavy rain, swap with an extra Old Town day or visit the Museo Nazionale Archeologico di Taranto instead.', note: '⚠️ Reschedule if heavy rain' },
  { title: '🏛️ Indoor Alternative: Galleria Murat', desc: "Bari's beautiful covered 19th-century arcade in the new town. Perfect for a dry stroll with a stroller, cafés inside, and often hosts free exhibitions.", note: '📍 Near the Teatro Petruzzelli' },
  { title: '🏛️ Indoor Alternative: Museo Nazionale', desc: 'The Museo Nazionale Archeologico di Bari has fascinating Greek and Roman artefacts from Puglia. Toddler-friendly — big open halls and lots to look at.', note: '📍 Bari city centre' },
  { title: '🍕 Rainy afternoon idea', desc: 'Book a table at La Cantina dello Zio (Wed/Thu) for a long, relaxed lunch — warm atmosphere, great food, and no rush. Perfect way to wait out a shower.', note: '📞 Remember to book ahead' },
];

export const emergencyCards: EmergencyCard[] = [
  { num: '112', label: 'General Emergency', sub: 'Police, ambulance, fire — works from any phone' },
  { num: '118', label: 'Ambulance', sub: 'Medical emergencies only' },
  { num: '113', label: 'Police', sub: 'Polizia di Stato' },
  { num: '🏥', label: 'Nearest Hospital', sub: 'Policlinico di Bari — Piazza Giulio Cesare', blue: true },
  { num: '💊', label: 'Pharmacy', sub: 'Look for a green cross sign. Many open until 8 PM, some 24h', blue: true },
  { num: '🇪🇺', label: 'EHIC Card', sub: 'Bring your European Health Insurance Card for free public care', blue: true },
];
