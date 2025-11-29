// LEGEND:
// # = wall
// . = floor
// P = player start
// r/R = red crystal/restore point
// o/O = orange crystal/restore point
// y/Y = yellow crystal/restore point
// g/G = green crystal/restore point
// b/B = blue crystal/restore point
// p/V = purple crystal/restore point (V to avoid conflict with P)
// k/K = pink crystal/restore point

const levelDefinitions = [
  {
    name: "First Push",
    optimalMoves: 3,
    hint: "Push the red crystal down!",
    grid: [
      "#####",
      "#...#",
      "#.P.#",
      "#...#",
      "#.r.#",
      "#...#",
      "#.R.#",
      "#####"
    ]
  },
  {
    name: "Two Colors",
    optimalMoves: 7,
    hint: "Two crystals, two colors!",
    grid: [
      "######",
      "#....#",
      "#Pr.R#",
      "#....#",
      "#.y.Y#",
      "#....#",
      "######"
    ]
  },
  {
    name: "Triple Threat",
    optimalMoves: 15,
    hint: "Three crystals to organize!",
    grid: [
      "######",
      "#P...#",
      "#.r.R#",
      "#..g.#",
      "#.b.B#",
      "#....#",
      "#...G#",
      "#....#",
      "######"
    ]
  },
  {
    name: "Four in a Row",
    optimalMoves: 20,
    hint: "Four crystals in a line!",
    grid: [
      "######",
      "#Pr.R#",
      "#....#",
      "#.o.O#",
      "#....#",
      "#.y.Y#",
      "#....#",
      "#.g.G#",
      "######"
    ]
  },
  {
    name: "The Five Points",
    optimalMoves: 39,
    hint: "Five colors shine!",
    grid: [
      "#######",
      "#.r..R#",
      "#.....#",
      "#.o..O#",
      "#.....#",
      "#Py..Y#",
      "#.....#",
      "#.g..G#",
      "#.....#",
      "#.b..B#",
      "#######"
    ]
  },
  {
    name: "Six Gems",
    optimalMoves: 44,
    hint: "Six gems to place!",
    grid: [
      "#######",
      "#.r..R#",
      "#.o..O#",
      "#.....#",
      "#.y..Y#",
      "#Pg..G#",
      "#.....#",
      "#.b..B#",
      "#.p..V#",
      "#.....#",
      "#######"
    ]
  },
  {
    name: "🌈 RAINBOW FINALE 🌈",
    optimalMoves: 52,
    hint: "All seven colors of the rainbow!",
    grid: [
      "#######",
      "#.r..R#",
      "#.o..O#",
      "#.y..Y#",
      "#.....#",
      "#.g..G#",
      "#Pb..B#",
      "#.....#",
      "#.p..V#",
      "#.k..K#",
      "#.....#",
      "#######"
    ]
  }
];

// Parser function to convert ASCII grid to game format
function parseLevels(definitions) {
  const colorMap = {
    'r': 'red', 'R': 'red',
    'o': 'orange', 'O': 'orange',
    'y': 'yellow', 'Y': 'yellow',
    'g': 'green', 'G': 'green',
    'b': 'blue', 'B': 'blue',
    'p': 'purple', 'V': 'purple',
    'k': 'pink', 'K': 'pink'
  };

  return definitions.map(def => {
    const height = def.grid.length;
    const width = def.grid[0].length;
    const tiles = [];
    const crystals = [];
    const restorePoints = [];
    let player = null;

    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        const char = def.grid[y][x];

        // Parse tile type
        if (char === '#') {
          row.push(1); // wall
        } else {
          row.push(0); // floor
        }

        // Parse player
        if (char === 'P') {
          player = { x, y };
        }

        // Parse crystals (lowercase letters)
        if (char.match(/[roygbpk]/)) {
          crystals.push({ x, y, color: colorMap[char] });
        }

        // Parse restore points (uppercase letters except P)
        if (char.match(/[ROYGBVK]/)) {
          restorePoints.push({ x, y, color: colorMap[char] });
        }
      }
      tiles.push(row);
    }

    return {
      name: def.name,
      width,
      height,
      tiles,
      player,
      crystals,
      restorePoints,
      optimalMoves: def.optimalMoves,
      hint: def.hint
    };
  });
}

// Export parsed levels
const levels = parseLevels(levelDefinitions);
