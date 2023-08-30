class Spacecraft {
  constructor(x, y, z, direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;

    this.directionMappings = {
      N: { x: 0, y: 1, z: 0 },
      S: { x: 0, y: -1, z: 0 },
      E: { x: 1, y: 0, z: 0 },
      W: { x: -1, y: 0, z: 0 },
      U: { x: 0, y: 0, z: 1 },
      D: { x: 0, y: 0, z: -1 },
    };

    this.directions = ["N", "E", "S", "W"];
  }

  position() {
    return { x: this.x, y: this.y, z: this.z, direction: this.direction };
  }

  moveForward() {
    const { x, y, z } = this.directionMappings[this.direction];
    this.x += x;
    this.y += y;
    this.z += z;
  }

  moveBackward() {
    const { x, y, z } = this.directionMappings[this.direction];
    this.x -= x;
    this.y -= y;
    this.z -= z;
  }

  turnLeft() {
    if (this.direction === "U" || this.direction === "D") {
      const directions = {
        U: "N",
        D: "S",
      };
      this.direction = directions[this.direction];
      return;
    }
    const currentIdx = this.directions.indexOf(this.direction);
    const nextIdx = (currentIdx + 3) % this.directions.length;
    this.direction = this.directions[nextIdx];
  }

  turnRight() {
    if (this.direction === "U" || this.direction === "D") {
      const directions = {
        U: "S",
        D: "N",
      };
      this.direction = directions[this.direction];
      return;
    }
    const currentIdx = this.directions.indexOf(this.direction);
    const nextIdx = (currentIdx + 1) % this.directions.length;
    this.direction = this.directions[nextIdx];
  }

  turnUp() {
    if (this.direction != "U") {
      this.direction = "U";
    }
  }

  turnDown() {
    if (this.direction != "D") {
      this.direction = "D";
    }
  }

  translateCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
          break;
        case "u":
          this.turnUp();
          break;
        case "d":
          this.turnDown();
          break;
        default:
          console.log(`Unknown command: ${command}`);
      }
    }
    return this;
  }
}

module.exports = { Spacecraft };
