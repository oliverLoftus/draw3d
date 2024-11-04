class Vertex {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class Normal {
  constructor(azi = 0, ele = 0) {
    this.azi = azi;
    this.ele = ele;
  }
}

class Origin {
  constructor(x = 0, y = 0, z = 0) {
    this.pos = new Vertex(x, y, z);
    this.rot = new Vertex();
  }
}

class Tri {
  constructor(vertex1, vertex2, vertex3) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.vertex3 = vertex3;
  }
}

class Mesh {
  constructor(origin, tris) {
    this.origin = origin;
    this.tris = tris;
  }
}
