export interface Border {
  width: number;
  height: number;
  lineWidth: number;
  color: string;
}

const LINE_WIDTH = 4;
const COLOR = "#ff0000";

export function create(canvasWidth: number, canvasHeight: number): Border {
  return {
    width: canvasWidth,
    height: canvasHeight,
    lineWidth: LINE_WIDTH,
    color: COLOR,
  };
}

export function resize(
  border: Border,
  canvasWidth: number,
  canvasHeight: number,
): void {
  border.width = canvasWidth;
  border.height = canvasHeight;
}

export function render(border: Border, ctx: CanvasRenderingContext2D): void {
  ctx.strokeStyle = border.color;
  ctx.lineWidth = border.lineWidth;
  ctx.strokeRect(
    border.lineWidth / 2,
    border.lineWidth / 2,
    border.width - border.lineWidth,
    border.height - border.lineWidth,
  );
}
