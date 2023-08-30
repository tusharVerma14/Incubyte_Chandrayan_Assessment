const { Spacecraft } = require("../src/spacecraft");

describe("Forward movement testing", () => {
  const testCases = [
    { x: 0, y: 0, z: 0, direction: "N" },
    { x: 0, y: 0, z: 0, direction: "S" },
    { x: 0, y: 0, z: 0, direction: "W" },
    { x: 0, y: 0, z: 0, direction: "E" },
    { x: 0, y: 0, z: 0, direction: "U" },
    { x: 0, y: 0, z: 0, direction: "D" },
  ];

  for (const testCase of testCases) {
    test(`Move forward with ${testCase.direction}`, () => {
      const spacecraft = new Spacecraft(
        testCase.x,
        testCase.y,
        testCase.z,
        testCase.direction
      );
      spacecraft.moveForward();
      expect(spacecraft.position()).toEqual({
        x:
          testCase.direction === "E"
            ? testCase.x + 1
            : testCase.direction === "W"
            ? testCase.x - 1
            : testCase.x,
        y:
          testCase.direction === "N"
            ? testCase.y + 1
            : testCase.direction === "S"
            ? testCase.y - 1
            : testCase.y,
        z:
          testCase.direction === "U"
            ? testCase.z + 1
            : testCase.direction === "D"
            ? testCase.z - 1
            : testCase.z,
        direction: testCase.direction,
      });
    });
  }
});
