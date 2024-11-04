let isDragging = false;
let startAngleX = 0;
let startAngleY = 0;

document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchend", handleTouchEnd, false);

function handleMouseDown(event) {
  isDragging = true;
  startAngleX = event.clientX;
  startAngleY = event.clientY;
}

function handleMouseMove(event) {
  if (isDragging) {
    const angleX = (event.clientX - startAngleX) * 0.004;
    const angleY = (event.clientY - startAngleY) * 0.004;
    rotateShape_Z(shape.verts, angleX);
    rotateShape_X(shape.verts, -angleY);
    startAngleX = event.clientX;
    startAngleY = event.clientY;
  }
}

function handleMouseUp() {
  isDragging = false;
}

function handleTouchStart(event) {
  isDragging = true;
  startAngleX = event.touches[0].clientX;
  startAngleY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  event.preventDefault();
  if (isDragging) {
    const angleX = (event.touches[0].clientX - startAngleX) * 0.004;
    const angleY = (event.touches[0].clientY - startAngleY) * 0.004;

    rotateShape_Z(shape.verts, angleX);
    rotateShape_X(shape.verts, -angleY);

    startAngleX = event.touches[0].clientX;
    startAngleY = event.touches[0].clientY;
  }
}

function handleTouchEnd(event) {
  isDragging = false;
}
