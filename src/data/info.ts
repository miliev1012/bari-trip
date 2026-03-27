import type { InfoCard, TipBox, BudgetCard, HubRoute, PhraseCard, RainCard, EmergencyCard } from './types';

export const infoCards: InfoCard[] = [
  {
    icon: '🏨', title: 'Hotel',
    html: "<strong>Il Leon D'Oro Bari</strong><br>by Farace Hotels<br><br>Check-in: <strong>Sat 28 Mar 2026</strong> (after 3PM)<br>Check-out: <strong>Wed 1 Apr 2026</strong><br><br>🅿️ Hotel parking: listed as <strong>free</strong> on Google Maps · confirm with hotel when booking",
  },
  {
    icon: '🚗', title: 'Car Rental',
    html: "<strong>Sicily by Car</strong><br>Bari Karol Wojtyla Airport<br><br>Insurance: <strong>Full Protection ✅</strong><br><br>Return car before departing Apr 1",
  },
  {
    icon: '📍', title: 'Distances from Bari',
    html: "🌊 Polignano a Mare: <strong>~30 min</strong><br>⚓ Monopoli: <strong>~36 min</strong><br>🦁 Zoosafari Fasano: <strong>~50 min</strong><br>🏠 Alberobello: <strong>~1 hr</strong><br>⚪ Locorotondo: <strong>~1 hr</strong><br>🌿 Ostuni: <strong>~1 hr</strong><br>⛪ Trani: <strong>~45 min</strong><br>🏔️ Gravina in Puglia: <strong>~55 min</strong><br>🏺 Lecce: <strong>~1.5–2 hr</strong><br>🪨 Matera: <strong>~1.5 hr</strong><br><br>All reachable as day trips by car!",
  },
  {
    icon: '🅿️', title: 'Parking — Town by Town',
    html: "<strong>🏨 Hotel (Bari)</strong> — Parking listed as <strong>free</strong> on Google Maps · confirm with hotel at check-in. Street: blue lines around Piazza Aldo Moro ~€1.50/hr.<br><br><strong>🏠 Alberobello</strong> — Parcheggio Viale Indipendenza · <strong>€6 all-day</strong> · 3 min walk · enter your plate at the machine · arrive before 9:30AM or it fills up.<br><br><strong>⚪ Locorotondo</strong> — Underground garage at Piazza Aldo Moro entrance (town walls). ⚠️ <strong>ZTL zone</strong> — camera-enforced, fines ~€80–150 if you drive into the centro storico.<br><br><strong>🌊 Polignano a Mare</strong> — Piazzale Marco Polo · free or low cost · 5–10 min walk to old town. Blue lines = paid; <strong>yellow lines = residents only (automatic fine)</strong>.<br><br><strong>⚓ Monopoli</strong> — Via Antonelli or Via Arenazza · free · 10 min walk. ⚠️ <strong>ZTL zone</strong> — cameras in the old town entrance. Park outside and walk in.<br><br><strong>⛪ Trani</strong> (optional) — Piazza Castello paid (by cathedral) · or free bus parking near Via Alvarez (10 min walk).<br><br>⚠️ <strong>ZTL fines</strong> go to the rental company, who charge your card — sometimes weeks after you're home.",
  },
  {
    icon: '🌤️', title: 'Weather Forecast — Day by Day',
    html: "<strong>Sat 28 Mar</strong> 🌦️ 12°/9°C · Light drizzle (~3.8mm), overcast — pack a light umbrella<br><strong>Sun 29 Mar</strong> 🌤️ 15°/10°C · Broken clouds, dry (0mm) — good day for Alberobello<br><strong>Mon 30 Mar</strong> 🌤️ 15°/9°C · Cloudy but dry — trace sprinkles possible late, ideal safari weather<br><strong>Tue 31 Mar</strong> 🌧️ 13°/8°C · Rain showers (~6.5mm), overcast all day — plan accordingly<br><strong>Wed 1 Apr</strong> 🌦️ 14°/10°C · Light drizzle (~2.2mm), overcast · strong winds (47 km/h)<br><br>Sea is too cold for swimming but beautiful. March = shoulder season — fewer crowds, better prices!",
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
  { label: '📅 Day 1 — Arrival & Bari', amount: '~€80–120', note: 'Coffee + gelato + dinner for 2 + drinks · mostly walking day' },
  { label: '📅 Day 2 — Alberobello & Locorotondo', amount: '~€100–150', note: 'Fuel + parking + focaccia lunch + dinner back in Bari' },
  { label: '📅 Day 3 — Zoosafari + Monopoli', amount: '~€200–260', note: '~€140 zoo tickets + fuel + food + optional Monopoli lunch' },
  { label: '📅 Day 4 — Polignano a Mare', amount: '~€80–130', note: 'Parking + Pescaria + gelato + optional boat tour + dinner' },
  { label: '📅 Day 5 — Checkout & La Cantina', amount: '~€70–100', note: 'La Cantina farewell lunch ~€50–60 for two · coffee + return car' },
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
  { title: '🌦️ Day 1 (Sat) — Light Showers on Arrival', desc: "Only light showers forecast (~3.8mm, overcast) — much lighter than originally feared. The covered alleyways of Bari Vecchia are charming even in the wet — duck into the Basilica di San Nicola (free, stunning crypt) or Spazio Murat (Piazza del Ferrarese 1, free cultural space, open 10AM) if it picks up.", note: '✅ Manageable — lighter rain than first forecast, alleyways provide shelter' },
  { title: '🌤️ Day 2 (Sun) — Dry! Broken Clouds for Alberobello', desc: "Great news — 0mm forecast with broken clouds. Depart early (8:30AM) to catch the trulli in the best morning light. Cloudy skies actually make for lovely soft photography light without harsh shadows — perfect for the Belvedere panorama.", note: '✅ Good conditions — dry all day, no umbrella needed' },
  { title: '🌤️ Day 3 (Mon) — Cloudy but Dry for Zoosafari', desc: "Cloudy with only a trace of possible drizzle late (0.2mm — essentially nothing). The drive-through safari is entirely from the car regardless. Pack a light layer for the on-foot areas of the park, but conditions look fine.", note: '✅ Safari barely affected by clouds — animals are out in all weather' },
  { title: '🌧️ Day 4 (Tue) — Rain All Day at Polignano', desc: "Rain showers confirmed (~6.5mm) with overcast skies all day — no clearing expected. Best strategy: embrace it! The cliff views from the Ponte Borbonico bridge are dramatic in moody weather. Pescaria is covered. If it's very heavy: Grotte di Castellana (20 min inland) are underground caves at a constant 15°C — spectacular and completely rain-proof.", note: '☂️ Pack the umbrella — Polignano is still beautiful in the rain, and the Grotte are a great backup' },
  { title: '🌦️ Day 5 (Wed) — Light Drizzle & Strong Winds', desc: "Light drizzle forecast (~2.2mm) with overcast skies and strong winds (47 km/h) — breezy on the Lungomare seafront but very manageable. Checkout is 11AM — good timing to stay sheltered. La Cantina dello Zio opens at 11:30AM on Wednesdays — perfect warm farewell lunch. Orecchiette Alley is under covered arches, so still doable in the wet.", note: '☂️ La Cantina dello Zio is the perfect rain shelter for your last meal — 11:30AM, just after checkout!' },
  { title: '🏛️ Indoor: Spazio Murat', desc: "Contemporary art and cultural space right at the entrance of Bari Vecchia — free entry, fully stroller-friendly, opens at 10AM daily. Exhibitions, design shows, and children's workshops. A genuine cultural space, not just a rain shelter.", note: '📍 Piazza del Ferrarese 1 · Free · Daily 10AM–8PM' },
  { title: '🎡 Indoor: Gomma Park', desc: "Bari's best fully-covered kids' amusement park — mini coaster, bumper cars, soft play zones, all designed for small children. The go-to option if it's genuinely pouring and you need a couple of hours of contained toddler happiness.", note: '📍 Via della Costituente, near Parco 2 Giugno' },
  { title: '🏛️ Indoor: Museo Nazionale Archeologico', desc: 'Fascinating Greek and Roman artefacts from Puglia across spacious halls. Toddler-friendly — wide open rooms, nothing at dangerous heights. Excellent fallback for a heavy rain afternoon in Bari.', note: '📍 Bari city centre · Check current hours' },
];

export const emergencyCards: EmergencyCard[] = [
  { num: '112', label: 'General Emergency', sub: 'Police, ambulance, fire — works from any phone' },
  { num: '118', label: 'Ambulance', sub: 'Medical emergencies only' },
  { num: '113', label: 'Police', sub: 'Polizia di Stato' },
  { num: '🏥', label: 'Nearest Hospital', sub: 'Policlinico di Bari — Piazza Giulio Cesare', blue: true },
  { num: '💊', label: 'Pharmacy', sub: 'Look for a green cross sign. Many open until 8 PM, some 24h', blue: true },
  { num: '🇪🇺', label: 'EHIC Card', sub: 'Bring your European Health Insurance Card for free public care', blue: true },
];
