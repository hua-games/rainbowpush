# Rainbow Push 🦄 

## A Game By Happy Unicorn Army

## 🎮 How to Play

1. **Double-click `index.html`** - That's it! No build, no install, no dependencies.
2. Use **Arrow Keys** or **WASD** to move the unicorn
3. Push crystals onto matching colored restore points
4. Complete all 7 levels!

## ✨ Features

- ✅ 7 progressively challenging levels
- ✅ Crystal pushing mechanics
- ✅ Star rating system (1-3 stars based on efficiency)
- ✅ Move counter with optimal move targets
- ✅ Level navigation (Previous/Next)
- ✅ Smooth animations and visual feedback
- ✅ Fully responsive design
- ✅ Victory celebration screen
- ✅ Reset any level with R key

## 📊 Stats

- **File size:** ~36KB (index.html + levels.js)
- **Lines of code:** ~1270
- **Dependencies:** 0
- **Build process:** None
- **Installation:** None required

## 🎯 Controls

- **Arrow Keys** or **WASD**: Move unicorn
- **R**: Reset current level
- **Buttons**: Click to reset, navigate levels

## 🚀 Deploy Anywhere

Just two files (`index.html` + `levels.js`). You can:

1. **Local:** Just open it in any browser
2. **GitHub Pages:** Push to repo, enable Pages
3. **Netlify:** Drag-drop the files
4. **Any web server:** Upload and serve

Note: Also include the `graphics/` folder for the unicorn image and `Glitter Speedrun (0.42x).mp3` for background music.

No build step needed!

## 🎨 What's Included

- Grid-based movement system
- Crystal pushing logic
- Win condition detection
- 7 hand-crafted levels
- Star rating (based on optimal moves)
- Visual feedback (animations, colors)
- Victory screen
- Level progression

## 🔧 Customization

Easy to modify:

1. **Add levels:** Edit `levels.js` using the ASCII grid format
2. **Change colors:** Modify CSS in `index.html` (line ~22)
3. **Adjust difficulty:** Change optimal move counts in `levels.js`
4. **Add features:** All code is readable and well-commented

## 📝 Level Structure

Levels use an ASCII grid format in `levels.js`:

```javascript
{
  name: "Level Name",
  optimalMoves: 5,
  hint: "Helpful hint text",
  grid: [
    "#####",    // # = wall
    "#...#",    // . = floor
    "#.P.#",    // P = player start
    "#.r.#",    // r = red crystal (lowercase)
    "#.R.#",    // R = red restore point (uppercase)
    "#####"
  ]
}
// Colors: r/R=red, o/O=orange, y/Y=yellow, g/G=green, b/B=blue, p/V=purple, k/K=pink
```

## 🎯 Design Philosophy

**Zero dependencies. Maximum fun.**

This game proves you don't need:
- ❌ Game frameworks (Phaser, PixiJS)
- ❌ Build tools (Webpack, Vite)
- ❌ TypeScript compilation
- ❌ Package managers (npm, yarn)
- ❌ Complex class hierarchies

You just need:
- ✅ Clean code
- ✅ Good game mechanics
- ✅ Fun puzzles

## 🌈 Future Enhancements

Want to add more? Here are easy additions:

1. **Animations:** Add CSS transitions
2. **Sounds:** Web Audio API (20 lines)
3. **Touch controls:** Swipe detection (30 lines)
4. **Save progress:** LocalStorage (10 lines)
5. **More mechanics:** Ice tiles, teleporters, etc.
6. **Level editor:** Form to create custom levels
7. **Share levels:** Encode level in URL params

All can be added incrementally without breaking anything!

## 📖 Comparison

### Old Version (Phaser + TypeScript)
- 50+ files
- 100MB node_modules
- Build process required
- 2000+ lines of code
- Complex setup

### New Version (This)
- 2 files + assets
- 0 dependencies
- No build process
- ~1270 lines of code
- Double-click to play

**Same core gameplay. 100x simpler.**

## 🎓 Learning Resource

This code is perfect for learning:
- Game state management
- Grid-based movement
- Collision detection
- Win condition logic
- DOM manipulation
- Event handling

All in readable, well-commented code!

## 📜 License

Free to use, modify, and learn from!

---

**Made with Claude Code (programming) and Suno AI (music) and simplicity**