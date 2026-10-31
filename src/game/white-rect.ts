export interface WhiteRect {
  x: number;
  y: number;
  width: number;
  height: number;
  elapsed: number;
  visible: boolean;
}

const RECT_SIZE = 100;
const TOGGLE_INTERVAL = 1;

export function create(canvasWidth: number, canvasHeight: number): WhiteRect {
  return {
    x: canvasWidth / 2 - RECT_SIZE / 2,
    y: canvasHeight / 2 - RECT_SIZE / 2,
    width: RECT_SIZE,
    height: RECT_SIZE,
    elapsed: 0,
    visible: false,
  };
}

export function update(rect: WhiteRect, dt: number): void {
  rect.elapsed += dt;

  if (rect.elapsed >= TOGGLE_INTERVAL) {
    rect.elapsed -= TOGGLE_INTERVAL;
    rect.visible = !rect.visible;
  }
}

export function render(rect: WhiteRect, ctx: CanvasRenderingContext2D): void {
  if (!rect.visible) return;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}
