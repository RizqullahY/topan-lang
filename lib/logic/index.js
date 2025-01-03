import variableAssign from "./base/variableAssign.js";
import consoleLog from "./base/consoleLog.js";
import forLooping from "./base/forLooping.js";


export default (commandLines ) => {
  let parser = [
    variableAssign,
    consoleLog,
    forLooping
  ];

  return commandLines 
    .map((line) => {
      let command = null;

      for (const parse of parser) {
        command = parse(line);
        if (command) break;
      }

      return command;
    })
    .filter((v) => !!v);
}
