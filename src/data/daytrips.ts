export interface DayTripOption {
  emoji: string;
  name: string;
  drive: string;
  badge: string;
  tagline: string;
  highlights: string[];
  toddlerNote: string;
  toddlerRating: 1 | 2 | 3; // 1=hard, 2=ok, 3=great
  bestDay: string;
  duration: string;
  mustDo: string;
  warn?: string;
}

export const dayTripOptions: DayTripOption[] = [
  {
    emoji: '⛪',
    name: 'Trani — Cathedral on the Sea',
    drive: '~45 min from Bari',
    badge: '🚗 45 min',
    tagline: "Puglia's most photogenic harbour town — a 12th-century Norman cathedral built directly on the Adriatic, a medieval castle at the water's edge, and a beautiful fishing port. Easy half-day from Bari.",
    highlights: [
      'Cattedrale di Trani — 12th-century Norman cathedral perched above the sea',
      'Porto di Trani — medieval harbour with colourful fishing boats',
      'Castello Svevo — 13th-century waterfront castle (free exterior)',
      'Jewish quarter — one of the oldest medieval Jewish districts in southern Italy',
    ],
    toddlerNote: 'The harbour front and cathedral square are completely flat — perfect for the stroller. Easy pace, open spaces, and plenty of pigeons to chase.',
    toddlerRating: 3,
    bestDay: 'Perfect as a 2–3 hour add-on. Day 1 if arriving early (flight before 1PM) — Trani is 45 min from the airport, then drive south to Bari for 3PM check-in.',
    duration: '2–3 hours',
    mustDo: 'Cathedral at the water\'s edge + harbour walk + espresso on the piazza looking out to sea',
  },
  {
    emoji: '🌿',
    name: 'Ostuni — The White City',
    drive: '~1 hr from Bari',
    badge: '🚗 1 hr',
    tagline: "One of Puglia's most beautiful hilltop towns — dazzling white walls, sweeping views over olive groves to the Adriatic.",
    highlights: [
      'Whitewashed hilltop old town with pedestrian-only alleys',
      'Gothic cathedral with extraordinary 24-column rose window',
      'Panoramic views stretching to the sea',
    ],
    toddlerNote: 'Main paths stroller-friendly. Hilly in places but the flat belvedere viewpoints are accessible. Gelato and pasticciotto stops keep little ones happy.',
    toddlerRating: 2,
    bestDay: 'Could replace or extend Day 2 (already in Valle d\'Itria area, ~40 min from Alberobello) — or as a standalone day.',
    duration: '2.5–3.5 hours in town',
    mustDo: 'Pasticciotto ostunese warm from the oven + cathedral rose window + hilltop panorama',
  },
  {
    emoji: '🏺',
    name: 'Lecce — Baroque Capital',
    drive: '~1.5–2 hrs from Bari',
    badge: '🚗 1.5–2 hr',
    tagline: 'The "Florence of the South" — Italy\'s most ornate baroque city carved entirely from golden Lecce stone. Completely flat and stroller-friendly.',
    highlights: [
      'Basilica di Santa Croce — most ornate baroque façade in Puglia',
      'Roman amphitheatre (2nd century) in the city centre',
      'Museo dei Bambini — dedicated interactive kids\' museum (ages 6mo–10)',
    ],
    toddlerNote: 'Lecce is the most toddler-friendly optional trip. The historic centre is almost entirely flat, the Museo dei Bambini is purpose-built for small children, and rustico leccese from any forno is an instant toddler win.',
    toddlerRating: 3,
    bestDay: 'Best as its own full day — the drive alone is 1.5–2hr each way. Could combine with an overnight if extending the trip.',
    duration: '4–5 hours minimum to do it justice',
    mustDo: 'Rustico leccese from a forno + Caffè Alvino pasticciotto + caffè in ghiaccio + Basilica di Santa Croce façade',
    warn: '⏱️ Long drive — best for early starters. Leave Bari by 8AM to have a full morning there.',
  },
  {
    emoji: '🪨',
    name: 'Matera — Sassi UNESCO City',
    drive: '~1.5 hrs from Bari',
    badge: '🚗 1.5 hr',
    tagline: 'One of the oldest continuously inhabited cities on earth — 9,000 years of cave dwellings carved into a gorge. Utterly unlike anywhere else.',
    highlights: [
      'Sassi di Matera — UNESCO World Heritage cave city',
      'Piazzetta Pascoli — the most dramatic panoramic viewpoint in southern Italy',
      'Casa Grotta — restored cave dwelling showing 1950s life inside',
    ],
    toddlerNote: 'The Sassi itself requires a baby carrier — steep stone staircases everywhere. The main piazza and top-level panoramic routes are accessible. Toddlers love the cave exploration feeling.',
    toddlerRating: 2,
    bestDay: 'Best as its own full day. Leave by 7:30AM to arrive for 9AM when it\'s quiet. Matera in golden morning light is extraordinary.',
    duration: '4–5 hours · Large free parking above the Sassi',
    mustDo: 'Piazzetta Pascoli panorama at dawn + Casa Grotta cave rooms + Pane di Matera IGP sourdough',
    warn: '⚠️ Baby carrier essential — stroller is impossible in the Sassi. Large free parking at the top, then walk or take the escalator down.',
  },
  {
    emoji: '🏔️',
    name: 'Gravina in Puglia — The Hidden Gorge City',
    drive: '~55 min from Bari',
    badge: '🚗 55 min',
    tagline: "One of Puglia's most dramatic and overlooked towns — a medieval city on the edge of a deep ravine, with a Roman aqueduct bridge, cave churches, and almost no tourists.",
    highlights: [
      'Ponte Viadotto — spectacular ancient aqueduct bridge over the ravine',
      'Gravina Gorge — deep ravine with cave dwellings and cave churches carved into the cliffs',
      'Cattedrale di Santa Maria Assunta — Gothic façade, atmospheric Baroque interior',
      'Only 40 min from Matera — ideal combo stop on the same day',
    ],
    toddlerNote: 'Town centre and main viewpoints are accessible. Keep toddlers close at the ravine edge. The drama is all visual — short walks, big wow factor.',
    toddlerRating: 2,
    bestDay: 'Best combined with a Matera day trip — Gravina is only 40 min from Matera. Stop here for 1.5 hours on the way there or back.',
    duration: '1.5–2 hours · Perfect as a Matera combo stop',
    mustDo: 'Ponte Viadotto view over the gorge + cave church walk + Pane di Altamura from a bakery (Altamura is 15 min away)',
    warn: '⚠️ Ravine viewpoints require care with small children. Some paths are uneven — keep the carrier handy.',
  },
  {
    emoji: '⚪',
    name: 'Locorotondo — Valle d\'Itria',
    drive: '~1 hr from Bari · 15 min from Alberobello',
    badge: '🚗 1 hr',
    tagline: "One of Italy's most beautiful villages — a perfectly circular hilltop town of whitewashed alleys and flower-filled balconies, overlooking the trulli valley.",
    highlights: [
      "Circular whitewashed centro storico — pedestrian only",
      "Belvedere over the Valle d'Itria — trulli, olive trees, vines",
      'Locorotondo DOC white wine — one of Puglia\'s best',
    ],
    toddlerNote: "Already in Day 2 of the planned itinerary as an afternoon extension after Alberobello — a natural pairing. The centro storico is gentle and stroller-friendly on the main alleys.",
    toddlerRating: 3,
    bestDay: 'Already planned for Day 2 afternoon — pairs perfectly with Alberobello in the morning.',
    duration: '1.5–2 hours · Easy afternoon visit',
    mustDo: 'Belvedere sunset walk on Via Nardelli + bombette from a macelleria + glass of Locorotondo DOC white',
  },
  {
    emoji: '🌊',
    name: 'Polignano a Mare',
    drive: '~30 min from Bari',
    badge: '🚗 30 min',
    tagline: 'Puglia\'s most iconic cliff cove — crystal Adriatic water, dramatic white cliffs, and Pescaria\'s legendary seafood sandwiches. Already in Day 4.',
    highlights: [
      'Lama Monachile — the iconic turquoise cliff cove',
      'Ponte Borbonico — elevated bridge viewpoint over the cove',
      'Pescaria — the most famous street food in all of Puglia',
    ],
    toddlerNote: 'Old town and bridge viewpoint are fully stroller-friendly at street level. Rocky beach requires beach shoes.',
    toddlerRating: 3,
    bestDay: 'Already planned for Day 4.',
    duration: '3–4 hours',
    mustDo: 'Bridge viewpoint + Pescaria seafood sandwich + gelato on the cliff edge',
  },
];
