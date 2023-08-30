const { Spacecraft } = require("./src/spacecraft");

const spacecraft = new Spacecraft(0, 0, 0, "N");

const commands = ["f", "r", "u", "b", "l"];
spacecraft.translateCommands(commands);

console.log(spacecraft.x, spacecraft.y, spacecraft.z, spacecraft.direction);
