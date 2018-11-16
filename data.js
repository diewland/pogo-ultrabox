// items
let STAR_PIECE  = { coin: 0 };
let INCENSE     = { coin: 50 };
let LUCKY_EGG   = { coin: 50 };
let LURE        = { coin: 85 };
let RAIDPASS_P  = { coin: 100 };
let INCUBE_S    = { coin: 200 };

let ULTRABOXES = [
  {
    date: new Date(2018, 9-1, 13),
    items: [
      { item: INCENSE,    qty: 6 },
      { item: LUCKY_EGG,  qty: 6 },
      { item: INCUBE_S,   qty: 12 },
      { item: RAIDPASS_P, qty: 8 },
    ],
  },
  {
    date: new Date(2018, 11-1, 7),
    items: [
      { item: INCENSE,    qty: 4 },
      { item: STAR_PIECE, qty: 14 },
      { item: INCUBE_S,   qty: 9 },
      { item: RAIDPASS_P, qty: 10 },
    ],
  },
  {
    date: new Date(2018, 11-1, 16),
    items: [
      { item: LURE,       qty: 5 },
      { item: LUCKY_EGG,  qty: 6 },
      { item: INCUBE_S,   qty: 12 },
      { item: RAIDPASS_P, qty: 8 },
    ],
  },
];
