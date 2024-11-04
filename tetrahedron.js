class Tetrahedron {
  constructor() {
    // Create verts
    this.v_001 = new Vertex(0, 100, -50);
    this.v_002 = new Vertex(87, -50, -50);
    this.v_003 = new Vertex(-87, -50, -50);
    this.v_004 = new Vertex(0, 0, 140);

    // Create triangles
    this.t_001 = new Tri(this.v_001, this.v_002, this.v_004);
    this.t_002 = new Tri(this.v_002, this.v_003, this.v_004);
    this.t_003 = new Tri(this.v_001, this.v_004, this.v_003);
    this.t_004 = new Tri(this.v_001, this.v_003, this.v_002);

    // Create vert array
    this.verts = [this.v_001, this.v_002, this.v_003, this.v_004];

    // Create triangle array
    this.tris = [this.t_001, this.t_002, this.t_003, this.t_004];
  }
}
