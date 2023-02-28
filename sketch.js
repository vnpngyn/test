function setup() {
  createCanvas(800, 800);
  generateGlyph();
}

function generateGlyph() {
  background(255);
  let c1 = color(random(255), random(255), random(255));
  let c2 = color(random(255), random(255), random(255));
  let c3 = color(random(255), random(255), random(255));
  let c4 = color(random(255), random(255), random(255));
  let shapes = [
    {type: "circle", x: 500/2, y: 500/2, size: 500*0.7},
    {type: "rect", x: 500/4, y: 500/4, size: 500/2},
    {type: "rect", x: 500*3/4, y: 500/4, size: 500/2},
    {type: "rect", x: 500/4, y: 500*3/4, size: 500/2},
    {type: "rect", x: 500*3/4, y: 500*3/4, size: 500/2},
    {type: "triangle", x: 500/2, y: 500/4, size: 500/2},
    {type: "triangle", x: 500/2, y: 500*3/4, size: 500/2},
    {type: "triangle", x: 500/4, y: 500/2, size: 500/2},
    {type: "triangle", x: 500*3/4, y: 500/2, size: 500/2}
  ];
  shuffle(shapes, true);
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    let fillCol;
    if (i < 4) {
      fillCol = c1;
    } else if (i < 6) {
      fillCol = c2;
    } else {
      fillCol = c3;
    }
    drawShape(shape.type, shape.x, shape.y, shape.size, fillCol);
  }
  drawShape(shapes[8].type, shapes[8].x, shapes[8].y, shapes[8].size, c4);
}

function drawShape(type, x, y, size, fillCol) {
  noStroke();
  fill(fillCol);
  if (type === "circle") {
    ellipse(x, y, size, size);
  } else if (type === "rect") {
    rectMode(CENTER);
    rect(x, y, size, size);
  } else if (type === "triangle") {
    triangle(x-size/2, y+size/2, x, y-size/2, x+size/2, y+size/2);
  }
}

function mouseClicked() {
  generateGlyph();
}
