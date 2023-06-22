import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GraphService {
  constructor() {}

  plotFunction(
    canvas: HTMLCanvasElement,
    fx: (x: number) => number,
    options: { step: number; color: string; strokeWidth: number } = {
      step: 1,
      color: "black",
      strokeWidth: 1,
    }
  ): void {
    const { step } = options;
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext("2d");

    if (ctx == null) return;

    // translate origin
    ctx.translate(width / 2, height / 2);

    // bounds
    const x_lower = -width / 2;
    const x_upper = width / 2;
    const y_lower = -height / 2;
    const y_upper = height / 2;

    for (let x = x_lower; x <= x_upper; x += step) {
      if (x === x_lower) {
        ctx.strokeStyle = `${options.color}`;
        ctx.lineWidth = options.strokeWidth;
        ctx.beginPath();
        ctx.moveTo(x, -fx(x));
      }

      ctx.lineTo(x + step, -fx(x + step));
    }
    ctx.stroke();

    // reset origin
    ctx.translate(-width / 2, -height / 2);
  }
}
