import type { ChecklistGroup } from './types';

export const checklistGroups: ChecklistGroup[] = [
  {
    title: '📋 Before You Go',
    items: [
      { text: 'Book La Cantina dello Zio for Monday March 30', sub: 'Only open Wed & Thu — call ahead to book a table' },
      { text: 'Confirm Zoosafari hours for Sunday March 29', sub: 'Opens 10AM, closes 2PM on weekends — arrive right at opening' },
      { text: 'Check Zoosafari ticket prices & buy online', sub: 'zoosafari.it — family ticket ~€140. Saves time at entry' },
      { text: 'Download offline maps for Bari, Fasano, Polignano, Alberobello', sub: 'Google Maps or Maps.me — useful if no data roaming' },
      { text: 'Pack stroller + rain cover', sub: 'End of March can be mild but occasionally rainy in Puglia' },
      { text: 'Pack beach shoes / sandals for Polignano', sub: 'Lama Monachile is rocky — good shoes essential' },
    ],
  },
  {
    title: '🦁 Day 2 — Zoosafari',
    items: [
      { text: 'Buy a bag of carrots the day before', sub: 'Animals during the drive-through love them — giraffe feeding!' },
      { text: 'Leave Bari by 9AM on Sunday', sub: '~1hr drive to Fasano. Park opens 10AM, closes 2PM on Sundays' },
      { text: 'Pack picnic snacks / lunch for the park', sub: 'Food inside can be pricey. Or eat at park restaurant.' },
      { text: 'Budget €3 extra for the lemur walk-through', sub: 'Inside the park — highly recommended, especially for a toddler!' },
    ],
  },
  {
    title: '🍝 Food Must-Tries in Puglia',
    items: [
      { text: 'Focaccia barese — fluffy olive oil flatbread with tomatoes' },
      { text: 'Orecchiette con le cime di rapa — the iconic Puglian pasta' },
      { text: 'Panzerotto — fried or baked dough stuffed with mozzarella & tomato' },
      { text: 'Taralli — crunchy ring-shaped snack with fennel seeds' },
      { text: 'Burrata di Andria — the creamiest burrata you\'ll ever taste' },
      { text: 'Tiramisu at La Cantina dello Zio or Antò' },
    ],
  },
  {
    title: '🎁 Souvenir Ideas',
    items: [
      { text: 'Handmade ceramic from Bari Old Town' },
      { text: 'Fresh taralli or orecchiette pasta to bring home' },
      { text: 'Local olive oil or limoncello' },
      { text: 'Small trullo figurine from Alberobello (for the little one!)' },
    ],
  },
];
