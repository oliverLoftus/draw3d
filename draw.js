const canvas = document.getElementById("myCanvas");
canvas.style.backgroundColor = "black";
const ctx = canvas.getContext("2d");

const zero_X = canvas.width / 2;
const zero_Y = canvas.height / 2;
let fov = 0.001;

let myIco = new Icosahedron();
let mySword = new TinySword(7);
let myCube = new Cube();
let myCylinder = new Cylinder();
let fillAlpha = 1;
let strokeAlpha = 1;
let backfaceCulling = 1;
let shape = mySword;
transform_Z(shape.verts, -75);
shape = myCube;
let light = new Vertex(1, -0.5, 1);
let light2 = new Vertex(-1, 0.5, -1);

//transform_Y(shape.verts, 0)

function perspective_X(vert) {
  return vert.x / ((vert.y + 400) * fov);
}
function perspective_Y(vert) {
  return -vert.z / ((vert.y + 400) * fov); //Z is up
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
}

function drawTriangle(tri) {
  if (backfaceCulling == 1) {
    if (isBackfacing(tri) == 1) {
      return;
    }
  }
  ctx.beginPath();
  ctx.moveTo(
    perspective_X(tri.vertex1) + zero_X,
    perspective_Y(tri.vertex1) + zero_Y
  );
  ctx.lineTo(
    perspective_X(tri.vertex2) + zero_X,
    perspective_Y(tri.vertex2) + zero_Y
  );
  ctx.lineTo(
    perspective_X(tri.vertex3) + zero_X,
    perspective_Y(tri.vertex3) + zero_Y
  );
  ctx.closePath();
  getStyle(tri);
  ctx.stroke();
  ctx.fill();
}

function getStyle(tri) {
  let normal = getNormal(tri);
  let shade = vDistance(light, normal);
  //let blue = vDistance(light2, normal);
  ctx.strokeStyle = `rgba(${200 * shade}, ${200 * shade}, ${
    200 * shade
  }, ${strokeAlpha})`;
  ctx.fillStyle = `rgba(${200 * shade}, ${200 * shade}, ${
    200 * shade
  }, ${fillAlpha})`;
}

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shape.tris.sort(Z_sort);
  for (const tri of shape.tris) {
    drawTriangle(tri);
  }
  //for (const vertex of shape.verts) {
  //if (vertex == shape.verts[1]) {drawCircle(foX(vertex) + centrX, foY(vertex) + centrY);};}
}

drawCanvas();
