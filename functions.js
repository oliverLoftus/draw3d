function getTriCentre(tri) {
  const x = (tri.vertex1.x + tri.vertex2.x + tri.vertex3.x) / 3;
  const y = (tri.vertex1.y + tri.vertex2.y + tri.vertex3.y) / 3;
  const z = (tri.vertex1.z + tri.vertex2.z + tri.vertex3.z) / 3;

  return new Vertex(x, y, z);
}

function Z_sort(triA, triB) {
  const centerA = getTriCentre(triA);
  const centerB = getTriCentre(triB);

  return centerB.y - centerA.y;
}

function normalize(vector) {
  const magnitude = Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2);
  return new Vertex(
    vector.x / magnitude,
    vector.y / magnitude,
    vector.z / magnitude
  );
}

function getAngle(v1, v2) {
  const vector = new Vertex(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
  return normalize(vector);
}

function getNormal(tri) {
  const vector1 = {
    x: tri.vertex2.x - tri.vertex1.x,
    y: tri.vertex2.y - tri.vertex1.y,
    z: tri.vertex2.z - tri.vertex1.z,
  };

  const vector2 = {
    x: tri.vertex3.x - tri.vertex1.x,
    y: tri.vertex3.y - tri.vertex1.y,
    z: tri.vertex3.z - tri.vertex1.z,
  };

  const normal = {
    x: vector1.y * vector2.z - vector1.z * vector2.y,
    y: vector1.z * vector2.x - vector1.x * vector2.z,
    z: vector1.x * vector2.y - vector1.y * vector2.x,
  };

  const length = Math.sqrt(normal.x ** 2 + normal.y ** 2 + normal.z ** 2);

  if (length === 0) {
    return new Vertex(0, 0, 0);
  }

  return new Vertex(normal.x / length, normal.y / length, normal.z / length);
}

function vDistance(vector1, vector2) {
  const dotProduct =
    vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z;
  const magnitude1 = Math.sqrt(
    vector1.x ** 2 + vector1.y ** 2 + vector1.z ** 2
  );
  const magnitude2 = Math.sqrt(
    vector2.x ** 2 + vector2.y ** 2 + vector2.z ** 2
  );
  const cosineSimilarity = dotProduct / (magnitude1 * magnitude2);
  const similarity = 0.5 + 0.5 * cosineSimilarity;

  return similarity;
}

function isBackfacing(tri) {
  let vP = new Vertex(0, -500, 0);
  const normal = getNormal(tri);
  const centoid = getTriCentre(tri);
  const angle = new Vertex(
    vP.x - centoid.x,
    vP.y - centoid.y,
    vP.z - centoid.z
  );

  normalize(angle);
  //const dotProduct = normal.x * angle.x + normal.y * angle.y + normal.z * angle.z;
  dotProduct = vDistance(angle, normal);
  return dotProduct < 0.5;
}
