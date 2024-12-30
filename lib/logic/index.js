import variableAssign from "./base/variableAssign.js";
import variableReassign from "./base/variableReassign.js";
import variableConstAssign from "./base/variableConstAssign.js";
import consoleLog from "./base/consoleLog.js";


export default (commandLines ) => {
  let parser = [
    variableAssign,
    variableReassign,
    variableConstAssign,
    consoleLog,
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
