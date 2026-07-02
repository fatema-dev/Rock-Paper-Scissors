# Rock Paper Scissors

A classic 5-round Rock Paper Scissors game, built with HTML, CSS, and JavaScriptو  with a full browser UIز

**Live demo:** https://fatema-dev.github.io/Rock-Paper-Scissors/

## Features

- 🪨📄✂️ **Click-to-play interface** — choose Rock, Paper, or Scissors with a button instead of typing into the console
- 🤖 **Simulated opponent "thinking" delay** — a brief "Opponent is selecting an option..." message before the result reveals, giving the game a more natural pace
- 🏆 **First to 5 points** — play a full match, winner is first to reach a total of 5 points
- 📊 **View Score** — check the running score at any point during the match
- 🔄 **Reset** — start a new match at any time

## Tech Stack

- **HTML** — game UI structure
- **CSS** — styling and layout
- **JavaScript (vanilla)** — game logic, round tracking, and DOM updates

## How to Play

1. Open the [live demo](https://fatema-dev.github.io/Rock-Paper-Scissors/)
2. Click **Rock**, **Paper**, or **Scissors** to make your move
3. Wait for the opponent to "select" their option
4. The result of the round is revealed, and the score updates
5. Play continues up until a player reaches 5 points, click **View Score** anytime to check standings, or **Reset** to start over

## Running Locally

```bash
git clone https://github.com/fatema-dev/Rock-Paper-Scissors.git
cd Rock-Paper-Scissors
```

Then open `index.html`, no build step or dependencies required.

## What I Learned

- Migrating game logic from a console-based interaction model to a full DOM-driven UI
- Managing game state (score, round count, opponent choice) across multiple UI interactions
- Structuring event listeners for multiple interactive buttons (move selection, reset, view score)

## Future Improvements

- Add animations for the opponent's choice reveal
- Add a match history log showing each round's result
- Add difficulty modes (e.g. opponent with weighted/non-random choices)

##  License

This project is open-source and available under the [MIT License](LICENSE).

---

_Developed by fatema-dev_
