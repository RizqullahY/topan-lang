import vm from 'vm';
import commandToJavascript from './commandToJavascript.js';

export default executedCommand = (cmds) => {
  let resultCmds = commandToJavascript(cmds);
  vm.runInThisContext(resultCmds);
};



