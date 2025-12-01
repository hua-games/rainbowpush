// LEGEND:
// # = wall
// . = floor
// P = player start
// r/R = red crystal/restore point
// o/O = orange crystal/restore point
// y/Y = yellow crystal/restore point
// g/G = green crystal/restore point
// b/B = blue crystal/restore point
// i/I = indigo crystal/restore point
// v/V = violet crystal/restore point

const levelDefinitions = [
  {
    name: "One More Time",
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
    name: "Two To Tango",
    optimalMoves: 8,
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
    name: "Back And Fourth",
    optimalMoves: 17,
    hint: "Four crystals in a line!",
    grid: [
      "######",
      "#Pr.R#",
      "#....#",
      "#O.o.#",
      "#....#",
      "#.y.Y#",
      "#....#",
      "#G.g.#",
      "######"
    ]
  },
  {
    name: "Fave Five",
    optimalMoves: 40,
    hint: "Five colors shine!",
    grid: [
      "#######",
      "#.G.B.#",
      "#..r..#",
      "#O.o..#",
      "#.....#",
      "#P.ybY#",
      "#.....#",
      "#.....#",
      "#.gR..#",
      "#.....#",
      "#######"
    ]
  },
  {
    name: "Scintillating Six",
    optimalMoves: 79,
    hint: "Six gems to place!",
    grid: [
      "#######",
      "#Y.I.R#",
      "#..b..#",
      "#.....#",
      "#..r..#",
      "#.yPg.#",
      "#..o..#",
      "#.....#",
      "#..i..#",
      "#G.B.O#",
      "#######"
    ]
  },
  {
    name: "Lucky Seven",
    optimalMoves: 95,
    hint: "All seven colors of the rainbow!",
    grid: [
      "#######",
      "#.....#",
      "#..P..#",
      "#.r.V.#",
      "#.o.I.#",
      "#.y.B.#",
      "#.g.G.#",
      "#.b.Y.#",
      "#.i.O.#",
      "#.v.R.#",
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
    'i': 'indigo', 'I': 'indigo',
    'v': 'violet', 'V': 'violet'
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
        if (char.match(/[roygbiv]/)) {
          crystals.push({ x, y, color: colorMap[char] });
        }

        // Parse restore points (uppercase letters except P)
        if (char.match(/[ROYGBIV]/)) {
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
