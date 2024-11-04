class Icosahedron {
  constructor() {
    // Create verts
    this.v_001 = new Vertex(0, 0, -100);
    this.v_002 = new Vertex(72.4, -52.6, -44.7);
    this.v_003 = new Vertex(-27.6, -85.1, -44.7);
    this.v_004 = new Vertex(-89.4, 0, -44.7);
    this.v_005 = new Vertex(-27.6, 85.1, -44.7);
    this.v_006 = new Vertex(72.4, 52.6, -44.7);
    this.v_007 = new Vertex(27.6, -85.1, 44.7);
    this.v_008 = new Vertex(-72.4, -52.6, 44.7);
    this.v_009 = new Vertex(-72.4, 52.6, 44.7);
    this.v_010 = new Vertex(27.6, 85.1, 44.7);
    this.v_011 = new Vertex(89.4, 0, 44.7);
    this.v_012 = new Vertex(0, 0, 100);

    // Create triangles
    this.t_001 = new Tri(this.v_002, this.v_003, this.v_001);
    this.t_002 = new Tri(this.v_003, this.v_004, this.v_001);
    this.t_003 = new Tri(this.v_004, this.v_005, this.v_001);
    this.t_004 = new Tri(this.v_005, this.v_006, this.v_001);
    this.t_005 = new Tri(this.v_006, this.v_002, this.v_001);
    this.t_006 = new Tri(this.v_002, this.v_007, this.v_003);
    this.t_007 = new Tri(this.v_003, this.v_007, this.v_008);
    this.t_008 = new Tri(this.v_003, this.v_008, this.v_004);
    this.t_009 = new Tri(this.v_004, this.v_008, this.v_009);
    this.t_010 = new Tri(this.v_004, this.v_009, this.v_005);
    this.t_011 = new Tri(this.v_005, this.v_009, this.v_010);
    this.t_012 = new Tri(this.v_005, this.v_010, this.v_006);
    this.t_013 = new Tri(this.v_006, this.v_010, this.v_011);
    this.t_014 = new Tri(this.v_006, this.v_011, this.v_002);
    this.t_015 = new Tri(this.v_002, this.v_011, this.v_007);
    this.t_016 = new Tri(this.v_007, this.v_012, this.v_008);
    this.t_017 = new Tri(this.v_008, this.v_012, this.v_009);
    this.t_018 = new Tri(this.v_009, this.v_012, this.v_010);
    this.t_019 = new Tri(this.v_010, this.v_012, this.v_011);
    this.t_020 = new Tri(this.v_011, this.v_012, this.v_007);

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
      this.v_009,
      this.v_010,
      this.v_011,
      this.v_012,
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
      this.t_013,
      this.t_014,
      this.t_015,
      this.t_016,
      this.t_017,
      this.t_018,
      this.t_019,
      this.t_020,
    ];
  }
}
