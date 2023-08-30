const { Spacecraft } = require("../src/spacecraft");

describe("Basic initialization testing", () => {
  test("Initialize spacecraft", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");

    expect(spacecraft.position()).toBeDefined();
  });

  const testCases = [
    { x: 0, y: 0, z: 0, direction: "N" },
    { x: 0, y: 0, z: 0, direction: "S" },
    { x: 0, y: 0, z: 0, direction: "W" },
    { x: 0, y: 0, z: 0, direction: "E" },
    { x: 0, y: 0, z: 0, direction: "U" },
    { x: 0, y: 0, z: 0, direction: "D" },
  ];

  for (const testCase of testCases) {
    test(`Initialize spacecraft with values`, () => {
      const spacecraft = new Spacecraft(
        testCase.x,
        testCase.y,
        testCase.z,
        testCase.direction
      );

      expect(spacecraft.position()).toEqual({
        x: testCase.x,
        y: testCase.y,
        z: testCase.z,
        direction: testCase.direction,
      });
    });
  }
});

describe("Spacecraft translate command test", () => {
  const testCases = [
    {
      currentPosition: { x: 0, y: 0, z: 0, direction: "N" },
      commands: [],
      expectedPosition: { x: 0, y: 0, z: 0, direction: "N" },
    },
    {
      currentPosition: { x: 0, y: 0, z: 0, direction: "N" },
      commands: ["f", "r", "u", "b", "l"],
      expectedPosition: { x: 0, y: 1, z: -1, direction: "N" },
    },
    {
      currentPosition: { x: 0, y: 0, z: 0, direction: "N" },
      commands: ["f", "r", "u", "b", "l", "b", "b", "d", "l"],
      expectedPosition: { x: 0, y: -1, z: -1, direction: "S" },
    },
    {
      currentPosition: { x: 0, y: 0, z: 0, direction: "N" },
      commands: ["f", "r", "u", "b", "l", "b", "b"],
      expectedPosition: { x: 0, y: -1, z: -1, direction: "N" },
    },
  ];

  for (const testCase of testCases) {
    test(`Translate commands ${testCase.commands}`, () => {
      const spacecraft = new Spacecraft(
        testCase.currentPosition.x,
        testCase.currentPosition.y,
        testCase.currentPosition.z,
        testCase.currentPosition.direction
      );

      spacecraft.translateCommands(testCase.commands);

      expect(spacecraft.position()).toEqual({
        x: testCase.expectedPosition.x,
        y: testCase.expectedPosition.y,
        z: testCase.expectedPosition.z,
        direction: testCase.expectedPosition.direction,
      });
    });
  }
});
