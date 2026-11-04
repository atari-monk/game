export interface Cross {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  lineWidth: number;
  color: string;
}

const LINE_WIDTH = 2;
const COLOR = "#ff0000";

export function create(canvasWidth: number, canvasHeight: number): Cross {
  return {
    centerX: canvasWidth / 2,
    centerY: canvasHeight / 2,
    width: canvasWidth,
    height: canvasHeight,
    lineWidth: LINE_WIDTH,
    color: COLOR,
  };
}

export function resize(
  cross: Cross,
  canvasWidth: number,
  canvasHeight: number,
): void {
  cross.centerX = canvasWidth / 2;
  cross.centerY = canvasHeight / 2;
  cross.width = canvasWidth;
  cross.height = canvasHeight;
}

export function render(cross: Cross, ctx: CanvasRenderingContext2D): void {
  ctx.strokeStyle = cross.color;
  ctx.lineWidth = cross.lineWidth;

  ctx.beginPath();

  ctx.moveTo(cross.centerX, 0);
  ctx.lineTo(cross.centerX, cross.height);

  ctx.moveTo(0, cross.centerY);
  ctx.lineTo(cross.width, cross.centerY);

  ctx.stroke();
}
