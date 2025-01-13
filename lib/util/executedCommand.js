import vm from 'vm';
import 'dotenv/config';
import commandToJavascript from './commandToJavascript.js';

export default  (commands) => {
  let resultCommands = commandToJavascript(commands);
  if (process.env.COMPILE_TOPAN_LANGUAGE === "true") {
    console.log(resultCommands);
  }
  vm.runInThisContext(resultCommands);
};



