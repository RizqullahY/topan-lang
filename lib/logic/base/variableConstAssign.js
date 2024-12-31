// assign const variable
import valueTransform from "../../util/transfromValue.js";

export default (message) => {
    const format = /joda ([a-zA-Z_]+[a-zA-Z0-9_]*) = ([^[\]()\n]+)/;
    const match = message.match(format);

    if (!match) return null;

    return {
        exp: `joda ${match[1]} = ${valueTransform(match[2])};`,
    }
}