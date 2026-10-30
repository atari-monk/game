import "./style.css";

import { pressStart } from "./lib/press-start";
import { getGameElements } from "./lib/canvas-helper";
import { observeContainer } from "atari-monk-engine";

function main(): void {
  const { canvas, container } = getGameElements();
  observeContainer(canvas, container);
  console.log("Game is starting");
}

pressStart({ main });
