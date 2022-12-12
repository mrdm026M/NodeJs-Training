import fs from "fs";
import util from "util";

// Error - no such file or directory, open 'resource\go.txt'
// read a file
// const data = fs.readFileSync("resource\\go.txt");

/**
 * Error Handling -
 * 1. try…catch blocks
 * 2. Callbacks
 * 3. Promises
 * 4. Event emitters
 */

// 1. try…catch blocks -
// try {
//   fs.readFileSync("resource\\go.txt");
// } catch (err) {
//   console.error(err);
// }

// 2. Callback -
// fs.readFile("resource\\go.txt", (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(result);
// });

// 3. Promise
// const udf_double = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof num !== "number") {
//         reject(new TypeError(`Expected number, got: ${typeof num}`));
//       }

//       const result = num * 2;
//       resolve(result);
//     }, 100);
//   });
// };

// udf_double("8")
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

// util.promisify() -> converts callback func to promises
const readFile = util.promisify(fs.readFile);

readFile("resource\\go.txt")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

console.log("an important piece of code that should be run at the end");
