export default (message) => {
  const format = /hitEpie "([^"]+)" (langsung|asingkronus)(?: (\d+))?/;
  const match = message.match(format);

  if (!match) {
    return {
      exp: `console.log('Langsung? Asyncronus');`,
    };
  }

  const url = match[1];
  const mode = match[2];
  const delay = parseInt(match[3], 10) || 0;

  if (mode === "langsung") {
    return {
      exp: `fetch("${url}")
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => console.log('Hasil Fetching:', data))
                    .catch(error => console.error('Fetch Error:', error));`,
    };
  } else if (mode === "asingkronus") {
    return {
      exp: `setTimeout(() => {
                        fetch("${url}")
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                }
                                return response.json();
                            })
                            .then(data => console.log('Hasil Fetching dengan Jeda:', data))
                            .catch(error => console.error('Fetch Error:', error));
                    }, ${delay});`,
    };
  }
  return {
    exp: `console.log('Langsung? Asyncronus');`,
  };
};
