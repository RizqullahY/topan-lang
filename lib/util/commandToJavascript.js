export default (cmds) => {
    let resultCmds = "";
    let isOpenGroup = false;

    for (const cmd of cmds) {
        let tempRes = cmd.exp;
        if (cmd.closeGroup) {
            tempRes = "} " + tempRes;
            isOpenGroup = false;
        }
        if (cmd.openGroup) {
            tempRes = tempRes + " {";
            isOpenGroup = true;
        }
        resultCmds += tempRes + "\n";
    }
    if (isOpenGroup) {
        resultCmds += " }";
    }

    return resultCmds;
};