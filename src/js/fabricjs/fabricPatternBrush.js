import { fabric } from 'fabric';

function setVLinePatternBrush(vLinePatternBrush) {
  vLinePatternBrush.getPatternSrc = function() {
    const patternCanvas = fabric.document.createElement('canvas');
    patternCanvas.width = patternCanvas.height = 10;
    const ctx = patternCanvas.getContext('2d');

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(10, 5);
    ctx.closePath();
    ctx.stroke();

    return patternCanvas;
  };
}

function setHLinePatternBrush(hLinePatternBrush) {
  hLinePatternBrush.getPatternSrc = function() {
    const patternCanvas = fabric.document.createElement('canvas');
    patternCanvas.width = patternCanvas.height = 10;
    const ctx = patternCanvas.getContext('2d');

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(5, 0);
    ctx.lineTo(5, 10);
    ctx.closePath();
    ctx.stroke();

    return patternCanvas;
  };
}

function setSquarePatternBrush(squarePatternBrush) {
  squarePatternBrush.getPatternSrc = function() {
    const squareWidth = 10,
      squareDistance = 2;

    const patternCanvas = fabric.document.createElement('canvas');
    patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
    const ctx = patternCanvas.getContext('2d');

    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, squareWidth, squareWidth);

    return patternCanvas;
  };
}

function setDiamondPatternBrush(diamondPatternBrush) {
  diamondPatternBrush.getPatternSrc = function() {
    const squareWidth = 10,
      squareDistance = 5;
    const patternCanvas = fabric.document.createElement('canvas');
    const rect = new fabric.Rect({
      width: squareWidth,
      height: squareWidth,
      angle: 45,
      fill: this.color,
    });

    const canvasWidth = rect.getBoundingRect().width;

    patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
    rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

    const ctx = patternCanvas.getContext('2d');
    rect.render(ctx);

    return patternCanvas;
  };
}

export {
  setVLinePatternBrush,
  setHLinePatternBrush,
  setSquarePatternBrush,
  setDiamondPatternBrush,
};
