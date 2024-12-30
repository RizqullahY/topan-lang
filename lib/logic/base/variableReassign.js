// reassign variable

import valueTransform from "../../util/tranfromValue.js";

export default variableReassign = (message) => {
    var format = / jadi ([a-zA-Z_]+[a-zA-Z0-9_]*) = ([^[\]\](\)\n]+) /;
    var match = message.match(format);

    if (!match) return null;

    return {
        exp: `${match[1]} = ${valueTransform(match[2])};`,
    }
}