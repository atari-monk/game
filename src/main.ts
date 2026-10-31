import "./style.css";

import { pressStart } from "./lib/press-start";
import { getGameElements } from "./lib/canvas-helper";
import { observeContainer } from "atari-monk-engine";
import { startGameLoop } from "./game/game-loop";

function main(): void {
  const { canvas, container } = getGameElements();
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  observeContainer(canvas, container);

  startGameLoop(canvas, ctx);

  console.log("Game is starting");
}

pressStart({ main });
