import nokiaChiper from "../../other/h-tools/cryptographic/nokia-chiper.js";

console.log(nokiaChiper.encrypt("kamal suka main layla"));
// 55 2 6 2 555 0 7777 88 55 2 0 6 2 444 66 0 555 2 999 555 2

console.log(
  nokiaChiper.decrypt(
    "55 2 6 2 555 0 7777 88 55 2 0 6 2 444 66 0 555 2 999 555 2",
  ),
);

// console.log(nokiaChiper.reverseMapping());
// console.log(nokiaChiper.mapping);

// --------------------------------------------- //
// node __test__/h-tools/nokiaChiper.js
