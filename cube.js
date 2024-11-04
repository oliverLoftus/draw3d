class Cube {
  constructor(x = 60) {
    // Create verts
    this.v_001 = new Vertex(-x, x, x);
    this.v_002 = new Vertex(-x, -x, x);
    this.v_003 = new Vertex(x, -x, x);
    this.v_004 = new Vertex(x, x, x);
    this.v_005 = new Vertex(-x, x, -x);
    this.v_006 = new Vertex(-x, -x, -x);
    this.v_007 = new Vertex(x, -x, -x);
    this.v_008 = new Vertex(x, x, -x);

    // Create triangles
    this.t_001 = new Tri(this.v_001, this.v_002, this.v_003);
    this.t_002 = new Tri(this.v_001, this.v_003, this.v_004);
    this.t_003 = new Tri(this.v_001, this.v_006, this.v_002);
    this.t_004 = new Tri(this.v_001, this.v_005, this.v_006);
    this.t_005 = new Tri(this.v_001, this.v_004, this.v_008);
    this.t_006 = new Tri(this.v_001, this.v_008, this.v_005);
    this.t_007 = new Tri(this.v_005, this.v_008, this.v_006);
    this.t_008 = new Tri(this.v_006, this.v_008, this.v_007);
    this.t_009 = new Tri(this.v_002, this.v_006, this.v_003);
    this.t_010 = new Tri(this.v_003, this.v_006, this.v_007);
    this.t_011 = new Tri(this.v_003, this.v_008, this.v_004);
    this.t_012 = new Tri(this.v_003, this.v_007, this.v_008);

    // Create vert array
    this.verts = [
      this.v_001,
      this.v_002,
      this.v_003,
      this.v_004,
      this.v_005,
      this.v_006,
      this.v_007,
      this.v_008,
    ];

    // Create triangle array
    this.tris = [
      this.t_001,
      this.t_002,
      this.t_003,
      this.t_004,
      this.t_005,
      this.t_006,
      this.t_007,
      this.t_008,
      this.t_009,
      this.t_010,
      this.t_011,
      this.t_012,
    ];
  }
}
