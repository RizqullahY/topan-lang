/**
 * @param message {string}
 */
export default (message) => {
    let format = /udah{2}sih/;
    let match = message.match(format);
    if (!match) return null;

    return {
        exp: "",
        closeGroup: true,
    };
};
