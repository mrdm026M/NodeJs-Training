# Async Programming -

Asynchronous code means that things can happen independently of the main program flow, async functions in JavaScript are processed in the background without blocking other requests. It ensures non-blocking code execution. Asynchronous code executes without having any dependency and no order. This improves the system efficiency and throughput.

## Example -

1. Making HTTP requests - fetch()
2. Accessing a user's camera or microphone - getUserMedia()
3. Asking a user to select files - showOpenFilePicker()

---

# Promise -

A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.
