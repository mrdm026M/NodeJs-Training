# Error Handling -

Error is an extension of the Error object in Javascript. The error can be constructed and thrown or passed to some function.

throw new Error('bad request'); // throwing new error
callback_function(new Error('connectivity issue')); // passing error as an argument

### Programmer errors

Programmer errors depict issues with the program written — bugs.
Example -

1. Array index out of bounds — trying to access the seventh element of the array when only six are available
2. Syntax errors — failing to close the curly braces while defining a JavaScript function
3. Reference errors — accessing a function or variables that are not defined
4. Deprecation errors and warnings — calling an asynchronous function without a callback
5. Type error — x object is not iterable
6. Failing to handle operational errors

### Operational errors

These are issues during runtime due to external factors that can interrupt the program’s normal flow.
Example -

1. Unable to connect server/database
2. Request timeout
3. Invalid input from the user
4. Socket hang-up
5. 500 response from a server
6. File not found

---

# Error Handling Techniques -

There are four fundamental strategies to report errors in Node.js:

1. try…catch blocks
2. Callbacks
3. Promises
4. Event emitters

## Callbacks -

A callback function (commonly used for asynchronous code) is an argument to the function in which we implement error handling.

The purpose of a callback function is to check the errors before the result of the primary function is used. The callback is usually the final argument to the primary function, and it executes when an error or outcome of the operation emerges.

Syntax -
function (err, result) {}

## Promise -

Promise in Node.js is a contemporary way to handle errors, and it is usually preferred compared to callbacks.

- resolve — used to resolve promises and provide results
- reject — used to report/throw errors

util.promisify() to convert callback-based code into a Promise

---

# JS Error -

JavaScript has six types of errors that may occur during the execution of the script:

1. EvalError
2. RangeError
3. ReferenceError
4. SyntaxError
5. TypeError
6. URIError

---

# System Errors -

Node.js generates system errors when exceptions occur within its runtime environment. These usually occur when an application violates an operating system constraint. For example, a system error will occur if an application attempts to read a file that does not exist.

Below are the system errors commonly encountered when writing a Node.js program

1. EACCES - Permission denied
2. EADDRINUSE - Address already in use
3. ECONNRESET - Connection reset by peer
4. EEXIST - File exists
5. EISDIR - Is a directory
6. EMFILE - Too many open files in system
7. ENOENT - No such file or directory
8. ENOTDIR - Not a directory
9. ENOTEMPTY - Directory not empty
10. ENOTFOUND - DNS lookup failed
11. EPERM - Operation not permitted
12. EPIPE - Broken Pipe
13. ETIMEDOUT - Operation timed out
