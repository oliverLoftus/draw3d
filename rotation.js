function pythag(vert) {
  return squrt(vert.x ** 2 + vert.z ** 2);
}

function rotateShape_Z(verts, angle) {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  for (const vert of verts) {
    const distanceX = vert.x - 0;
    const distanceZ = vert.y - 0;

    const x = 0 + distanceX * cosA - distanceZ * sinA;
    const y = 0 + distanceX * sinA + distanceZ * cosA;

    vert.x = x;
    vert.y = y;
  }
}

function rotateShape_X(verts, angle) {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  for (const vert of verts) {
    const distanceX = vert.z - 0;
    const distanceZ = vert.y - 0;
    const x = 0 + distanceX * cosA - distanceZ * sinA;
    const y = 0 + distanceX * sinA + distanceZ * cosA;

    vert.z = x;
    vert.y = y;
  }
}

function rotateShape_Y(verts, angle) {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  for (const vert of verts) {
    const distanceX = vert.x - 0;
    const distanceZ = vert.z - 0;
    const x = 0 + distanceX * cosA - distanceZ * sinA;
    const y = 0 + distanceX * sinA + distanceZ * cosA;

    vert.x = x;
    vert.z = y;
  }
}

let angle = 0;
const rotationSpeed = 0.1;

let lastFrameTime = 0;
const frameRate = 60;

function animate(timestamp) {
  const elapsedTime = timestamp - lastFrameTime;
  lastFrameTime = timestamp;
  const frameAngle = (rotationSpeed * elapsedTime) / 1000;
  //rotateShape_Z(shape.verts, frameAngle);
  //rotateShape_X(shape.verts, frameAngle);
  //rotateShape_Y(shape.verts, frameAngle);
  drawCanvas();
  angle += frameAngle;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
