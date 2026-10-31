import { create, start } from "atari-monk-engine";
import {
  create as createWhiteRect,
  update as updateWhiteRect,
  render as renderWhiteRect,
} from "./white-rect";

export function startGameLoop(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
): void {
  const whiteRect = createWhiteRect(canvas.width, canvas.height);

  const loop = create(
    (dt: number): void => {
      updateWhiteRect(whiteRect, dt);
    },
    (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      renderWhiteRect(whiteRect, ctx);
    },
  );

  start(loop);
}
