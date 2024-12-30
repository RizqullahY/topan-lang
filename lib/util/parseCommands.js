//  parsing the command, clean split and remove empty strings

import getCommand from "../logic/index.js";

export default function parseCommands(input) {
  const cmdLines = input
    .replace(/\r\n/g, `\n`)
    .split("\n")
    .filter((v) => !!v);
  const commands = getCommand(cmdLines);

  return commands;
}
