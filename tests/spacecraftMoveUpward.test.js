const { Spacecraft } = require("../src/spacecraft");

describe("Move upwards testing", () => {
  const testCases = [
    { x: 0, y: 0, z: 0, direction: "N" },
    { x: 0, y: 0, z: 0, direction: "S" },
    { x: 0, y: 0, z: 0, direction: "W" },
    { x: 0, y: 0, z: 0, direction: "E" },
    { x: 0, y: 0, z: 0, direction: "U" },
    { x: 0, y: 0, z: 0, direction: "D" },
  ];

  for (const testCase of testCases) {
    test(`Move Upwards with direction ${testCase.direction}`, () => {
      const spacecraft = new Spacecraft(
        testCase.x,
        testCase.y,
        testCase.z,
        testCase.direction
      );
      spacecraft.turnUp();

      expect(spacecraft.position()).toEqual({
        x: testCase.x,
        y: testCase.y,
        z: testCase.z,
        direction: "U",
      });
    });
  }
});
