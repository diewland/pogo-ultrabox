// items
let STAR_PIECE  = { title: 'Star Piece',        coin: 0 };
let INCENSE     = { title: 'Incense',           coin: 50 };
let LUCKY_EGG   = { title: 'Lucky Egg',         coin: 50 };
let LURE        = { title: 'Lure',              coin: 85 };
let RAIDPASS_P  = { title: 'Raidpass',          coin: 100 };
let INCUBE_S    = { title: 'Super Incubator',   coin: 200 };
let ITEMS = [
  STAR_PIECE,
  INCENSE,
  LUCKY_EGG,
  LURE,
  RAIDPASS_P,
  INCUBE_S,
];

// ultraboxes
let ULTRABOXES = [
  { // ultra bonus unlock 2018
    date: new Date(2018, 9-1, 13),
    items: [
      { item: INCENSE,    qty: 6 },
      { item: LUCKY_EGG,  qty: 6 },
      { item: INCUBE_S,   qty: 12 },
      { item: RAIDPASS_P, qty: 8 },
    ],
  },
  { // ultra bonus unlock mewtwo 2018
    date: new Date(2018, 9-1, 20),
    items: [
      { item: LUCKY_EGG,  qty: 6 },
      { item: INCUBE_S,   qty: 10 },
      { item: RAIDPASS_P, qty: 14 },
      { item: STAR_PIECE, qty: 6 },
    ],
  },
  {
    // suicune research breakthrough 2018
    date: new Date(2018, 10-1, 1),
    items: [
      { item: INCENSE,    qty: 8 },
      { item: INCUBE_S,   qty: 10 },
      { item: RAIDPASS_P, qty: 10 },
      { item: STAR_PIECE, qty: 8 },
    ],
  },
  {
    // gen 4 release wave 1 2018
    date: new Date(2018, 10-1, 15),
    items: [
      { item: LURE,       qty: 8 },
      { item: INCUBE_S,   qty: 12 },
      { item: RAIDPASS_P, qty: 6 },
      { item: STAR_PIECE, qty: 9 },
    ],
  },
  { // halloween 2018
    date: new Date(2018, 10-1, 30),
    items: [
      { item: LUCKY_EGG,  qty: 6 },
      { item: INCENSE,    qty: 6 },
      { item: INCUBE_S,   qty: 10 },
      { item: RAIDPASS_P, qty: 12 },
    ],
  },
  { // ingress prime release 2018
    date: new Date(2018, 11-1, 7),
    items: [
      { item: INCENSE,    qty: 4 },
      { item: STAR_PIECE, qty: 14 },
      { item: INCUBE_S,   qty: 9 },
      { item: RAIDPASS_P, qty: 10 },
    ],
  },
  { // hatchathon 2018
    date: new Date(2018, 11-1, 16),
    items: [
      { item: LURE,       qty: 5 },
      { item: LUCKY_EGG,  qty: 6 },
      { item: INCUBE_S,   qty: 12 },
      { item: RAIDPASS_P, qty: 8 },
    ],
  },
];
