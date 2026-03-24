export type GlossaryCategory = 'bread' | 'cheese' | 'seafood' | 'meat' | 'sweet' | 'drink';

export interface GlossaryItem {
  emoji: string;
  name: string;
  pronunciation: string;
  desc: string;
  tip: string;
  category: GlossaryCategory;
}

export const CATEGORY_LABELS: Record<GlossaryCategory, string> = {
  bread:   '🫓 Pasta & Bread',
  cheese:  '🧀 Cheese & Antipasti',
  seafood: '🐟 Seafood',
  meat:    '🥩 Meat',
  sweet:   '🍯 Sweets',
  drink:   '🍷 Drinks',
};

export const glossary: GlossaryItem[] = [
  // ── Pasta & Bread ─────────────────────────────────────────────────────
  {
    emoji: '🍝', name: 'Orecchiette', pronunciation: 'oh-reh-KYEH-teh',
    desc: "Puglia's signature pasta — small ear-shaped pieces handmade from semolina. Chewy and thick, they hold sauce beautifully. The name means \"little ears\".",
    tip: 'Watch the ladies on Largo Albicocca make them by hand every morning',
    category: 'bread',
  },
  {
    emoji: '🌿', name: 'Orecchiette alle cime di rapa', pronunciation: 'OH-reh-KYEH-teh AH-leh CHEE-meh dee RAH-pah',
    desc: "The classic Puglian combo — orecchiette tossed with sautéed turnip tops, garlic, anchovies, and chilli. Earthy, slightly bitter, and deeply satisfying. The region's most iconic pasta dish.",
    tip: 'Order this at least once — it tastes like Puglia in a bowl',
    category: 'bread',
  },
  {
    emoji: '🫓', name: 'Focaccia barese', pronunciation: 'foh-KAH-chah bah-REH-zeh',
    desc: "Bari's famous thick focaccia — soft and airy inside, crisp and olive-oil-soaked outside. Topped with halved cherry tomatoes pressed in and black olives. Nothing like the dry versions you get elsewhere.",
    tip: 'Best eaten warm from the bakery — Melo Coffee does an excellent version',
    category: 'bread',
  },
  {
    emoji: '🥨', name: 'Taralli', pronunciation: 'tah-RAH-lee',
    desc: "Crunchy ring-shaped bread snacks made with white wine, olive oil, and fennel seeds. Somewhere between a cracker and a breadstick. Eaten as an aperitivo snack or with cheese.",
    tip: 'The orecchiette ladies on Largo Albicocca also sell fresh taralli — try them straight from the bag',
    category: 'bread',
  },
  {
    emoji: '🥟', name: 'Panzerotto', pronunciation: 'pan-dzeh-ROH-toh',
    desc: "A fried crescent-shaped dough pocket filled with tomato and mozzarella — like a deep-fried calzone. Crispy shell, molten inside, best eaten standing up at the counter. Bari's beloved street food.",
    tip: 'Mastro Ciccio near the Old Town is the go-to spot',
    category: 'bread',
  },
  {
    emoji: '🥙', name: 'Puccia', pronunciation: 'POO-chah',
    desc: "A round, soft local bread roll made from durum wheat. Split open and filled with whatever you like — mozzarella, cured meats, grilled vegetables. The Puglian sandwich bread. Very child-friendly.",
    tip: 'Try it filled with burrata and prosciutto crudo',
    category: 'bread',
  },
  {
    emoji: '🫓', name: 'Frisella', pronunciation: 'free-ZEH-lah',
    desc: "A twice-baked, ring-shaped dry bread that you soak briefly in water, then dress with tomatoes, olive oil, oregano, and salt. Light, crunchy, and very refreshing. A Puglian staple in summer.",
    tip: 'Don\'t soak it too long — a quick dip is all it needs',
    category: 'bread',
  },

  // ── Cheese & Antipasti ────────────────────────────────────────────────
  {
    emoji: '🧀', name: 'Burrata', pronunciation: 'boo-RAH-tah',
    desc: "Fresh mozzarella with a creamy, pillowy centre of stracciatella. Originally from Andria (just north of Bari). When it's this fresh, it tastes completely different from what you get abroad — soft, milky, and rich.",
    tip: 'Always served at room temperature — never fridge-cold. Order as a starter everywhere.',
    category: 'cheese',
  },
  {
    emoji: '🍦', name: 'Stracciatella', pronunciation: 'strah-chah-TEH-lah',
    desc: "The creamy shredded interior of burrata — cream mixed with pulled mozzarella. Sometimes served on its own, spread on bread or with tomatoes. Incredibly rich.",
    tip: 'If you see it on the menu as a starter, order it. Spread it on focaccia.',
    category: 'cheese',
  },
  {
    emoji: '🥗', name: 'Antipasto pugliese', pronunciation: 'an-TEE-pah-stoh poo-LYEH-zeh',
    desc: "A mixed starter plate of local cured meats (capocollo, soppressata), local cheeses, olives, pickled vegetables, and bread. A full meal in itself in Puglia — pace yourself.",
    tip: 'Great for sharing at the table with the little one — lots of things to pick at',
    category: 'cheese',
  },

  // ── Seafood ───────────────────────────────────────────────────────────
  {
    emoji: '🐙', name: 'Polpo alla pignata', pronunciation: 'POHL-poh AH-lah peen-YAH-tah',
    desc: "Octopus slow-braised in a terracotta pot with tomatoes, olives, capers, and local wine. The result is incredibly tender and flavourful. A traditional Bari fishermen's dish.",
    tip: 'Often on the specials board at Antò Ristorante — order it if you see it',
    category: 'seafood',
  },
  {
    emoji: '🦔', name: 'Ricci di mare', pronunciation: 'REE-chee dee MAH-reh',
    desc: "Sea urchin roe — briny, iodine-rich, and intensely oceanic. Eaten raw on bread or tossed with spaghetti and a little oil. March is a great season for them in the Adriatic.",
    tip: 'For adventurous adults only — ask the restaurant what\'s fresh that day',
    category: 'seafood',
  },
  {
    emoji: '🍚', name: 'Tiella barese', pronunciation: 'tee-EH-lah bah-REH-zeh',
    desc: "The quintessential Bari one-pot dish — layers of rice, potatoes, mussels, onions, tomatoes, and Pecorino baked in a round terracotta tray. Rich, filling, and uniquely Barese.",
    tip: 'A Friday and Sunday dish in traditional homes — find it at restaurants in the Old Town',
    category: 'seafood',
  },

  // ── Meat ──────────────────────────────────────────────────────────────
  {
    emoji: '🥩', name: 'Bombette pugliesi', pronunciation: 'bom-BEH-teh poo-LYEH-zee',
    desc: "Pork neck slices rolled around capocollo, Caciocavallo cheese, and herbs, then grilled on a skewer. The cheese melts inside as it cooks — juicy, slightly smoky, irresistible. A Puglian street food staple.",
    tip: 'A favourite at local markets and butcher shops — look for them sizzling on the grill',
    category: 'meat',
  },
  {
    emoji: '🍖', name: 'Agnello al forno', pronunciation: 'ah-NYEH-loh al FOHR-noh',
    desc: "Slow-roasted lamb with potatoes, rosemary, and white wine — a classic Sunday lunch in Puglia. The lamb here is particularly sweet and tender, raised on the scrubland of the Murgia plateau.",
    tip: 'Found in traditional trattorias — Le Nicchie and Antò both do excellent versions',
    category: 'meat',
  },

  // ── Sweets ────────────────────────────────────────────────────────────
  {
    emoji: '🥐', name: 'Pasticciotto', pronunciation: 'pah-stee-CHOH-toh',
    desc: "Short-crust pastry case filled with a dense, creamy custard (crema pasticcera). Eaten warm for breakfast. Originally from Lecce but now beloved across Puglia. Best of the morning pastries.",
    tip: 'Order it warm (caldo) — it\'s a completely different experience cold',
    category: 'sweet',
  },
  {
    emoji: '🍯', name: 'Cartellate', pronunciation: 'kar-teh-LAH-teh',
    desc: "Fried pastry spirals drizzled with vincotto (cooked wine syrup) or honey. Crunchy, sweet, and sticky. Traditionally made at Christmas but found year-round in bakeries. Perfect for the table.",
    tip: 'Try them with vincotto rather than honey — the grape-must syrup is uniquely Puglian',
    category: 'sweet',
  },
  {
    emoji: '🍦', name: 'Gelato — gusti pugliesi', pronunciation: 'jeh-LAH-toh',
    desc: "Local flavours to seek out: **fico** (fig), **mandorla** (almond), **pistacchio di Bronte**, **limone di Sorrento**. Puglia grows figs and almonds in abundance — the gelato shows it.",
    tip: 'Pistachio and fig are the two must-try Puglian flavours',
    category: 'sweet',
  },

  // ── Drinks ────────────────────────────────────────────────────────────
  {
    emoji: '🍷', name: 'Primitivo', pronunciation: 'pree-mee-TEE-voh',
    desc: "Puglia's most celebrated red wine — deep, rich, and full-bodied with flavours of dark fruit, chocolate, and spice. Grown around Manduria (1h from Bari). The grape is a genetic ancestor of Zinfandel.",
    tip: 'Order a glass with the lamb or pasta — ask for something local (locale)',
    category: 'drink',
  },
  {
    emoji: '🍷', name: 'Negramaro', pronunciation: 'neh-grah-MAH-roh',
    desc: "Another iconic Puglian red — the name means \"black bitter\" but it's actually smooth and velvety with notes of cherry and tobacco. Slightly lighter than Primitivo. From the Salento area.",
    tip: 'Pairs beautifully with orecchiette al ragù',
    category: 'drink',
  },
  {
    emoji: '🍋', name: 'Limoncello', pronunciation: 'lee-mon-CHEH-loh',
    desc: "Lemon liqueur made from the zest of large Sorrento or Amalfi lemons steeped in spirit. Served ice-cold as a digestivo after dinner — sometimes complimentary at the end of a meal.",
    tip: 'La Cantina dello Zio serves it as a complimentary closer — let the little one have the lemon zest!',
    category: 'drink',
  },
  {
    emoji: '☕', name: 'Caffè leccese', pronunciation: 'KAF-feh leh-CHEH-zeh',
    desc: "Espresso poured over ice and almond milk (latte di mandorla). A uniquely Puglian iced coffee — sweet, nutty, and refreshing. Not to be confused with a regular iced latte.",
    tip: 'Ask for it at any café in summer — worth trying even in March if the day is warm',
    category: 'drink',
  },
];
