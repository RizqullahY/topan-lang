/**
 * @param message {string}
 */
export default (message) => {
    let format = /udah  sih/;
    let match = message.match(format);
    if (!match) return null;

    return {
        exp: "",
        closeGroup: true,
    };
};
