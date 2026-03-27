export type GlossaryCategory = 'bread' | 'cheese' | 'seafood' | 'meat' | 'veg' | 'sweet' | 'drink';

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
  veg:     '🫒 Vegetables & Oils',
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

  {
    emoji: '🍝', name: "Spaghetti all'Assassina", pronunciation: "spah-GEH-tee all ah-sah-SEE-nah",
    desc: "Bari's own invention — spaghetti cooked dry in a very hot cast-iron pan with olive oil, tomato paste, and chilli until parts of the pasta char and blister. The result is simultaneously crispy, spicy, and deeply smoky. Nothing like standard pasta.",
    tip: 'Best at Le Nicchie in Bari Old Town — watch them make it, it looks almost violent',
    category: 'bread',
  },
  {
    emoji: '🍝', name: 'Cavatelli', pronunciation: 'kah-vah-TEH-lee',
    desc: "Small, hollow pasta shells with a ridged surface — made by rolling a small piece of dough over a fork or board. Similar to orecchiette but longer and cupped. Typical of Basilicata and parts of Puglia — often served with rocket and ricotta forte.",
    tip: 'Found across the Matera and Basilicata area — try them with sausage ragù',
    category: 'bread',
  },
  {
    emoji: '🫘', name: 'Fave e cicorie', pronunciation: 'FAH-veh eh chee-KOH-ree-eh',
    desc: "Considered the true national dish of Puglia — a humble, ancient pairing of pureed dried fava beans (silky, earthy) topped with sautéed wild chicory (bitter, garlicky). Simple peasant food that has been eaten here for 2,000 years. Deeply satisfying.",
    tip: 'Order this as a starter — it looks plain but tastes extraordinary with good olive oil drizzled on top',
    category: 'bread',
  },
  {
    emoji: '🫓', name: 'Calzone pugliese al forno', pronunciation: 'kal-TSOH-neh poo-LYEH-zeh al FOHR-noh',
    desc: "The baked Puglian calzone — completely different from the fried panzerotto. A flat, sealed parcel of bread dough filled with sautéed onions, black olives, anchovies, and Pecorino. Baked golden. Often sold in slices from bakeries.",
    tip: 'Look for it in forno windows in the morning — it sells out fast',
    category: 'bread',
  },
  {
    emoji: '🥧', name: 'Rustico leccese', pronunciation: 'ROO-stee-koh leh-CHEH-zeh',
    desc: "Lecce's defining street food — two rounds of puff pastry sealed around a warm filling of béchamel, mozzarella, fresh tomato, and black pepper. Baked until golden and puffed. Costs about €2, available at every forno in the city. One of the great simple pleasures of Italian street food.",
    tip: 'Best eaten 10–11AM straight from the oven — the filling is molten and the pastry still crisp',
    category: 'bread',
  },
  {
    emoji: '🫓', name: 'Pittule', pronunciation: 'PEE-too-leh',
    desc: "Salento's beloved fried dough fritters — soft, irregular puffs of risen dough studded with capers, olives, and anchovies, then dropped into hot oil. Eaten piping hot in paper. Found at friggitorie and market stalls throughout Lecce and the Salento peninsula.",
    tip: 'The best version has a good hit of anchovy inside — ask for the traditional version',
    category: 'bread',
  },
  {
    emoji: '🍞', name: 'Pane di Matera IGP', pronunciation: 'PAH-neh dee mah-TEH-rah',
    desc: "One of Italy's most celebrated breads — a PGI-protected sourdough loaf made from ancient durum wheat semolina varieties. Thick, craggy golden crust; dense, golden crumb. Has been baked the same way for centuries using stone-ground grain from the Basilicata plateau. Extraordinary flavour.",
    tip: 'Buy a wedge from a Matera forno and eat it with ricotta forte and a drizzle of Coratina olive oil',
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

  {
    emoji: '🧀', name: 'Caciocavallo', pronunciation: 'kah-choh-kah-VAH-loh',
    desc: "A pear-shaped semi-hard cheese hung on a string to age — the name means \"cheese on horseback\". Made from cow's milk, mild and springy when young, sharp and crumbly when aged. Often grilled or melted over bread. Used inside bombette as the melting filling.",
    tip: 'Buy a young one to bring home — it travels well and tastes nothing like what\'s sold abroad',
    category: 'cheese',
  },
  {
    emoji: '🧀', name: 'Ricotta forte', pronunciation: 'ree-KOH-tah FOHR-teh',
    desc: "Sharp, pungent, spreadable fermented ricotta — aged in terracotta pots until it develops a strong, almost aggressive flavour. Completely unlike regular ricotta. Spread on bread, used to dress pasta, or eaten with fave e cicorie. An acquired taste that locals are fiercely proud of.",
    tip: 'Try a tiny amount on bread first — it\'s strong! If you like it, buy a jar to bring home',
    category: 'cheese',
  },
  {
    emoji: '🧀', name: 'Scamorza', pronunciation: 'skah-MORT-sah',
    desc: "A stretched-curd cheese similar to mozzarella but drier and firmer — often smoked (scamorza affumicata). Sliced and grilled (alla brace) until it melts and develops golden char marks, then served with bread. Simple, smoky, and irresistible.",
    tip: 'Order scamorza alla brace as a starter if you see it — great for sharing with kids',
    category: 'cheese',
  },
  {
    emoji: '🥛', name: 'Cacioricotta', pronunciation: 'kah-choh-ree-KOH-tah',
    desc: "A tangy fresh cheese made from goat or sheep milk — simultaneously a ricotta and a pecorino in style. Crumbly, slightly sour, with a fresh dairy intensity. Crumbled over pasta, eaten fresh with bread, or used in filled pastries. Unique to Puglia and Basilicata.",
    tip: 'Often used inside fresh pasta fillings or crumbled on top of orecchiette — look for it on menus',
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

  {
    emoji: '🦪', name: 'Cozze gratinate', pronunciation: 'KOH-tzeh grah-tee-NAH-teh',
    desc: "Bari's classic baked mussels — opened mussels filled with a stuffing of breadcrumbs, parsley, garlic, Pecorino, and a little tomato, then baked until the top is golden and crunchy. The Adriatic mussel beds between Bari and Taranto produce some of Europe's finest mussels.",
    tip: 'Order as a starter at any Old Town restaurant — Antò and Le Nicchie both do excellent versions',
    category: 'seafood',
  },
  {
    emoji: '🐟', name: 'Frittura di paranza', pronunciation: 'free-TOO-rah dee pah-RAN-tsah',
    desc: "A mixed fry of small whole fish — anchovies, red mullet, whitebait, squid rings, and small prawns, all dusted in semolina flour and fried until golden and crispy. Eaten straight from the paper cone with lemon. The catch of the day, simply prepared.",
    tip: 'Best at harbour-side restaurants in Monopoli and Polignano — the fish are always the morning\'s catch',
    category: 'seafood',
  },
  {
    emoji: '🐙', name: 'Polpo arricciato', pronunciation: 'POHL-poh ah-ree-CHAH-toh',
    desc: "Raw octopus tenderised the traditional Bari way — slapped repeatedly against the harbour wall or rocks until the flesh relaxes, then served immediately in thin slices with lemon and olive oil. The texture is silky and the flavour purely oceanic. Eaten at the port on Sunday mornings.",
    tip: 'Find it at the Sunday morning crudo stalls at Porto Vecchio — it looks intimidating but is extraordinary',
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

  {
    emoji: '🥩', name: 'Braciole al sugo', pronunciation: 'brah-CHOH-leh al SOO-goh',
    desc: "Thin pork (or horse) slices rolled tightly around parsley, garlic, Pecorino, and pine nuts, then tied and slow-braised for hours in a rich tomato ragù. The rolls are served as a second course and the deeply flavoured sauce is traditionally tossed with orecchiette as a first course.",
    tip: 'One of the great Sunday lunch dishes of Puglia — order the pasta al sugo di braciole when you see it on the menu',
    category: 'meat',
  },
  {
    emoji: '🍢', name: 'Gnummareddi', pronunciation: 'nyoo-mah-REH-dee',
    desc: "One of Puglia's most ancient dishes — small parcels of lamb offal (liver, lung, heart) wrapped in intestine and grilled on a skewer over charcoal until charred and crispy. Rich, intense, deeply smoky. Traditional at Easter and local festivals. Not for the faint-hearted, but deeply authentic.",
    tip: 'Found at local festivals and some traditional macellerie — try them once for the full Puglian experience',
    category: 'meat',
  },
  {
    emoji: '🐐', name: 'Capretto al forno', pronunciation: 'kah-PREH-toh al FOHR-noh',
    desc: "Slow-roasted kid goat with potatoes, rosemary, garlic, and white wine — the Easter centrepiece across Puglia and Basilicata. March is the perfect season for it. The meat is pale, incredibly tender, and delicately flavoured. Completely different from lamb.",
    tip: 'Look for it on restaurant menus in late March — seasonal availability means it\'s fresh and local',
    category: 'meat',
  },

  // ── Vegetables & Oils ─────────────────────────────────────────────────
  {
    emoji: '🧅', name: 'Lampascioni', pronunciation: 'lam-pah-SHOH-nee',
    desc: "Wild hyacinth bulbs — a uniquely Puglian ingredient with no equivalent elsewhere. Bitter, slightly sweet, and intensely flavoured. Boiled and dressed in olive oil, pickled in jars, or fried. Found at every market and many restaurant antipasto plates. Locals eat them like olives.",
    tip: 'Try them on the antipasto plate — they\'re strange and addictive. Buy a jar to bring home.',
    category: 'veg',
  },
  {
    emoji: '🌶️', name: 'Peperoni cruschi', pronunciation: 'peh-peh-ROH-nee KROO-skee',
    desc: "A Basilicata treasure — dried sweet red peppers (from Senise) that are flash-fried in olive oil until they turn translucent and shatteringly crispy. Crumbled over pasta, eggs, or eaten as a snack. Intensely sweet, slightly smoky, with a satisfying crunch. Found throughout the Matera area.",
    tip: 'Buy a bag in Matera and crumble them over anything — they\'re addictive and pack flat in a suitcase',
    category: 'veg',
  },
  {
    emoji: '🫒', name: 'Olio extravergine DOP Puglia', pronunciation: 'OH-lyoh ex-trah-VER-jee-neh',
    desc: "Puglia produces over 40% of all Italian olive oil — more than entire countries. The local Coratina variety (from the Bari hills) is intensely grassy, peppery, and bitter in the best way. A completely different experience from supermarket oil. The pepper kick at the back of the throat is the sign of high polyphenols.",
    tip: 'Buy a bottle from a masseria or olive oil producer on the roadside — Coratina DOP from the Bari hills is the best',
    category: 'veg',
  },
  {
    emoji: '🌿', name: 'Cicoria selvatica', pronunciation: 'chee-KOH-ree-ah seh-VAH-tee-kah',
    desc: "Wild chicory — the bitter dark green that appears on almost every antipasto plate in Puglia. Blanched then sautéed in olive oil with garlic and dried chilli. Earthy, slightly bitter, and deeply satisfying. Paired with fava bean purée in the classic fave e cicorie.",
    tip: 'Don\'t confuse it with radicchio — it\'s a wild green, not a salad leaf. Eaten warm, never raw.',
    category: 'veg',
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

  {
    emoji: '🍮', name: 'Fruttone di Lecce', pronunciation: 'froo-TOH-neh dee LEH-cheh',
    desc: "Lecce's most distinctive pastry — a large oval of short-crust filled with soft almond paste, a little fig jam, and a hint of spice, then coated in dark chocolate. Sold from every pasticceria in the city. The almond paste is made from Puglian almonds. Unmistakably Leccese.",
    tip: 'Buy one at Caffè Alvino alongside your pasticciotto — the combination is the definitive Lecce breakfast',
    category: 'sweet',
  },
  {
    emoji: '🥮', name: 'Bocconotto', pronunciation: 'boh-koh-NOH-toh',
    desc: "A Lecce speciality — a small dome of crumbly short-crust pastry filled with almond paste, dark chocolate, and sour cherry jam, then dusted in icing sugar. Different from the Calabrian version. Dense, intensely flavoured, and perfectly sized for two bites.",
    tip: 'Found at Bar Natale Pasticceria in Lecce — they make one of the best versions in the city',
    category: 'sweet',
  },
  {
    emoji: '🍩', name: 'Zeppole di San Giuseppe', pronunciation: 'DZEH-poh-leh dee san joo-ZEH-peh',
    desc: "Choux pastry rings filled with custard cream and topped with a sour cherry — traditionally made for St. Joseph's Day (March 19) but sold throughout March and April. Can be baked or fried (the fried version is richer and better). One of the great Italian seasonal pastries.",
    tip: "March is the perfect time — you're visiting at exactly the right moment. Fried version (fritte) is worth the extra calories.",
    category: 'sweet',
  },
  {
    emoji: '☕', name: 'Granita di caffè', pronunciation: 'grah-NEE-tah dee KAF-feh',
    desc: "A coarsely frozen coffee ice — rougher and more intense than a slushie, topped with a generous cloud of whipped cream (panna). A Sicilian export that has become inseparable from the Salento summer. Served in a brioche or a glass. Even in cool March weather it's worth trying at least once.",
    tip: 'Order it at a Lecce bar in the afternoon — ask for con panna (with cream)',
    category: 'sweet',
  },
  {
    emoji: '🍮', name: 'Tette delle monache', pronunciation: 'TEH-teh DEH-leh moh-NAH-keh',
    desc: "\"Nun's breasts\" — small cream puffs of choux pastry filled with vanilla pastry cream, slightly domed and dusted with icing sugar. A traditional convent pastry from Matera. The name is medieval and the recipe predates the Renaissance. Lighter than they look.",
    tip: 'Found at ALTO Caffè on Piazza Vittorio Veneto in Matera — order two',
    category: 'sweet',
  },
  {
    emoji: '🍬', name: 'Calzoncelli', pronunciation: 'kal-tson-CHEH-lee',
    desc: "Small half-moon fried pastries filled with fig jam mixed with grape must, toasted almonds, cinnamon, and dark chocolate. A Christmas sweet by tradition but sold in bakeries year-round in Puglia. Crispy outside, intensely sweet and figgy inside.",
    tip: 'Found in pastry shops throughout Bari\'s Old Town — excellent with an afternoon espresso',
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
  {
    emoji: '🍾', name: 'Locorotondo DOC', pronunciation: 'loh-koh-roh-TON-doh',
    desc: "A crisp, dry white wine made from Verdeca and Bianco d'Alessano grapes grown on the hills of Valle d'Itria. Pale straw yellow, intensely aromatic, with notes of white peach, almonds, and herbs. One of Puglia's most respected white wines — the perfect match for the local seafood antipasto.",
    tip: 'Buy a bottle from an enoteca in Locorotondo itself — it costs about €8 and tastes remarkable',
    category: 'drink',
  },
  {
    emoji: '🌸', name: 'Fiano Minutolo', pronunciation: 'fee-AH-noh mee-noo-TOH-loh',
    desc: "An ancient Salento white grape — intensely aromatic with overwhelming scents of peach blossom, apricot, and jasmine. Sometimes called \"the Muscat of Puglia\" for its perfume. Bone dry on the palate despite the floral aroma. An extraordinary, unusual wine that very few people outside Puglia know.",
    tip: 'Ask for it by name at wine bars in Lecce or Ostuni — wine-knowledgeable locals will be impressed',
    category: 'drink',
  },
  {
    emoji: '🍊', name: 'Aperol Spritz', pronunciation: 'AH-peh-rol SPRITZ',
    desc: "Italy's universal aperitivo — Aperol (bitter orange liqueur) topped with Prosecco and a splash of soda, served over ice with an orange slice. Ordered from 6–9PM at bars across Italy. In Puglia, it almost always comes with free stuzzichini (snacks). The colour of an Adriatic sunset.",
    tip: 'Order one on the Lungomare at Bari or at Porto Vecchio in Monopoli as the sun goes down',
    category: 'drink',
  },
  {
    emoji: '🌿', name: 'Amaro del Capo', pronunciation: 'AH-mah-roh del KAH-poh',
    desc: "A herbal digestivo from Calabria — made from 29 herbs, roots, and citrus peels including bergamot, liquorice, mint, and juniper. Served ice-cold (traditionally from the freezer) in a chilled shot glass. Powerfully bitter-sweet, intensely aromatic, and the go-to digestivo across southern Italy.",
    tip: 'Order it after dinner instead of limoncello for a change — ask for it ghiacciato (from the freezer)',
    category: 'drink',
  },
  {
    emoji: '🍋', name: 'Granita di mandorla', pronunciation: 'grah-NEE-tah dee man-DOHR-lah',
    desc: "Almond granita — a coarsely frozen almond milk slush with an intensely nutty, slightly sweet flavour. A Sicilian-Puglian tradition that has spread across the south. Often served in a brioche bun for breakfast (granita con brioche) — the combination sounds wrong and tastes extraordinary.",
    tip: 'Try it for breakfast in Lecce or Polignano — especially in the traditional brioche format',
    category: 'drink',
  },
];
