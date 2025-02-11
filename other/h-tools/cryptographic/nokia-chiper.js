const nokiaChiper = {
  mapping: {
    2: "a",
    22: "b",
    222: "c",
    3: "d",
    33: "e",
    333: "f",
    4: "g",
    44: "h",
    444: "i",
    5: "j",
    55: "k",
    555: "l",
    6: "m",
    66: "n",
    666: "o",
    7: "p",
    77: "q",
    777: "r",
    7777: "s",
    8: "t",
    88: "u",
    888: "v",
    9: "w",
    99: "x",
    999: "y",
    9999: "z",
    0: " ",
  },

  reverseMapping: function () {
    let reverse = {};
    for (let key in this.mapping) {
      reverse[this.mapping[key]] = key;
    }
    return reverse;
  },

  encrypt: function (text) {
    let reverseMap = this.reverseMapping();
    return text
      .split("")
      .map((char) => reverseMap[char.toLowerCase()] || char)
      .join(" ");
  },

  decrypt: function (code) {
    return code
      .split(" ")
      .map((num) => this.mapping[num] || num)
      .join("");
  },
};

export default nokiaChiper;
