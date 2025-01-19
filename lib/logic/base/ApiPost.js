export default (msg) => {
  let format = /satra posEpie url \(\s*(.*)\s*\) BODI = (\{.*\})/;
  let match = msg.match(format);

  let url = match[1];
  let data;

  try {
    data = JSON.parse(match[2]);
  } catch {
    return { error: "Data BODI tidak valid: " + match[2] };
  }

  return {
    exp: `fetch('${url}', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(${JSON.stringify(data)}),})
.then((response) => { if (!response.ok) { throw new Error('Failed to post data'); } return response.json();
})
.then((data) => { console.log('Response from server:', data); })
.catch((error) => { console.error('Error:', error); });`,
  };
};
