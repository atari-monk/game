import "./style.css";

import { pressStart } from "./lib/press-start";
import { getGameElements } from "./lib/canvas-helper";
import { observeContainer } from "atari-monk-engine";
import { startGameLoop } from "./game/game-loop";
import { enterFullscreen } from "./lib/fullscreen";

async function main(): Promise<void> {
  const { canvas, container } = getGameElements();
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  await enterFullscreen(container);

  observeContainer(canvas, container);

  startGameLoop(canvas, ctx);

  console.log("Game is starting");
}

pressStart({ main });
