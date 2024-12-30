import vm from 'vm';
import commandToJavascript from './commandToJavascript.js';

export default  (cmds) => {
  let resultCmds = commandToJavascript(cmds);
  vm.runInThisContext(resultCmds);
};



