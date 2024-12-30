/**
 * This function analyzes a message and tries to extract the function name
 * and its parameters from the given message.
 * The expected format is "fungsi (<function_name> <parameter_1> <parameter_2> ...)"
 * 
 * @param {string} msg - The message containing the function name and its parameters.
 * @returns {Object|null} - Returns an object with the function declaration format, or null if no match is found.
 */
export default (messsage) => {
    let format = /fungsi (\w+)((\s\w+)*)? /;
    let match = messsage.match(format);
    if (!match) return null;

    // Destructuring to get function name and parameter names from the match
    const [, funcName, paramNames] = match;
    // Splitting the parameter names into an array (if any), removing extra spaces, and splitting by space
    const params = paramNames?.trim().split(/\s+/) ?? [];

    // Convert the array of parameters into a comma-separated string
    const paramsField = params
        .reduce(
            (p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`),
            ""
        )
        .trim();  // Removing any extra spaces at the beginning or end

    return {
        exp: `function ${funcName}(${paramsField})`,  // Format the function declaration string
        openGroup: true,  // This marks that the function declaration is being opened
    };
}