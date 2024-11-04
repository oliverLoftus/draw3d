function transform_Z(verts, amount) {
  for (let i = 0; i < verts.length; i++) {
    let vertex = verts[i];
    vertex.z += amount;
  }
}

function transform_Y(verts, amount) {
  for (let i = 0; i < verts.length; i++) {
    let vertex = verts[i];
    vertex.y += amount;
  }
}
