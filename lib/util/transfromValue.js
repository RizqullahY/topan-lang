const booleanValue = (message) => {
  if (message.match(/banar$/)) {
    return `true`;
  } else if (message.match(/salahCenah$/)) {
    return `false`;
  }

  return null;
};

export default (message) => {
  let transforms = [booleanValue];

  for (const transform of transforms) {
    let response = transform(message);
    if (response) {
      return response;
    }
  }
  return message;
};
