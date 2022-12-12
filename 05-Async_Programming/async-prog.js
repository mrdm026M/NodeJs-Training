// Promise - fetchAPI()
import fetch from "node-fetch";

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log(fetchPromise);

// console.log("Started request…");

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

// improve way of above statements
// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//   });

// catching error
// const fetchPromise = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

// async and await -

async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error

    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error

    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data));
