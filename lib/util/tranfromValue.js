const booleanValue = (msg) => {
  if (msg.match(/banar$/) || msg.match(/yoi bro$/)) {
    return "true";
  } else if (msg.match(/salah cenah$/)) {
    return "false";
  }

  return null;
};

export default valueTransform = (msg) => {
  let transforms = [booleanValue];

  for (const transform of transforms) {
    let res = transform(msg);
    if (res) {
      return res;
    }
  }
  return msg;
};
