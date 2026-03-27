export interface PhotoSpot {
  town: string;
  emoji: string;
  spot: string;
  tip: string;
  bestTime: string;
  day?: string;
}

export const photoSpots: PhotoSpot[] = [
  // Bari
  {
    town: 'Bari',
    emoji: '👵',
    spot: 'Orecchiette Alley — Largo Albicocca',
    tip: 'Candid shots of the nonnas making pasta by hand are warmly welcomed — they love the attention. Get low for a frame-filling shot of hands and dough.',
    bestTime: '🕐 9–11AM · Before tourist crowds build',
    day: 'Day 1, 3 or 5',
  },
  {
    town: 'Bari',
    emoji: '🌅',
    spot: 'Lungomare at Sunset',
    tip: "Face west along the seafront promenade for a golden-hour shot over the Adriatic. The flat light turns the sea pale gold — the stroller silhouette in the foreground makes it personal.",
    bestTime: '🕐 1hr before sunset · Faces west',
    day: 'Any evening',
  },
  {
    town: 'Bari',
    emoji: '⛪',
    spot: 'Basilica di San Nicola — Square Archway',
    tip: "Frame the Basilica façade through the square archway of the adjacent piazza. Late afternoon light hits the Romanesque stone beautifully. The crypt entrance also makes a dramatic low-angle shot.",
    bestTime: '🕐 4–6PM · South-facing façade',
    day: 'Any afternoon',
  },
  {
    town: 'Bari',
    emoji: '🏛️',
    spot: 'Bari Vecchia — Medieval Alleyways',
    tip: 'The narrow whitewashed alleys of the old town are endlessly photogenic. Look for laundry lines strung between buildings, arched passages, and doorways with potted plants.',
    bestTime: '🕐 Morning or golden hour',
    day: 'Any day',
  },
  // Alberobello
  {
    town: 'Alberobello',
    emoji: '🏠',
    spot: 'Trulli Rione Monti',
    tip: "Arrive before 9AM when the alleys are empty. Get low and shoot along the rows of conical rooftops converging toward a vanishing point. A toddler in the foreground in the frame makes it magical.",
    bestTime: '🕐 8–10AM · Before tour buses arrive',
    day: 'Day 2',
  },
  {
    town: 'Alberobello',
    emoji: '🌅',
    spot: 'Belvedere Santa Lucia — Trulli Panorama',
    tip: 'The sea-of-cones panorama shot that defines Alberobello. Get there before 9AM to have it completely to yourself. Shoot into the light for a misty, layered depth effect.',
    bestTime: '🕐 8–9AM · East-facing, morning light ideal',
    day: 'Day 2',
  },
  {
    town: 'Alberobello',
    emoji: '⛪',
    spot: "Chiesa di Sant'Antonio",
    tip: "Frame the trullo-shaped church against a blue sky — unique architecture found nowhere else on earth. Shoot from across the small piazza for a full-façade composition.",
    bestTime: '🕐 Any time · Blue sky preferred',
    day: 'Day 2',
  },
  // Locorotondo
  {
    town: 'Locorotondo',
    emoji: '⚪',
    spot: 'Whitewashed Alleys — Centro Storico',
    tip: 'The narrow flower-lined alleys with whitewashed walls and geranium-filled balconies are endlessly photogenic. Look for colourful doors against the white. Late afternoon light is warmest.',
    bestTime: '🕐 Late afternoon · Angled light on the walls',
    day: 'Day 2',
  },
  {
    town: 'Locorotondo',
    emoji: '🌄',
    spot: "Belvedere — Valle d'Itria Panorama",
    tip: "The valley stretching below with trulli, olive trees, and vines — best shot about 30 min before sunset when the light turns golden. Use a longer focal length to compress the distance.",
    bestTime: '🕐 30 min before sunset',
    day: 'Day 2',
  },
  // Polignano a Mare
  {
    town: 'Polignano',
    emoji: '🌊',
    spot: 'Lama Monachile — Bridge Viewpoint',
    tip: "Stand on the Ponte Borbonico bridge looking down into the cove — this is the iconic Polignano shot. Turquoise water between white cliffs. Morning light comes from the east and hits the water directly.",
    bestTime: '🕐 Morning (east-facing cove) · Before 11AM',
    day: 'Day 4',
  },
  {
    town: 'Polignano',
    emoji: '🍦',
    spot: 'Gelato on the Cliff Edge',
    tip: "Hold the cone with the open sea behind and catch the light. The combination of vivid gelato colour against the turquoise Adriatic is one of the most shareable shots of the whole trip.",
    bestTime: '🕐 Midday light or early afternoon',
    day: 'Day 4',
  },
  {
    town: 'Polignano',
    emoji: '🌅',
    spot: 'Old Town Rooftop View — West-facing',
    tip: "Climb to the western edge of the old town for a sunset silhouette over the Adriatic. The whitewashed buildings and sea below make a strong geometric composition.",
    bestTime: '🕐 30 min before sunset',
    day: 'Day 4',
  },
  // Monopoli
  {
    town: 'Monopoli',
    emoji: '🌅',
    spot: 'Porto Vecchio at Sunset',
    tip: 'Position yourself at the harbour edge facing west — the lighthouse, colourful fishing boats, and the glowing sky make for a classic Puglia shot. Arrive 30 min before sunset for the best colours.',
    bestTime: '🕐 30 min before sunset · West-facing harbour',
    day: 'Day 3',
  },
  {
    town: 'Monopoli',
    emoji: '🏰',
    spot: 'Castello di Carlo V from the Waterfront',
    tip: 'Shoot the castle from the rocks below for a dramatic sea-and-stone composition. The castle appears to grow directly from the sea. Works well with a toddler on the rocks in the foreground.',
    bestTime: '🕐 Late afternoon · Golden light on the stone',
    day: 'Day 3',
  },
  // Fasano
  {
    town: 'Fasano',
    emoji: '🦒',
    spot: 'Giraffe at Your Car Window — Zoosafari',
    tip: 'Have the camera ready during the drive-through with the window down. A giraffe stretching its neck into the car with a wide-eyed toddler is an unmissable and unrepeatable family shot.',
    bestTime: '🕐 During drive-through · Have camera ready immediately',
    day: 'Day 3',
  },
  // Matera
  {
    town: 'Matera',
    emoji: '🪨',
    spot: 'Piazzetta Pascoli — Sassi Panorama',
    tip: "The iconic Matera shot — the entire ancient cave city stretching below you. Best at dawn (empty, golden, misty) or 30 min before sunset. Avoid midday when it's harsh and crowded.",
    bestTime: '🕐 Dawn or 30 min before sunset · Never midday',
    day: 'Optional day trip',
  },
  {
    town: 'Matera',
    emoji: '⛪',
    spot: 'San Pietro Caveoso from the Gravina',
    tip: 'Cross the Gravina gorge bridge for a full frontal view of the Sassi carved into the hillside — the shot that appears in every Matera documentary. Late afternoon gives warm amber light on the rock.',
    bestTime: '🕐 Late afternoon · Warm light on the Sassi',
    day: 'Optional day trip',
  },
  // Trani
  {
    town: 'Trani',
    emoji: '⛪',
    spot: 'Cattedrale di Trani — Cathedral above the Sea',
    tip: 'The cathedral stands on the rocks with the open Adriatic on three sides — shoot from the waterfront at low angle with the sea in the foreground. Morning light hits the Norman stone beautifully from the east.',
    bestTime: '🕐 8–11AM · East-facing, morning light ideal',
    day: 'Optional day trip',
  },
  {
    town: 'Trani',
    emoji: '⚓',
    spot: 'Porto di Trani — Harbour Reflections',
    tip: 'The medieval harbour at golden hour — cathedral reflecting in the water, colourful fishing boats moored below, and the castle at the far end. One of the most painterly harbours in Puglia.',
    bestTime: '🕐 30 min before sunset · West-facing harbour',
    day: 'Optional day trip',
  },
  // Gravina
  {
    town: 'Gravina',
    emoji: '🏔️',
    spot: 'Ponte Viadotto — Ancient Bridge over the Gorge',
    tip: 'Shoot from below the ancient aqueduct bridge across the ravine for a dramatic low-angle view of the arches against the gorge wall. Cave dwellings are visible cut into the cliff on the far side.',
    bestTime: '🕐 Late afternoon · Warm side-light on the stonework',
    day: 'Optional day trip',
  },
  {
    town: 'Gravina',
    emoji: '⛪',
    spot: 'Gravina Gorge — Cave Church Vista',
    tip: 'The view from the ravine edge looking across at the cave churches carved into the cliff face — otherworldly and almost completely unknown to tourists. Wide-angle lens captures the full scale of the gorge.',
    bestTime: '🕐 Morning or late afternoon · Avoid harsh midday',
    day: 'Optional day trip',
  },
  // Ostuni
  {
    town: 'Ostuni',
    emoji: '🌿',
    spot: 'Whitewashed Alleys — Colourful Doors',
    tip: "Ostuni's old town is famous for its colourful doorways set against brilliant white walls. Look for bright blue, terracotta, and mustard yellow doors in the alleys near the cathedral. Evening light is best.",
    bestTime: '🕐 Late afternoon · Low angled light on walls',
    day: 'Optional day trip',
  },
  {
    town: 'Ostuni',
    emoji: '⛪',
    spot: 'Cattedrale di Ostuni — Rose Window',
    tip: 'The extraordinary Gothic rose window with 24 radiating columns. Shoot from directly below for a symmetrical upward composition. The view from the cathedral steps over the olive groves to the Adriatic coast is also exceptional.',
    bestTime: '🕐 Any time · Morning light on the façade',
    day: 'Optional day trip',
  },
];

export const TOWNS = ['All', 'Bari', 'Alberobello', 'Locorotondo', 'Polignano', 'Monopoli', 'Fasano', 'Matera', 'Ostuni', 'Trani', 'Gravina'] as const;
export type PhotoTown = typeof TOWNS[number];
