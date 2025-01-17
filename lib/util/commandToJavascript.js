export default (commands) => {
  let resultCommand = "";
  let isOpenGroup = false;

  for (const cmd of commands) {
    let tempRes = cmd.exp;
    if (cmd.closeGroup) {
      tempRes = "} " + tempRes;
      isOpenGroup = false;
    }
    if (cmd.openGroup) {
      tempRes = tempRes + " {";
      isOpenGroup = true;
    }
    resultCommand += tempRes + "\n";
  }
  if (isOpenGroup) {
    resultCommand += " }";
  }

  return resultCommand;
};
