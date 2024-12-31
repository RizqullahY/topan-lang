import vm from 'vm';
import commandToJavascript from './commandToJavascript.js';

export default  (commands) => {
  let resultCommands = commandToJavascript(commands);
  console.log(resultCommands);
  vm.runInThisContext(resultCommands);
};



