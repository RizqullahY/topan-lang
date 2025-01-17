export default (message) => {
  const format = /ulangi (\d+) sampai (\d+)/;
  const match = message.match(format);

  if (!match) return null;
  // if (!match) return {exp: `console.log('YOUR FORMAT IS WRONG')`};

  const start = parseInt(match[1], 10);
  const end = parseInt(match[2], 10);
  if (start < end) {
    return {
      exp: `for (let i = ${start}; i <= ${end}; ++i) { console.log(i);};`,
    };
  } else if (start > end) {
    return {
      exp: `for (let i = ${start}; i >= ${end}; --i) { console.log(i) ;};`,
    };
  }
};
