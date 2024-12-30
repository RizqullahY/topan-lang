// assign let variable

import valueTransform from "../../util/transfromValue.js";

export default (message) => {
    var format = / fix ([a-zA-Z_]+[a-zA-Z0-9_]*) = ([^[\]\](\)\n]+) /;
    var match = message.match(format);

    if (!match) return null;

    return {
        exp: `const ${match[1]} = ${valueTransform(match[2])};`,
    }
}