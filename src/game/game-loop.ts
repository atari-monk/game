import { create, start } from "atari-monk-engine";
import {
  create as createWhiteRect,
  update as updateWhiteRect,
  render as renderWhiteRect,
} from "./white-rect";
import { create as createCross, render as renderCross } from "./cross";
import { create as createBorder, render as renderBorder } from "./border";

export function startGameLoop(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
): void {
  const whiteRect = createWhiteRect(1920, 1080);
  const cross = createCross(1920, 1080);
  const border = createBorder(1920, 1080);

  const loop = create(
    (dt: number): void => {
      updateWhiteRect(whiteRect, dt);
    },
    (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      renderBorder(border, ctx);
      renderCross(cross, ctx);
      renderWhiteRect(whiteRect, ctx);
    },
  );

  start(loop);
}
