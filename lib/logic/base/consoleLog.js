export default consoleLog = (msg) => {
    let format = /spill (.*)/;
    let match = msg.match(format);
    if (!match) return null;
  
    return {
      exp: `console.log(${match[1]});`,
    };
  };
  