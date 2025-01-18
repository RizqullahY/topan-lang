export default (msg) => {
  // Regex untuk memetakan pola "jis ( ... )"
  let format = /jis \(\s*(.*)\s*\)/;
  let match = msg.match(format);
  if (!match) return null; // Jika tidak cocok, kembalikan null

  let content = match[1]; // Ambil isi dalam kurung

  // Buat respons berdasarkan isi
  // Contoh, jika ada string dalam tanda kutip
  if (/^".*"$/.test(content)) {
    return {
      exp: `console.log(${content});`,
    };
  }

  // Tambahkan ekspresi atau perintah lainnya sesuai kebutuhan
  if (/^[0-9+\-*/\s]+$/.test(content)) {
    // Jika hanya angka dan operator matematika
    return {
      exp: `console.log(${content}); // Evaluasi ekspresi matematika`,
    };
  }

  // Jika tidak ada pola yang dikenali
  return {
    error: "Sintaks tidak dikenali: " + content,
  };
};
