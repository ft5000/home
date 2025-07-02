import p5 from 'p5';
import myFontURL from '../sketches/Karrik-Regular.ttf';

export const runSketch = () => {
  const sketch = (p) => {
    let font;
    let pg;

    let bgCol;
    let fgCol;

    let canvasW = window.innerWidth;
    let canvasH = window.innerHeight;

    let rows = Math.round(canvasH / 75);
    let stripH = canvasH / rows;

    let pgTextSize = Math.floor(canvasW / 3);
    let pgText = "WORK";

    p.setup = async () => {
      const canvas = p.createCanvas(canvasW, canvasH);
      canvas.parent('work-cvs-cont');

      font = await p.loadFont(myFontURL);
      p.textFont(font);

      bgCol = p.color(0, 0, 255);
      fgCol = p.color(0);

      pg = drawGraphic(p);
      p.frameRate(60);
    };

    p.draw = () => {
      if (!pg) return;

      p.background(bgCol);

      let y = 0;
      for (let i = 0; i < rows; i++) {
        let h = i === rows - 1
          ? canvasH - y
          : stripH + Math.sin((i * 0.5) + (p.frameCount * 0.01)) * (stripH * 0.5);
        
        p.fill(bgCol);
        p.noStroke();
        p.rect(0, y, p.width, h);

        p.stroke(fgCol);
        p.line(0, Math.floor(y + h), p.width, Math.floor(y + h));


        p.image(pg, 0, y, p.width, h);
        y += h;
      }
    };

    function drawGraphic(p) {
      const buffer = p.createGraphics(canvasW, pgTextSize);
      buffer.textFont(font);
      buffer.fill(fgCol);
      buffer.noStroke();
      buffer.textSize(pgTextSize);
      buffer.textAlign(p.CENTER, p.CENTER);
      buffer.text(pgText, buffer.width / 2, buffer.height * 0.6);
      return buffer;
    }

    p.windowResized = () => {
      canvasW = window.innerWidth;
      p.resizeCanvas(canvasW, canvasH);
    };
  };

  new p5(sketch);
};
