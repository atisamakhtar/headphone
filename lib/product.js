export const BRAND = "DOQAUS";
export const MODEL = "CARE1";
export const PRODUCT_SHORT = "DOQAUS CARE1";
export const PRODUCT_NAME =
  "DOQAUS CARE1 Bluetooth Headphones Over Ear, 90 Hrs Playtime Wireless Headphones, 3 EQ Modes, Foldable Hi-Fi Stereo Bass Headphones, Soft Memory Protein Earmuffs, Built-in Mic＆Wired Mode";

export const NAV = [
  { href: "/", label: "Overview" },
  { href: "/technology", label: "Technology" },
  { href: "/noise-cancelling", label: "Noise Cancelling" },
  { href: "/sound", label: "Sound" },
  { href: "/specs", label: "Specs" },
  { href: "/buy", label: "Buy" },
];

export const FINISHES = [
  {
    id: "black",
    name: "Black",
    line: "The finish in this film.",
    body: "Matte black, the way the sequence is rendered. Deep, quiet, and built to disappear in a room.",
    swatch: "linear-gradient(145deg, #3a3a3a, #0c0c0c 55%, #1a1a1a)",
  },
  {
    id: "silver",
    name: "Platinum Silver",
    line: "The same silence, in metal.",
    body: "A cooler finish with the same driver, the same processor, and the same 30-hour battery.",
    swatch: "linear-gradient(145deg, #f4f4f4, #b9b9b9 50%, #8d8d8d)",
  },
  {
    id: "blue",
    name: "Midnight Blue",
    line: "A deeper tone of the same pair.",
    body: "Midnight Blue carries the flagship noise cancelling without changing the engineering underneath.",
    swatch: "linear-gradient(145deg, #2d3f66, #10192c 55%, #1a2744)",
  },
];

export const SPEC_GROUPS = [
  {
    title: "General",
    rows: [
      ["Model", "DOQAUS CARE1"],
      [
        "Product name",
        "DOQAUS CARE1 Bluetooth Headphones Over Ear, 90 Hrs Playtime Wireless Headphones, 3 EQ Modes, Foldable Hi-Fi Stereo Bass Headphones, Soft Memory Protein Earmuffs, Built-in Mic＆Wired Mode",
      ],
      ["Type", "Closed, over-ear"],
      ["Weight", "Approx. 254 g"],
      ["Colors", "Black · Platinum Silver · Midnight Blue"],
      ["Cable", "Detachable, single-sided, approx. 1.2 m"],
      ["Plug", "Gold-plated L-shaped stereo mini plug"],
    ],
  },
  {
    title: "Driver",
    rows: [
      ["Driver unit", "30 mm"],
      ["Magnet", "Neodymium"],
      ["Frequency response", "4 Hz – 40,000 Hz (JEITA)"],
      ["Impedance, powered", "48 Ω at 1 kHz, wired"],
      ["Impedance, passive", "16 Ω at 1 kHz, wired"],
      ["Sensitivity", "103 dB/mW on · 102 dB/mW off"],
    ],
  },
  {
    title: "Noise cancelling",
    rows: [
      ["Processor", "HD Noise Canceling Processor QN3"],
      ["Microphones", "12, MEMS, omnidirectional"],
      ["Optimizer", "Adaptive NC Optimizer"],
      ["Pressure", "Atmospheric pressure optimizing"],
      ["Ambient", "Ambient Sound, Auto Ambient, Quick Attention"],
    ],
  },
  {
    title: "Battery",
    rows: [
      ["Music, NC on", "Up to 30 hours"],
      ["Music, NC off", "Up to 40 hours"],
      ["Calls, NC on", "Up to 24 hours"],
      ["Calls, NC off", "Up to 28 hours"],
      ["Charge time", "Approx. 3.5 hours, USB"],
    ],
  },
  {
    title: "Wireless",
    rows: [
      ["Bluetooth", "5.3"],
      ["Range", "Approx. 10 m"],
      ["Codecs", "LDAC · LC3 · AAC · SBC"],
      ["Upscaling", "DSEE Extreme"],
      ["Multipoint", "Yes"],
      ["Bluetooth response", "20 Hz–20 kHz · up to 40 kHz with LDAC 96 kHz"],
    ],
  },
];

export const IN_THE_BOX = [
  "DOQAUS CARE1",
  "Carrying case",
  "Connection cable",
  "USB cable",
  "Reference guide",
  "Warranty card",
];

export const NEXT_PAGE = {
  "/technology": { href: "/noise-cancelling", title: "Noise Cancelling" },
  "/noise-cancelling": { href: "/sound", title: "Sound" },
  "/sound": { href: "/specs", title: "Specifications" },
  "/specs": { href: "/buy", title: "Buy" },
  "/buy": { href: "/", title: "Overview" },
};
