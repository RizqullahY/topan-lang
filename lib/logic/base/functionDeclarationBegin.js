/**
 * @param {string} message
 * @returns {Object|null}
 */
export default (message) => {
    let format = /fungsi (\w+)((\s\w+)*)? /;
    let match = message.match(format);
    if (!match) return null;

    const [, funcName, paramNames] = match;
    const params = paramNames?.trim().split(/\s+/) ?? [];

    const paramsField = params
        .reduce(
            (p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`),
            ""
        )
        .trim();

    return {
        exp: `function ${funcName}(${paramsField})`,
        openGroup: true,
    };
}