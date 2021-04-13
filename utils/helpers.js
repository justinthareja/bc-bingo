export const BINGO_OPTIONS = [
  "Mike's Pastry Box",
  "Smell of Weed",
  "Doing Yoga",
  "Scooter Kid",
  "Adult Chasing Kid",
  "Slangin' Frisbee (175g)",
  "Feeding Wildlife",
  "Dog Actively Pooping",
  "Colonial Actor",
  "Influencer in the Wild",
  "Phone Eats First",
  "Squad of 3 or More Bluebikes",
  "Abandoned Bluebike",
  "Engagement Pictures",
  "Wedding Pictures",
  "A Rally",
  "A Political Statement",
  "A Proposal",
  "Yankee Paraphernalia",
  "Bad Sunburn",
  "Blatant Tourism",
  "Indecent Exposure",
  "A Horse",
  "In trouble with Law Enforcement",
  "Excessively Loud Music",
  "Rollerblader in Full Pads",
  "Police Sirens",
  "5 or More Retail Bags",
  "Dropped Ice Cream",
  "Sleeping",
  "RC Car Dad",
  "Regina Pizza Box",
  "Dozen of abandoned masks",
  "Kid chasing pigeons",
  "Wasted",
  "A Nipple",
  "A Flying Kite",
  "An Act of Kindness",
  "Organized Sports",
  "Hammock",
];

// Checks for 5 in a row
export function checkWin(cells) {
  const lines = [
    // Horizontal
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    // Vertical
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 12, 18, 23],
    [4, 9, 14, 19, 24],

    // Diag
    [0, 6, 12, 18, 24],
    [20, 16, 12, 8, 4],
  ];

  for (var i = 0; i < lines.length; i++) {
    const line = lines[i];
    const cellsToCheck = line.map((i) => cells[i]);
    const hasWon = cellsToCheck.every((cell) => cell.isChecked);

    if (hasWon) {
      return line;
    }
  }

  return [];
}

export function shuffleArray(array) {
  let result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getBingoOptions(length) {
  let options = shuffleArray(BINGO_OPTIONS);
  if (typeof length === "number") {
    options = options.slice(0, length);
  }

  return options;
}
