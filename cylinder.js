class Cylinder {
  constructor(x = 60) {
    // Create verts
    this.v_001 = new Vertex(0.0 * x, 0.0 * x, -1.0 * x);
    this.v_002 = new Vertex(0.0 * x, 0.0 * x, 1.0 * x);
    this.v_003 = new Vertex(0.0 * x, -1.0 * x, -1.0 * x);
    this.v_004 = new Vertex(0.0 * x, -1.0 * x, 1.0 * x);
    this.v_005 = new Vertex(-0.587785 * x, -0.809017 * x, -1.0 * x);
    this.v_006 = new Vertex(-0.587785 * x, -0.809017 * x, 1.0 * x);
    this.v_007 = new Vertex(-0.951057 * x, -0.309017 * x, -1.0 * x);
    this.v_008 = new Vertex(-0.951057 * x, -0.309017 * x, 1.0 * x);
    this.v_009 = new Vertex(-0.951057 * x, 0.309017 * x, -1.0 * x);
    this.v_010 = new Vertex(-0.951057 * x, 0.309017 * x, 1.0 * x);
    this.v_011 = new Vertex(-0.587785 * x, 0.809017 * x, -1.0 * x);
    this.v_012 = new Vertex(-0.587785 * x, 0.809017 * x, 1.0 * x);
    this.v_013 = new Vertex(0.0 * x, 1.0 * x, -1.0 * x);
    this.v_014 = new Vertex(0.0 * x, 1.0 * x, 1.0 * x);
    this.v_015 = new Vertex(0.587785 * x, 0.809017 * x, -1.0 * x);
    this.v_016 = new Vertex(0.587785 * x, 0.809017 * x, 1.0 * x);
    this.v_017 = new Vertex(0.951057 * x, 0.309017 * x, -1.0 * x);
    this.v_018 = new Vertex(0.951057 * x, 0.309017 * x, 1.0 * x);
    this.v_019 = new Vertex(0.951057 * x, -0.309017 * x, -1.0 * x);
    this.v_020 = new Vertex(0.951057 * x, -0.309017 * x, 1.0 * x);
    this.v_021 = new Vertex(0.587785 * x, -0.809017 * x, -1.0 * x);
    this.v_022 = new Vertex(0.587785 * x, -0.809017 * x, 1.0 * x);

    // Create triangles
    this.t_001 = new Tri(this.v_001, this.v_003, this.v_005);
    this.t_002 = new Tri(this.v_002, this.v_006, this.v_004);
    this.t_003 = new Tri(this.v_004, this.v_005, this.v_003);
    this.t_004 = new Tri(this.v_001, this.v_005, this.v_007);
    this.t_005 = new Tri(this.v_002, this.v_008, this.v_006);
    this.t_006 = new Tri(this.v_006, this.v_007, this.v_005);
    this.t_007 = new Tri(this.v_001, this.v_007, this.v_009);
    this.t_008 = new Tri(this.v_002, this.v_010, this.v_008);
    this.t_009 = new Tri(this.v_008, this.v_009, this.v_007);
    this.t_010 = new Tri(this.v_001, this.v_009, this.v_011);
    this.t_011 = new Tri(this.v_002, this.v_012, this.v_010);
    this.t_012 = new Tri(this.v_010, this.v_011, this.v_009);
    this.t_013 = new Tri(this.v_001, this.v_011, this.v_013);
    this.t_014 = new Tri(this.v_002, this.v_014, this.v_012);
    this.t_015 = new Tri(this.v_012, this.v_013, this.v_011);
    this.t_016 = new Tri(this.v_001, this.v_013, this.v_015);
    this.t_017 = new Tri(this.v_002, this.v_016, this.v_014);
    this.t_018 = new Tri(this.v_014, this.v_015, this.v_013);
    this.t_019 = new Tri(this.v_001, this.v_015, this.v_017);
    this.t_020 = new Tri(this.v_002, this.v_018, this.v_016);
    this.t_021 = new Tri(this.v_016, this.v_017, this.v_015);
    this.t_022 = new Tri(this.v_001, this.v_017, this.v_019);
    this.t_023 = new Tri(this.v_002, this.v_020, this.v_018);
    this.t_024 = new Tri(this.v_018, this.v_019, this.v_017);
    this.t_025 = new Tri(this.v_001, this.v_019, this.v_021);
    this.t_026 = new Tri(this.v_002, this.v_022, this.v_020);
    this.t_027 = new Tri(this.v_020, this.v_021, this.v_019);
    this.t_028 = new Tri(this.v_001, this.v_021, this.v_003);
    this.t_029 = new Tri(this.v_002, this.v_004, this.v_022);
    this.t_030 = new Tri(this.v_022, this.v_003, this.v_021);
    this.t_031 = new Tri(this.v_004, this.v_006, this.v_005);
    this.t_032 = new Tri(this.v_006, this.v_008, this.v_007);
    this.t_033 = new Tri(this.v_008, this.v_010, this.v_009);
    this.t_034 = new Tri(this.v_010, this.v_012, this.v_011);
    this.t_035 = new Tri(this.v_012, this.v_014, this.v_013);
    this.t_036 = new Tri(this.v_014, this.v_016, this.v_015);
    this.t_037 = new Tri(this.v_016, this.v_018, this.v_017);
    this.t_038 = new Tri(this.v_018, this.v_020, this.v_019);
    this.t_039 = new Tri(this.v_020, this.v_022, this.v_021);
    this.t_040 = new Tri(this.v_022, this.v_004, this.v_003);

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
      this.v_013,
      this.v_014,
      this.v_015,
      this.v_016,
      this.v_017,
      this.v_018,
      this.v_019,
      this.v_020,
      this.v_021,
      this.v_022,
    ];

    // Create triangles array
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
      this.t_021,
      this.t_022,
      this.t_023,
      this.t_024,
      this.t_025,
      this.t_026,
      this.t_027,
      this.t_028,
      this.t_029,
      this.t_030,
      this.t_031,
      this.t_032,
      this.t_033,
      this.t_034,
      this.t_035,
      this.t_036,
      this.t_037,
      this.t_038,
      this.t_039,
      this.t_040,
    ];
  }
}
