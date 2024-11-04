function handleButtonClick(buttonId) {
  console.log("Button clicked:", buttonId);
  if (buttonFunctions[buttonId]) {
    buttonFunctions[buttonId]();
  }
}

const buttonFunctions = {
  Cube: function () {
    shape = myCube;
  },
  Cylinder: function () {
    shape = myCylinder;
  },
  Icosahedron: function () {
    shape = myIco;
  },
  Sword: function () {
    shape = mySword;
  },
  Solid: function () {
    fillAlpha = 1;
    backfaceCulling = 1;
  },
  Wires: function () {
    fillAlpha = 0;
    backfaceCulling = 0;
  },
  XRay: function () {
    fillAlpha = 0.5;
    backfaceCulling = 0;
  },
};

document
  .getElementById("Cube")
  .addEventListener("click", () => handleButtonClick("Cube"));
document
  .getElementById("Cylinder")
  .addEventListener("click", () => handleButtonClick("Cylinder"));
document
  .getElementById("Icosahedron")
  .addEventListener("click", () => handleButtonClick("Icosahedron"));
document
  .getElementById("Sword")
  .addEventListener("click", () => handleButtonClick("Sword"));
document
  .getElementById("Solid")
  .addEventListener("click", () => handleButtonClick("Solid"));
document
  .getElementById("Wires")
  .addEventListener("click", () => handleButtonClick("Wires"));
document
  .getElementById("XRay")
  .addEventListener("click", () => handleButtonClick("XRay"));
