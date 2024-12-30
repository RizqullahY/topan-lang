export default  (msg) => {
    let format = /cetak (.*)/;
    let match = msg.match(format);
    if (!match) return null;
  
    return {
      exp: `console.log(${match[1]});`,
    };
  };
  